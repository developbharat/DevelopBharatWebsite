import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

export interface IProductItem {
  cover: { src: StaticImageData; alt: string };
  name: string;
  description: string;
  href: string;
  isHrefExternal?: boolean;
}

export const ProductItem: React.FC<IProductItem> = ({ cover, href, name, description, isHrefExternal }) => {
  return (
    <Link target={isHrefExternal ? '_blank' : undefined} className="group rounded-xl overflow-hidden" href={href}>
      <div className="sm:flex">
        <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
          <Image
            className="w-full h-full absolute top-0 left-0 object-cover rounded-xl"
            src={cover.src}
            alt={cover.alt}
          />
        </div>
        <div className="grow mt-4 sm:mt-0 sm:ml-6 px-4 sm:px-0">
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="mt-3 opacity-90">{description}</p>
          <p className="mt-4 inline-flex items-center gap-x-1.5 text-blue-600 hover:underline font-medium">Read more</p>
        </div>
      </div>
    </Link>
  );
};
