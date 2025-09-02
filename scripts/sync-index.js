// petnames/scripts/sync-index.js
const fs = require('fs'), path = require('path');
const langs = ["fr","en","de","es","zh","hi","ar","bn"];
const root = path.join(__dirname, '..');
const src  = path.join(root, 'en', 'index.html');
const html = fs.readFileSync(src, 'utf8');
langs.forEach(l => {
  const dst = path.join(root, l, 'index.html');
  fs.writeFileSync(dst, html);
  console.log('→', path.relative(root, dst));
});
console.log('Done.');
