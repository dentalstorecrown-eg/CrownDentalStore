// Script to URL-encode # symbols in image paths

const fs = require('fs');

console.log('Reading data.js...');
let content = fs.readFileSync('js/data.js', 'utf8');

// Count original # symbols in image paths
const originalHashCount = (content.match(/image: '[^']*#[^']*'/g) || []).length;
console.log(`Found ${originalHashCount} image paths with # symbols`);

// Replace # with %23 in image paths only
// Use regex to match image: 'path' and gallery: ['path'] patterns
content = content.replace(/image: '([^']*)'/g, (match, path) => {
  const encodedPath = path.replace(/#/g, '%23');
  return `image: '${encodedPath}'`;
});

content = content.replace(/gallery: \['([^']*)'/g, (match, path) => {
  const encodedPath = path.replace(/#/g, '%23');
  return `gallery: ['${encodedPath}'`;
});

// Count # symbols after replacement
const newHashCount = (content.match(/image: '[^']*#[^']*'/g) || []).length;
const encodedCount = (content.match(/image: '[^']*%23[^']*'/g) || []).length;

console.log(`After encoding:`);
console.log(`  - Paths with #: ${newHashCount}`);
console.log(`  - Paths with %23: ${encodedCount}`);

// Save the file
fs.writeFileSync('js/data.js', content, 'utf8');
console.log('✓ Successfully updated js/data.js');

// Show some examples
const samples = content.match(/image: '[^']*%23[^']*'/g) || [];
console.log(`\nSample encoded paths:`);
samples.slice(0, 3).forEach((sample, i) => {
  console.log(`  ${i+1}. ${sample}`);
});
