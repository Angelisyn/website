export interface SEOConfig {
    title: string

    titleTemplate: string

    description: string

    keywords: string[]

    author: string

    creator: string

    robots: {
        index: boolean

        follow: boolean
    }
}