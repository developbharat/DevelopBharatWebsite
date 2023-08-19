import { SiteSettings } from '~settings/site';

interface ILink {
  href: string;
  name: string;
  sublabel: string | null;
}
interface IFooterColumns {
  columns: { name: string; links: ILink[] }[];
}

export const FooterColumns: IFooterColumns = {
  columns: [
    {
      name: 'Product',
      links: [
        { name: 'Products', href: '/products', sublabel: null },
        { name: 'Tools', href: '/tools', sublabel: 'Soon' },
        { name: 'Contact Us', href: '/contact', sublabel: 'Soon' },
        { name: 'Donate Us', href: '/donate', sublabel: 'Soon' },
      ],
    },
    {
      name: 'Company',
      links: [
        { name: 'About Us', href: '/about', sublabel: null },
        { name: 'Blog', href: '/articles', sublabel: 'Soon' },
        { name: 'Terms & Conditions', href: '/policies/terms', sublabel: null },
        { name: 'Data Protection', href: '/policies/data', sublabel: null },
      ],
    },
    {
      name: 'Resources',
      links: [
        { name: 'Community', href: '/community', sublabel: 'Soon' },
        { name: 'Help & Support', href: '/support', sublabel: 'Soon' },
        { name: 'Documentation', href: '/docs', sublabel: 'Soon' },
        { name: 'Status', href: '/status', sublabel: 'Soon' },
      ],
    },
    {
      name: 'Social',
      links: [
        { name: 'Youtube', href: SiteSettings.social.youtube, sublabel: null },
        { name: 'Github', href: SiteSettings.social.github, sublabel: null },
        { name: 'Twitter', href: SiteSettings.social.twitter, sublabel: null },
        { name: 'Instagram', href: SiteSettings.social.instagram, sublabel: null },
        { name: 'LinkedIn', href: SiteSettings.social.linkedIn, sublabel: null },
      ],
    },
  ],
};
