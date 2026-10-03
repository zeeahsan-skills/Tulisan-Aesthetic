const fs = require('fs');
const path = require('path');

const srcApp = path.join(__dirname, '..', 'src', 'app');

function getPageFiles(dir, list = []) {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      getPageFiles(fullPath, list);
    } else if (item.name === 'page.tsx') {
      list.push(fullPath);
    }
  }
  return list;
}

const pages = getPageFiles(srcApp);
console.log(`Found ${pages.length} page.tsx files`);
pages.forEach(p => {
  const rel = path.relative(srcApp, p).replace(/\\/g, '/');
  const content = fs.readFileSync(p, 'utf8');
  const hasBreadcrumb = content.includes('BreadcrumbList');
  const hasArticle = content.includes('Article');
  const hasFAQ = content.includes('FAQPage');
  const hasCollection = content.includes('CollectionPage');
  const hasCanonical = content.includes('canonical');
  const hasRobots = content.includes('robots');
  const hasOpenGraph = content.includes('openGraph');
  const hasTwitter = content.includes('twitter');
  console.log(`${rel.padEnd(35)} | BC:${hasBreadcrumb ? 'Y' : 'N'} | Art:${hasArticle ? 'Y' : 'N'} | FAQ:${hasFAQ ? 'Y' : 'N'} | Col:${hasCollection ? 'Y' : 'N'} | Can:${hasCanonical ? 'Y' : 'N'} | Rob:${hasRobots ? 'Y' : 'N'} | OG:${hasOpenGraph ? 'Y' : 'N'}`);
});
