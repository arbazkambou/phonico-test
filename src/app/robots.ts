import type { MetadataRoute } from 'next'

const env = process.env.APP_ENV || "dev";

export default function robots(): MetadataRoute.Robots {
    const rules: { userAgent: string, allow?: string, disallow?: string } = { userAgent: '*' }
    if (env === "dev") rules.disallow = "/"
    else rules.allow = "/"

    const robotsObject: MetadataRoute.Robots = {
        rules,
    }
    if (env !== "dev") {
        robotsObject.sitemap = "https://phonico.com/sitemap.xml";
    }
    return robotsObject;
}