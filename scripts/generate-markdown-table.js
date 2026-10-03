const fs = require('fs');
const path = require('path');

const results = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'verification_results.json'), 'utf8')
);

console.log('| URL | Judul / Title (Karakter) | Deskripsi / Description (Karakter) | H1 | Canonical | Robots | Status |');
console.log('| :--- | :--- | :--- | :---: | :---: | :---: | :---: |');

results.forEach((r) => {
  const cleanDesc = r.desc.replace(/\|/g, '-');
  const allPassed = r.titleOk && r.descOk && r.h1Ok && r.canonicalOk && r.robotsOk;
  console.log(
    `| \`${r.url}\` | ${r.title} (**${r.titleLen}**) | ${cleanDesc} (**${r.descLen}**) | ${r.h1Count} | ${r.canonicalOk ? '✅' : '❌'} | \`${r.robotsVal}\` | ${allPassed ? '✅ PASS' : '❌ FAIL'} |`
  );
});
