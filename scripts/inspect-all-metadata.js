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
const results = [];

pages.forEach(p => {
  const rel = path.relative(srcApp, p).replace(/\\/g, '/');
  const content = fs.readFileSync(p, 'utf8');

  let title = '';
  let desc = '';
  let canonical = '';
  let robots = '';

  const titleMatch = content.match(/title:\s*['"`](.*?)['"`]/);
  if (titleMatch) title = titleMatch[1];

  const descMatch = content.match(/description:\s*['"`]([\s\S]*?)['"`],/);
  if (descMatch) desc = descMatch[1].replace(/\s+/g, ' ').trim();

  const canonMatch = content.match(/canonical:\s*['"`](.*?)['"`]/);
  if (canonMatch) canonical = canonMatch[1];

  const robotsMatch = content.match(/robots:\s*['"`](.*?)['"`]/);
  if (robotsMatch) robots = robotsMatch[1];

  results.push({
    file: rel,
    title,
    titleLen: title.length,
    desc,
    descLen: desc.length,
    canonical,
    robots
  });
});

console.log(JSON.stringify(results, null, 2));
