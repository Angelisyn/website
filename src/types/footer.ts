export interface FooterLink {
    label: string;
    href: string;
    external?: boolean;
}

export interface FooterSection {
    title: string;
    links: FooterLink[];
}