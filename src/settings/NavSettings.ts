import { SiteSettings } from '~settings/site';
import { Icons } from '~components/Icons';

interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
}

interface MainNavItem extends NavItem {}

interface INavSettings {
  mainNav: MainNavItem[];
}

export const NavSettings: INavSettings = {
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Products',
      href: '/products',
    },
    {
      title: 'About Us',
      href: '/about',
    },
    {
      title: 'Contact Us',
      href: '/contact',
    },
    {
      title: 'GitHub',
      href: SiteSettings.social.github,
      external: true,
    },
    {
      title: 'Twitter',
      href: SiteSettings.social.twitter,
      external: true,
    },
  ],
};
