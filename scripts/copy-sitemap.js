const fs = require('fs');
const path = require('path');

const source = path.join(__dirname, '../dist/public/sitemap.xml');
const destination = path.join(__dirname, '../dist/sitemap.xml');

try {
  if (fs.existsSync(source)) {
    fs.copyFileSync(source, destination);
    console.log('✓ Sitemap copied to dist root for accessibility');
  }
} catch (error) {
  console.error('Note: Could not copy sitemap to dist root:', error.message);
}