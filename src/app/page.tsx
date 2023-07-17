import Link from 'next/link';
import { buttonVariants } from '~components/Button';
import { Icons } from '~components/Icons';
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '~components/PageHeader';
import { cn } from '~lib/utils';
import { SiteSettings } from '~settings/site';

export default function Home() {
  return (
    <div className="container relative">
      <PageHeader className="pb-8">
        <PageHeaderHeading>Welcome to Develop Bharat</PageHeaderHeading>
        <PageHeaderDescription>{SiteSettings.description}</PageHeaderDescription>
        <div className="flex w-full items-center space-x-4 pb-8 pt-4 md:pb-10">
          <Link href="/products" className={cn(buttonVariants())}>
            Get Started
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={SiteSettings.social.github}
            className={cn(buttonVariants({ variant: 'outline' }))}>
            <Icons.DevelopBharat className="mr-2 h-4 w-4" />
            GitHub
          </Link>
        </div>
      </PageHeader>
      <section>
        <h1>Superb, We can now even have more sections. We are done setting up initial things.</h1>
      </section>
    </div>
  );
}
