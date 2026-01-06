const fs = require('fs');
const path = require('path');

// Configuration
const DOMAIN = 'https://karmatms.com';
const OUTPUT_DIR = path.join(__dirname, '../dist/public');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'sitemap.xml');

// Define all routes
const routes = [
{ path: '/', priority: '1.0', changefreq: 'daily' },
{ path: '/about', priority: '0.8', changefreq: 'monthly' },
{ path: '/contact', priority: '0.8', changefreq: 'monthly' },
{ path: '/terms', priority: '0.5', changefreq: 'yearly' },
{ path: '/privacy', priority: '0.5', changefreq: 'yearly' },
{ path: '/refund-policy', priority: '0.5', changefreq: 'yearly' },
{ path: '/faqs', priority: '0.7', changefreq: 'monthly' },
{ path: '/team', priority: '0.8', changefreq: 'monthly' },
{ path: '/locations', priority: '0.9', changefreq: 'monthly' },
{ path: '/conditions', priority: '0.9', changefreq: 'monthly' },
{ path: '/blogs/helping-veterans-ptsd', priority: '0.7', changefreq: 'monthly' },
{ path: '/blogs/tms-vs-medication-veterans', priority: '0.7', changefreq: 'monthly' },
{ path: '/blogs/understanding-ptsd-veterans', priority: '0.7', changefreq: 'monthly' },
{ path: '/blogs/tms-anxiety-veterans', priority: '0.7', changefreq: 'monthly' },
{ path: '/blogs/tms-migraine-veterans', priority: '0.7', changefreq: 'monthly' },
{ path: '/blogs/veterans', priority: '0.7', changefreq: 'monthly' },
{ path: '/blogs/va-veterans-ptsd-tms', priority: '0.7', changefreq: 'monthly' },
{ path: '/blogs/va-disability-benefits-mental-health', priority: '0.7', changefreq: 'monthly' }];


// Generate sitemap XML
function generateSitemap() {
  const today = new Date().toISOString().split('T')[0];

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  routes.forEach((route) => {
    xml += '  <url>\n';
    xml += `    <loc>${DOMAIN}${route.path}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += '  </url>\n';
  });

  xml += '</urlset>';

  return xml;
}

// Ensure output directory exists
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Created directory: ${dirPath}`);
  }
}

// Write sitemap to file
function writeSitemap() {
  try {
    ensureDirectoryExists(OUTPUT_DIR);

    const sitemapContent = generateSitemap();
    fs.writeFileSync(OUTPUT_FILE, sitemapContent, 'utf8');

    console.log('✓ Sitemap generated successfully!');
    console.log(`  Location: ${OUTPUT_FILE}`);
    console.log(`  Total URLs: ${routes.length}`);
    console.log(`  Accessible at: ${DOMAIN}/sitemap.xml`);
  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  }
}

// Execute
writeSitemap();