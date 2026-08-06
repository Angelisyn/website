export interface SEOConfig {
    title: string;

    titleTemplate: string;

    description: string;

    keywords: string[];

    author: string;

    creator: string;

    publisher: string;

    robots: {
        index: boolean;
        follow: boolean;
    };

    openGraph: {
        type: string;
        locale: string;
        image: string;
    };

    twitter: {
        card: string;
        image: string;
    };
}