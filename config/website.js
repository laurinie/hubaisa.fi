module.exports = {
    siteUrl: "https://tapahtuma.ryo.fi",
    pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
    title: 'Ryö', // Navigation and Site Title
    titleAlt: 'Ryo', // Title for JSONLD
    description: "Tapahtuma ryö tarjoaa tekniikan pieniin tapahtumiin. Oli kyseessä sitten häät tai kotibileet, meiltä pitäisi löytyä siihen ratkaisu. Kaiutimet ja valot",
    headline: 'Itä-Helsinkiläinen tapahtumatekniikan yritys', // Headline for schema.org JSONLD
    url: 'https://tapahtuma.ryo.fi', // Domain of your site. No trailing slash!
    siteLanguage: 'fi', // Language Tag on <html> element
    logo: 'src/images/ryo.png', // Used for SEO
    ogLanguage: 'fi_FI', // Facebook Language
    banner: 'src/images/ryo.png',

    // JSONLD / Manifest
    favicon: 'src/images/ryo.png', // Used for manifest favicon generation
    shortName: 'tapahuma ryo', // shortname for manifest. MUST be shorter than 12 characters
    author: 'Ryo Oy', // Author for schemaORGJSONLD
    themeColor: '#fc0303',
    backgroundColor: '#fff',

    // twitter: '@starter_prismicio', // Twitter Username
    facebook: 'Ryo', // Facebook Site Name
    googleAnalyticsID: 'UA-160763804-1',

    // skip,NavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
}