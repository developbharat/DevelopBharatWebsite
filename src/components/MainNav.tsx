'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '~lib/utils';
import { Icons } from '~components/Icons';
import { SiteSettings } from '~settings/site';

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.DevelopBharat className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">{SiteSettings.name}</span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname === '/docs' ? 'text-foreground' : 'text-foreground/60',
          )}>
          Home
        </Link>
        <Link
          href="/products"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/docs/components') ? 'text-foreground' : 'text-foreground/60',
          )}>
          Products
        </Link>
        <Link
          href="/about"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/examples') ? 'text-foreground' : 'text-foreground/60',
          )}>
          About Us
        </Link>
        <Link
          href="/contact"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/examples') ? 'text-foreground' : 'text-foreground/60',
          )}>
          Contact Us
        </Link>
      </nav>
    </div>
  );
}
