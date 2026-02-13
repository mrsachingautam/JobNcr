const fs = require('fs');

const config = {
    baseUrl: "https://ncrone.in",
    detailsPage: "job-details.html",
    files: ["noida", "ncr"] // आपकी JSON फाइल्स के नाम
};

const today = new Date().toISOString().split('T')[0];

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${config.baseUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${config.baseUrl}/all-jobs.html</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>`;

config.files.forEach(fileKey => {
    const fileName = `${fileKey}.json`;

    if (fs.existsSync(fileName)) {
        try {
            const fileData = JSON.parse(fs.readFileSync(fileName, 'utf8'));
            fileData.forEach(job => {
                if (job.id) {
                    const jobUrl = `${config.baseUrl}/${config.detailsPage}?file=${fileKey}&amp;id=${job.id}`;
                    sitemap += `
  <url>
    <loc>${jobUrl}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
                }
            });
        } catch (err) {
            console.error(`Error in ${fileName}:`, err.message);
        }
    }
});

sitemap += '\n</urlset>';
fs.writeFileSync('sitemap.xml', sitemap);
console.log('✅ sitemap.xml सफलतापूर्वक बन गया है!');