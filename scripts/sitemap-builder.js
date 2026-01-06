const fs = require('fs');
const path = require('path');

// Configuration
const DOMAIN = 'https://karmatms.com';
const OUTPUT_DIR = path.join(__dirname, '../dist/public');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'sitemap-dynamic.xml');

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
{ path: '/blog/veterans-tms-therapy', priority: '0.7', changefreq: 'monthly' },
{ path: '/blog/va-veterans-ptsd-tms-treatment', priority: '0.7', changefreq: 'monthly' },
{ path: '/blog/va-disability-benefits-depression-anxiety-ptsd', priority: '0.7', changefreq: 'monthly' },
{ path: '/blog/tms-vs-medication-veterans-depression', priority: '0.7', changefreq: 'monthly' },
{ path: '/blog/how-to-help-veterans-ptsd', priority: '0.7', changefreq: 'monthly' },
{ path: '/blog/understanding-ptsd-veterans', priority: '0.7', changefreq: 'monthly' },
{ path: '/blog/tms-anxiety-veterans', priority: '0.7', changefreq: 'monthly' },
{ path: '/blog/tms-migraine-veterans', priority: '0.7', changefreq: 'monthly' },
{ path: '/blog/why-tms-requires-multiple-sessions', priority: '0.7', changefreq: 'monthly' },
{ path: '/blog/four-as-stress-management', priority: '0.7', changefreq: 'monthly' },
{ path: '/blog/is-tms-therapy-permanent', priority: '0.7', changefreq: 'monthly' },
{ path: '/blog/is-tms-therapy-legitimate', priority: '0.7', changefreq: 'monthly' },
{ path: '/blog/how-successful-tms-treatment', priority: '0.7', changefreq: 'monthly' },
{ path: '/blog/screen-time-mental-health', priority: '0.7', changefreq: 'monthly' },
{ path: '/blog/mindfulness-stress-management', priority: '0.7', changefreq: 'monthly' },
{ path: '/blog/tech-mental-health-impact', priority: '0.7', changefreq: 'monthly' },
{ path: '/blog/mental-health-first-aid', priority: '0.7', changefreq: 'monthly' },
{ path: '/blog/empowering-youth-emotional-resilience', priority: '0.7', changefreq: 'monthly' },
{ path: '/blog/family-dynamics-mental-health', priority: '0.7', changefreq: 'monthly' },
{ path: '/blog/managing-anxiety-triggers', priority: '0.7', changefreq: 'monthly' },
{ path: '/blog/depression-erectile-dysfunction', priority: '0.7', changefreq: 'monthly' },
{ path: '/blog/connecting-teens-mental-wellness', priority: '0.7', changefreq: 'monthly' },
{ path: '/blog/mental-health-community-violence', priority: '0.7', changefreq: 'monthly' },
{ path: '/blog/rural-mental-healthcare', priority: '0.7', changefreq: 'monthly' },
{ path: '/blog/social-media-mental-wellbeing', priority: '0.7', changefreq: 'monthly' },
{ path: '/blog/common-reasons-psychotherapy', priority: '0.7', changefreq: 'monthly' },
{ path: '/blog/exploring-multifaceted-dynamics-suicide-elderly-population', priority: '0.7', changefreq: 'monthly' },
{ path: '/blog/psychiatrists-boost-well-being-expert-care-mental-health', priority: '0.7', changefreq: 'monthly' },
{ path: '/blog/tms-therapy-treatment-resistant-depression', priority: '0.7', changefreq: 'monthly' },
{ path: '/blog/how-does-adhd-treatment-work', priority: '0.7', changefreq: 'monthly' },
{ path: '/blog/how-to-avoid-stress-during-holidays', priority: '0.7', changefreq: 'monthly' },
{ path: '/blog/does-tms-therapy-work-for-anxiety', priority: '0.7', changefreq: 'monthly' }];


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