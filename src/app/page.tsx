import Image from 'next/image';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';
import { Button } from '~components/Button';
import welcome from '~photos/home/welcome.jpg';
import { SiteRotues } from '~settings/SiteRoutes';

export default function Home() {
  return (
    <div className="container mx-auto py-10">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 text-center lg:text-left">
        {/* Hero Content */}
        <div className="lg:flex lg:items-center">
          <div>
            <span className="block">
              <span className="font-semibold inline-flex px-2 py-1 leading-4 mb-2 text-sm rounded text-buttercup-700 bg-buttercup-200">
                WELCOME TO DEVELOP BHARAT
              </span>
            </span>
            <Balancer as="h2" className="block text-3xl  font-medium md:text-4xl leading-relaxed mb-4">
              We are Empowering a Self-Reliant Nation...
            </Balancer>
            <Balancer as="p" className="text-lg md:text-xl md:leading-relaxed">
              Welcome to Develop Bharat: We Develop Products That Serve Humanity. Join us to Empower a Self-Reliant
              Nation through Digital Innovation.
            </Balancer>
            <div className="flex flex-col sm:flex-row sm:items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-2 pt-10 pb-16">
              <Link href={SiteRotues.tools}>
                <Button variant="default">Get Started</Button>
              </Link>
              <Link href={SiteRotues.products}>
                <Button variant="outline">Browse Products</Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:flex lg:justify-center lg:items-center">
          <div className="lg:w-96 relative">
            <div className="absolute pattern-dots-xl text-indigo-400 top-0 left-0 w-32 h-48 md:h-96 transform -translate-y-12 -translate-x-16 -rotate-3" />
            <div className="absolute pattern-dots-xl text-indigo-400 bottom-0 right-0 w-32 h-48 md:h-96 transform translate-y-12 translate-x-16 rotate-3" />
            <div className="absolute rounded-full top-0 right-0 w-32 h-32 bg-buttercup-400 bg-opacity-50 -mt-12 -mr-12" />
            <div className="absolute rounded-xl bottom-0 left-0 w-32 h-32 bg-blue-400 bg-opacity-50 -mb-10 -ml-10 transform rotate-3" />
            <Image src={welcome} alt="We are glad you are here" className="relative rounded-lg mx-auto shadow-lg" />
          </div>
        </div>
        {/* END Hero Content */}
      </section>
      {/* END Hero Section */}
    </div>
  );
}
