import Link from 'next/link';
import { Icons } from '~components/Icons';
import { FooterColumns } from '~settings/FooterRoutes';

export function SiteFooter() {
  return (
    <footer className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
        <div className="col-span-full hidden lg:col-span-1 lg:block">
          <div className="text-center">
            <Icons.DevelopBharat className="h-24 p-6 mx-auto" />
            <h2 className="text-xl font-bold">Develop Bharat</h2>
            <p className="mt-1 text-xs sm:text-sm text-center">© {new Date().getFullYear()} Develop Bharat.</p>
          </div>
        </div>

        {/* START Nav Links Columns */}
        {FooterColumns.columns.map((column) => (
          <div key={column.name}>
            <h3 className="text-xs font-semibold uppercase">{column.name}</h3>
            <div className="mt-3 grid space-y-3 text-sm">
              {column.links.map((it) => (
                <p key={it.name}>
                  <Link
                    href={it.href}
                    className="text-buttercup-700 dark:text-buttercup-500 hover:text-buttercup-900 dark:hover:text-buttercup-300">
                    {it.name}
                  </Link>
                  {it.sublabel && <span className="ml-2 inline text-red-700 font-mono">— {it.sublabel}</span>}
                </p>
              ))}
            </div>
          </div>
        ))}
        {/* END Nav Links Columns */}
      </div>
    </footer>
  );
}
