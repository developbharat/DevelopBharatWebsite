import Image from 'next/image';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';
import { Button } from '~components/Button';
import { Icon } from '~components/Icon';
import welcome from '~photos/home/welcome.jpg';
import laughing from '~photos/home/laughing.jpeg';
import { SiteRotues } from '~settings/SiteRoutes';
import ourStory from '~photos/home/our-story.jpeg';
import subashBose from '~photos/home/subash-bose.jpeg';
import { SiteSettings } from '~settings/site';

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
            <Balancer as="h2" className="headline">
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

      {/* START Quick Features */}
      <section className="pt-40 pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* START Feature Item */}
        <div>
          <Icon label="radar indicating speed and security" icon="Radar" className="w-9 h-9" />
          <div className="bg-gradient-to-r from-gray-200 to-white/0 h-0.5 mt-6 dark:from-gray-700 dark:to-slate-900/0">
            <div className="bg-gray-400 w-9 h-0.5" />
          </div>
          <div className="mt-5">
            <h3 className="text-lg font-semibold">Fast and Secure</h3>
            <Balancer as="p" className="mt-1">
              We host our services with robust and autoscaling infrastructure, making us fast in 99.9% cases. Our
              approach to minimal dependencies keeps us secure from vulnerabilities.
            </Balancer>
          </div>
        </div>
        {/* END Feature Item */}

        {/* START Feature */}
        <div>
          <Icon label="school icon indicating national pride" icon="School2" className="w-9 h-9" />
          <div className="bg-gradient-to-r from-gray-200 to-white/0 h-0.5 mt-6 dark:from-gray-700 dark:to-slate-900/0">
            <div className="bg-gray-400 w-9 h-0.5" />
          </div>
          <div className="mt-5">
            <h3 className="text-lg font-semibold">National Pride</h3>
            <Balancer as="p" className="mt-1">
              At Develop Bharat, our love for our nation runs deep. From creating innovative solutions to fostering
              digital independence, our commitment to our country drives us forward.
            </Balancer>
          </div>
        </div>
        {/* END Feature Item */}

        {/* START Feature Item */}
        <div>
          <Icon label="dollar icon representing free tools" icon="CircleDollarSign" className="w-9 h-9" />
          <div className="bg-gradient-to-r from-gray-200 to-white/0 h-0.5 mt-6 dark:from-gray-700 dark:to-slate-900/0">
            <div className="bg-gray-400 w-9 h-0.5" />
          </div>
          <div className="mt-5">
            <h3 className="text-lg font-semibold">Free Tools</h3>
            <Balancer as="p" className="mt-1">
              We provide lots of free resources for the benefit of humanity. we accept donations and use a unique
              advertisment method that does not effect user experince still offering us some money.
            </Balancer>
          </div>
        </div>
        {/* END Feature Item */}

        {/* START Feature Item */}
        <div>
          <Icon label="smile icon" icon="SmilePlus" className="w-9 h-9" />
          <div className="bg-gradient-to-r from-gray-200 to-white/0 h-0.5 mt-6 dark:from-gray-700 dark:to-slate-900/0">
            <div className="bg-gray-400 w-9 h-0.5" />
          </div>
          <div className="mt-5">
            <h3 className="text-lg font-semibold">Best Products</h3>
            <Balancer as="p" className="mt-1">
              At Develop Bharat, we take pride in offering the finest products, including our versatile Basic Tools for
              everyday use. Our advanced OCR Tool, allows better document understanding.
            </Balancer>
          </div>
        </div>
        {/* END Feature Item */}
      </section>
      {/* END Quick Features */}

      {/* START Our Story */}
      <section className="py-10 lg:py-14 mx-auto">
        <div className="min-h-[35vh] relative rounded-xl">
          <Image src={ourStory} alt="our story" className="bg-center bg-cover bg-no-repeat" />
          <div className="absolute bottom-0 left-0 right-0 max-w-xs text-center mx-auto p-6 md:left-auto md:text-left md:mx-0">
            {/* Card */}
            <div className="px-5 py-4 inline-block bg-white rounded-lg md:p-7 dark:bg-gray-800">
              <div className="hidden md:block">
                <Balancer as="h2" className="text-lg font-bold">
                  What is Develop Bharat doing?
                </Balancer>
                <Balancer as="p" className="mt-2">
                  Watch us on Youtube to know more about us.
                </Balancer>
              </div>
              <div className="md:mt-16">
                <Link
                  target="_blank"
                  href={SiteSettings.social.youtube}
                  className="flex space-x-2 justify-center items-center">
                  <Icon label="play icon" icon="PlayCircle" className="w-4 h-auto" />
                  <span>Watch on Youtube</span>
                </Link>
              </div>
            </div>
            {/* End Card */}
          </div>
        </div>
      </section>
      {/* END Our Story */}

      {/* START Our Tools */}
      <section className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Grid */}
        <div className="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <h2 className="headline">Our Tools for Digital Empowerment</h2>
            <p className="mt-2 md:mt-4">
              Discover our range of powerful applications that foster self-reliance. From Chat/Video Conferences to
              Basic Utilities, OCR, AI Models, and more, we are building the foundations for a digitally sovereign
              nation.
            </p>
            <div className="mt-8 flex space-x-2">
              <Button variant="default">Check our Products</Button>
              <Button variant="outline">Check our Tools</Button>
            </div>
          </div>
          {/* End Col */}
          <div className="lg:col-span-2">
            <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
              {/* Icon Block */}
              <div className="flex gap-x-5 rounded-lg p-3 bg-buttercup-200 dark:bg-transparent dark:border-2 dark:border-buttercup-400">
                <Icon label="basic utilities" icon="Ruler" className="h-6 w-6 mt-1 flex-shrink-0" />

                <div className="grow">
                  <h3 className="text-lg font-semibold">Basic Utilities</h3>
                  <p className="mt-1">
                    Experience our Basic Utilites such as Unit Conversion, Image Utilities such as Image Converstion,
                    Image Optimisation and much more.
                  </p>
                  <Button variant="outline" asChild className="mt-2 w-full flex space-x-2">
                    <Link href="/tools">
                      <Icon label="check it out" icon="ArrowRightCircle" />
                      <span>Check it out!</span>
                    </Link>
                  </Button>
                </div>
              </div>
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className="flex gap-x-5 rounded-lg p-3 bg-orange-200 dark:bg-transparent dark:border-2 dark:border-orange-400">
                <Icon label="document understanding" icon="FileScan" className="h-6 w-6 mt-1 flex-shrink-0" />
                <div className="grow">
                  <h3 className="text-lg font-semibold">BharatOCR</h3>
                  <Balancer as="p" className="mt-1">
                    Unlock efficient document understanding with BharatOCR: Train custom models, enjoy 95% accuracy, and
                    automate workflows effortlessly!
                  </Balancer>
                  <Button variant="outline" asChild className="mt-2 w-full flex space-x-2">
                    <Link target="_blank" rel="noreferrer" href="https://ocr.developbhrat.com">
                      <Icon label="check it out" icon="ArrowRightCircle" />
                      <span>Check it out!</span>
                    </Link>
                  </Button>
                </div>
              </div>
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className="flex gap-x-5 p-3 rounded-lg bg-green-200 dark:bg-transparent dark:border-2 dark:border-green-400">
                <Icon label="npm" icon="PackageCheck" className="h-6 w-6 mt-1 flex-shrink-0" />
                <div className="grow">
                  <h3 className="text-lg font-semibold">Core NodeJS Utils</h3>
                  <p className="mt-1">
                    Optimize your Node.js projects with Core Node.js Utils npm library which offers Secure environment
                    file loader, versatile validators, and robust request/response handling!
                  </p>
                  <Button variant="outline" asChild className="mt-2 w-full flex space-x-2">
                    <Link
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.npmjs.com/package/@developbharat/corenodeutils">
                      <Icon label="check it out" icon="ArrowRightCircle" />
                      <span>Check it out!</span>
                    </Link>
                  </Button>
                </div>
              </div>
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className="flex gap-x-5 rounded-lg p-3 bg-red-200 dark:bg-transparent dark:border-2 dark:border-red-400">
                <Icon label="more products" icon="CircleDot" className="h-6 w-6 mt-1 flex-shrink-0" />
                <div className="grow">
                  <h3 className="text-lg font-semibold">Much More</h3>
                  <p className="mt-1">
                    Discover the Much More Collection: A wide array of products tailored to meet your every use case.
                    Your solutions start here!
                  </p>
                  <Button variant="outline" asChild className="mt-2 w-full flex space-x-2">
                    <Link href="/products">
                      <Icon label="check it out" icon="ArrowRightCircle" />
                      <span>Check it out!</span>
                    </Link>
                  </Button>
                </div>
              </div>
              {/* End Icon Block */}
            </div>
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </section>
      {/* END Our Tools */}

      {/* START Analytics Section */}
      <section className="py-4 sm:py-6 lg:py-20">
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div>
            <span className="font-semibold inline-flex px-2 py-1 leading-4 uppercase mb-2 text-sm rounded text-buttercup-700 bg-buttercup-200">
              One Innovation at a Time
            </span>
            <Balancer as="h2" className="headline">
              Transforming the Digital Landscape
            </Balancer>
            <Balancer as="p" className="mt-3 text-lg">
              Develop Bharat is a startup driven by a mission to liberate India digitally and serve humanity. We believe
              in charting our own path, transcending boundries and fostering a culture of continuous learning and
              Innovation.
            </Balancer>
            {/* Review */}
            <div className="mt-6 grid grid-cols-2 gap-x-5">
              {/* Review */}
              <div className="py-5">
                <div className="flex space-x-1">
                  <Icon label="Rating" icon="Star" className="text-green-500" />
                  <Icon label="Rating" icon="Star" className="text-green-500" />
                  <Icon label="Rating" icon="Star" className="text-green-500" />
                  <Icon label="Rating" icon="Star" className="text-green-500" />
                  <Icon label="Rating" icon="StarHalf" className="text-green-500" />
                </div>
                <p className="mt-3 text-sm">
                  <span className="font-bold">4.6</span> /5 - Google Search
                </p>
              </div>
              {/* End Review */}
              {/* Review */}
              <div className="py-5">
                <div className="flex space-x-1">
                  <Icon label="Rating" icon="Star" className="text-green-500" />
                  <Icon label="Rating" icon="Star" className="text-green-500" />
                  <Icon label="Rating" icon="Star" className="text-green-500" />
                  <Icon label="Rating" icon="Star" className="text-green-500" />
                  <Icon label="Rating" icon="StarHalf" className="text-green-500" />
                </div>
                <p className="mt-3 text-sm">
                  <span className="font-bold">4.8</span> /5 - TrustPilot
                </p>
              </div>
              {/* End Review */}
            </div>
            {/* End Review */}

            {/* START Stats */}
            <div className="mt-10 grid gap-6 grid-cols-2 sm:gap-12">
              <div>
                <p className="mt-3 text-4xl">3+</p>
                <h4 className="mt-1">Online Services</h4>
              </div>

              <div>
                <p className="mt-3 text-4xl">93.6%</p>
                <h4 className="mt-1">Happy customers</h4>
              </div>
            </div>
          </div>
          <div className="relative ml-4">
            <Image className="w-full rounded-md" src={laughing} alt="1 male and 1 female laughing" />
            <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 w-full h-full rounded-md mt-4 -mb-4 mr-4 -ml-4 lg:mt-6 lg:-mb-6 lg:mr-6 lg:-ml-6 dark:from-slate-800 dark:via-slate-900/0 dark:to-slate-900/0" />
          </div>
        </div>
      </section>
      {/* END Analytics Section */}

      {/* START Our Inspiration */}
      <section className="py-10 lg:py-14 mx-auto">
        <div className="md:grid md:grid-cols-2 md:gap-10 lg:gap-16 md:items-center">
          <div className="block mb-24 md:mb-0 sm:px-6">
            <div className="relative">
              <Image alt="subash chandra Bose" className="rounded-xl" src={subashBose} />
              <div className="absolute bottom-0 left-0 -z-[1] translate-y-10 -translate-x-14">
                <svg
                  className="max-w-[10rem] h-auto text-slate-400 dark:text-slate-100"
                  width={696}
                  height={653}
                  viewBox="0 0 696 653"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <circle cx="72.5" cy="29.5" r="29.5" fill="currentColor" />
                  <circle cx="171.5" cy="29.5" r="29.5" fill="currentColor" />
                  <circle cx="270.5" cy="29.5" r="29.5" fill="currentColor" />
                  <circle cx="369.5" cy="29.5" r="29.5" fill="currentColor" />
                  <circle cx="468.5" cy="29.5" r="29.5" fill="currentColor" />
                  <circle cx="567.5" cy="29.5" r="29.5" fill="currentColor" />
                  <circle cx="666.5" cy="29.5" r="29.5" fill="currentColor" />
                  <circle cx="29.5" cy="128.5" r="29.5" fill="currentColor" />
                  <circle cx="128.5" cy="128.5" r="29.5" fill="currentColor" />
                  <circle cx="227.5" cy="128.5" r="29.5" fill="currentColor" />
                  <circle cx="326.5" cy="128.5" r="29.5" fill="currentColor" />
                  <circle cx="425.5" cy="128.5" r="29.5" fill="currentColor" />
                  <circle cx="524.5" cy="128.5" r="29.5" fill="currentColor" />
                  <circle cx="623.5" cy="128.5" r="29.5" fill="currentColor" />
                  <circle cx="72.5" cy="227.5" r="29.5" fill="currentColor" />
                  <circle cx="171.5" cy="227.5" r="29.5" fill="currentColor" />
                  <circle cx="270.5" cy="227.5" r="29.5" fill="currentColor" />
                  <circle cx="369.5" cy="227.5" r="29.5" fill="currentColor" />
                  <circle cx="468.5" cy="227.5" r="29.5" fill="currentColor" />
                  <circle cx="567.5" cy="227.5" r="29.5" fill="currentColor" />
                  <circle cx="666.5" cy="227.5" r="29.5" fill="currentColor" />
                  <circle cx="29.5" cy="326.5" r="29.5" fill="currentColor" />
                  <circle cx="128.5" cy="326.5" r="29.5" fill="currentColor" />
                  <circle cx="227.5" cy="326.5" r="29.5" fill="currentColor" />
                  <circle cx="326.5" cy="326.5" r="29.5" fill="currentColor" />
                  <circle cx="425.5" cy="326.5" r="29.5" fill="currentColor" />
                  <circle cx="524.5" cy="326.5" r="29.5" fill="currentColor" />
                  <circle cx="623.5" cy="326.5" r="29.5" fill="currentColor" />
                  <circle cx="72.5" cy="425.5" r="29.5" fill="currentColor" />
                  <circle cx="171.5" cy="425.5" r="29.5" fill="currentColor" />
                  <circle cx="270.5" cy="425.5" r="29.5" fill="currentColor" />
                  <circle cx="369.5" cy="425.5" r="29.5" fill="currentColor" />
                  <circle cx="468.5" cy="425.5" r="29.5" fill="currentColor" />
                  <circle cx="567.5" cy="425.5" r="29.5" fill="currentColor" />
                  <circle cx="666.5" cy="425.5" r="29.5" fill="currentColor" />
                  <circle cx="29.5" cy="524.5" r="29.5" fill="currentColor" />
                  <circle cx="128.5" cy="524.5" r="29.5" fill="currentColor" />
                  <circle cx="227.5" cy="524.5" r="29.5" fill="currentColor" />
                  <circle cx="326.5" cy="524.5" r="29.5" fill="currentColor" />
                  <circle cx="425.5" cy="524.5" r="29.5" fill="currentColor" />
                  <circle cx="524.5" cy="524.5" r="29.5" fill="currentColor" />
                  <circle cx="623.5" cy="524.5" r="29.5" fill="currentColor" />
                  <circle cx="72.5" cy="623.5" r="29.5" fill="currentColor" />
                  <circle cx="171.5" cy="623.5" r="29.5" fill="currentColor" />
                  <circle cx="270.5" cy="623.5" r="29.5" fill="currentColor" />
                  <circle cx="369.5" cy="623.5" r="29.5" fill="currentColor" />
                  <circle cx="468.5" cy="623.5" r="29.5" fill="currentColor" />
                  <circle cx="567.5" cy="623.5" r="29.5" fill="currentColor" />
                  <circle cx="666.5" cy="623.5" r="29.5" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10">
              <p className="font-semibold uppercase inline-block px-2 py-1 leading-4 mb-2 text-sm rounded text-buttercup-700 bg-buttercup-200">
                Our Inspiration
              </p>
              <h2 className="headline">Following the Footsteps of a Visionary</h2>
              <Balancer as="p" className="text-lg font-medium">
                Our logo, adorned with the face of Subash Chandra Bose, symbolizes our commitment to following his path
                in liberating India and serving humanity. We strieve to embody his passion, resilience and unwavering
                dedication.
              </Balancer>
            </div>

            <div className="mt-4">
              <Button asChild>
                <Link target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Subhas_Chandra_Bose">
                  Read the story on Wikipedia
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* END Our Inspiration */}
    </div>
  );
}
