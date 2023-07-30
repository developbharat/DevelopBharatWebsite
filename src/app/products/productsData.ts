import basicutilities from '~photos/products/basicutilities.jpg';
import corenodeutils from '~photos/products/corenodeutils.jpg';
import { SiteRotues } from '~settings/SiteRoutes';
import { IProductItem } from './components/ProductItem';

export const productsData: IProductItem[] = [
  {
    name: 'CoreNodeUtils',
    description:
      'Optimize your Node.js projects with Core Node.js Utils npm library which offers Secure environment file loader, versatile validators, and robust request/response handling!',
    href: 'https://www.npmjs.com/package/@developbharat/corenodeutils',
    isHrefExternal: true,
    cover: { src: corenodeutils, alt: 'CoreNodeUtils' },
  },
  {
    name: 'Basic Utilities',
    description:
      'Experience our Basic Utilites such as Unit Conversion, Image Utilities such as Image Converstion, Image Optimisation and much more.',
    href: SiteRotues.tools,
    isHrefExternal: false,
    cover: { src: basicutilities, alt: 'Basic Utilities' },
  },
];
