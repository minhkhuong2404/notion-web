/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://luminhkhuong.vercel.app/',
    generateRobotsTxt: true,
    changefreq: 'daily',
    priority: 0.7,
    sitemapSize: 5000,
    exclude: ['/sitemap-howz.xml'], 
    robotsTxtOptions: {
        policies : [
            {
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/post/[slug]',
                    '/tag/[tag]'
                ]
            }

        ],
        additionalSitemaps: [
            'https://luminhkhuong.vercel.app/sitemap-howz.xml',
        ],
    },
}