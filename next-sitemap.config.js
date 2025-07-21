/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://cholab.science', // Your deployed domain
    generateRobotsTxt: true,           // Automatically generate robots.txt
    changefreq: 'weekly',              // Update frequency (Google hint)
    priority: 0.7,                     // Default priority for pages
    sitemapSize: 5000,                 // Max URLs per sitemap file
    exclude: ['/admin', '/preview', '/home', '/icon.png'],  // Optional: exclude private paths
};
// This configuration file is used by next-sitemap to generate the sitemap.xml