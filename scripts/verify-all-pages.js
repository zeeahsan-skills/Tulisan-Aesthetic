const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, '..', '.next', 'server', 'app');

function getHtmlFiles(dir, list = []) {
  if (!fs.existsSync(dir)) return list;
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) {
      getHtmlFiles(full, list);
    } else if (item.name.endsWith('.html') && !item.name.includes('_not-found') && !item.name.includes('_global-error')) {
      list.push(full);
    }
  }
  return list;
}

function decodeHtmlEntities(str) {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'");
}

const htmlFiles = getHtmlFiles(appDir);

const results = [];
let failures = [];

htmlFiles.forEach((file) => {
  const rel = path.relative(appDir, file).replace(/\\/g, '/');
  let url = '/' + rel.replace(/\.html$/, '');
  if (url === '/index') url = '/';

  const html = fs.readFileSync(file, 'utf8');

  // Title
  const titleMatch = html.match(/<title>([^<]*)<\/title>/i);
  const rawTitle = titleMatch ? titleMatch[1] : '';
  const cleanTitle = decodeHtmlEntities(rawTitle);
  const titleLen = cleanTitle.length;
  // Check length against <= 60
  const titleOk = titleLen > 0 && titleLen <= 60;

  // Description
  const descMatch = html.match(/<meta\s+name="description"\s+content="([^"]*)"/i) ||
                    html.match(/<meta\s+content="([^"]*)"\s+name="description"/i);
  const rawDesc = descMatch ? descMatch[1] : '';
  const cleanDesc = decodeHtmlEntities(rawDesc);
  const descLen = cleanDesc.length;
  const descOk = descLen > 0 && descLen <= 160;

  // H1 count
  const h1Matches = html.match(/<h1(\s|>)/gi) || [];
  const h1Count = h1Matches.length;
  const h1Ok = h1Count === 1;

  // Canonical
  const canonicalMatch = html.match(/<link\s+rel="canonical"\s+href="([^"]*)"/i) ||
                         html.match(/<link\s+href="([^"]*)"\s+rel="canonical"/i);
  const canonicalUrl = canonicalMatch ? canonicalMatch[1] : '';
  const expectedCanonical = url === '/' ? 'https://tulisan-aesthetic.vercel.app' : `https://tulisan-aesthetic.vercel.app${url}`;
  const canonicalOk = canonicalUrl === expectedCanonical;

  // Robots
  const robotsMatch = html.match(/<meta\s+name="robots"\s+content="([^"]*)"/i) ||
                      html.match(/<meta\s+content="([^"]*)"\s+name="robots"/i);
  const robotsVal = robotsMatch ? robotsMatch[1] : 'index, follow';
  const isNoindexExpected = ['/privacy', '/terms', '/disclaimer'].includes(url);
  const robotsOk = isNoindexExpected ? robotsVal.includes('noindex') : robotsVal.includes('index') && !robotsVal.includes('noindex');

  // OG & Twitter
  const ogTitle = html.match(/<meta\s+property="og:title"\s+content="([^"]*)"/i);
  const ogDesc = html.match(/<meta\s+property="og:description"\s+content="([^"]*)"/i);
  const ogUrl = html.match(/<meta\s+property="og:url"\s+content="([^"]*)"/i);
  const twCard = html.match(/<meta\s+name="twitter:card"\s+content="([^"]*)"/i);

  const ogOk = !!(ogTitle && ogDesc && ogUrl && ogUrl[1] === expectedCanonical);
  const twOk = !!(twCard && twCard[1] === 'summary_large_image');

  // JSON-LD schemas
  const ldJsonMatches = html.match(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi) || [];
  const schemas = ldJsonMatches.map(m => {
    try {
      const jsonStr = m.replace(/<script[^>]*>|<\/script>/gi, '');
      const parsed = JSON.parse(jsonStr);
      return parsed['@type'] || (Array.isArray(parsed) ? parsed.map(x => x['@type']).join('+') : 'unknown');
    } catch(e) {
      return 'invalid';
    }
  });

  const row = {
    url,
    title: cleanTitle,
    titleLen,
    titleOk,
    desc: cleanDesc,
    descLen,
    descOk,
    h1Count,
    h1Ok,
    canonicalUrl,
    canonicalOk,
    robotsVal,
    robotsOk,
    ogOk,
    twOk,
    schemas: schemas.join(', ')
  };

  results.push(row);

  const failedItems = [];
  if (!titleOk) failedItems.push(`Title (${titleLen} chars > 60: "${cleanTitle}")`);
  if (!descOk) failedItems.push(`Desc (${descLen} chars > 160: "${cleanDesc}")`);
  if (!h1Ok) failedItems.push(`H1 count = ${h1Count}`);
  if (!canonicalOk) failedItems.push(`Canonical mismatch: "${canonicalUrl}" vs expected "${expectedCanonical}"`);
  if (!robotsOk) failedItems.push(`Robots invalid: "${robotsVal}"`);
  if (!ogOk) failedItems.push(`OG tags mismatch`);
  if (!twOk) failedItems.push(`Twitter card mismatch`);

  if (failedItems.length > 0) {
    failures.push({ url, failedItems });
  }
});

// Remove duplicate static / dynamic HTML if any (e.g. blog/font-whatsapp static vs dynamic)
const uniqueMap = new Map();
results.forEach(r => {
  if (!uniqueMap.has(r.url)) {
    uniqueMap.set(r.url, r);
  }
});

const finalResults = Array.from(uniqueMap.values());
finalResults.sort((a, b) => a.url.localeCompare(b.url));

console.log(`TOTAL UNIQUE PAGES VERIFIED: ${finalResults.length}`);
console.log(`FAILURES COUNT: ${failures.length}`);

if (failures.length > 0) {
  console.log('\n--- DETAILED FAILURES ---');
  failures.forEach(f => {
    console.log(`[FAIL] ${f.url}: ${f.failedItems.join(' | ')}`);
  });
} else {
  console.log('\nALL PAGES PASSED ALL CHECKS (100% OK)!');
}

fs.writeFileSync(path.join(__dirname, 'verification_results.json'), JSON.stringify(finalResults, null, 2));
