import Image from 'next/image';
import Balancer from 'react-wrap-balancer';
import { Icon } from '~components/Icon';
import { Icons } from '~components/Icons';
import photo1 from '~photos/about/photo1.jpeg';
import photo2 from '~photos/about/photo2.jpeg';

export default function About() {
  return (
    <section className="container mx-auto">
      <div className="px-4 py-10 space-y-16 lg:px-8 lg:py-32">
        {/* Heading */}
        <header>
          <Icons.DevelopBharat className="mb-5 h-24 w-24" />
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Let&apos;s talk <span className="font-light">Develop Bharat</span>
          </h2>
          <p className=" text-lg md:text-xl md:leading-relaxed font-normal lg:w-1/2">
            <Balancer>
              Develop Bharat is a startup driven by a mission to liberate India digitally and serve humanity. We believe
              in charting our own path, transcending boundaries, and fostering a culture of continuous learning and
              innovation.
            </Balancer>
          </p>
        </header>
        {/* END Heading */}
        {/* Images */}
        <div className="flex space-x-2">
          <figure>
            <Image src={photo1} alt="Meeting Room" className="rounded-lg" />
          </figure>
          <figure>
            <Image src={photo2} alt="Server Room" className="rounded-lg" />
          </figure>
        </div>
        {/* END Images */}
        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div>
            <h3 className="flex items-center space-x-2 text-lg font-bold uppercase tracking-wide mb-2">
              <Icon label="passion" icon="HeartHandshake" className="text-red-500" />
              <span>Passion</span>
            </h3>
            <Balancer as="p" className="block leading-relaxed">
              We are passionate with what we do and love crafting products that can make your life easier and help you
              succeed. We pay attention to small details and always aim for the best.
            </Balancer>
          </div>
          <div>
            <h3 className="flex items-center space-x-2 text-lg font-bold uppercase tracking-wide mb-2">
              <Icon label="Commitment" icon="Lock" className="text-blue-500" />
              <span>Commitment</span>
            </h3>
            <Balancer as="p" className="block leading-relaxed">
              At Develop Bharat, commitment is at the core of everything we do. We take pride in our dedication to
              delivering products that truly matter. With a focus on quality and reliability, we strive to create
              solutions that make a tangible difference in your life.
            </Balancer>
          </div>
          <div>
            <h3 className="flex items-center space-x-2 text-lg font-bold uppercase tracking-wide mb-2">
              <Icon label="National Pride" icon="Clover" className="text-pink-500" />
              <span>National Pride</span>
            </h3>
            <Balancer as="p" className="block leading-relaxed">
              At Develop Bharat, our love for our nation runs deep. We hold a vibrant sense of pride in our hearts, and
              it reflects in everything we do. We prioritize the progress and prosperity of our nation in every decision
              we make.We are honored to contribute to the growth and development of our beloved nation, building a
              brighter future for all.
            </Balancer>
          </div>
        </div>
        {/* END Values */}
      </div>
    </section>
  );
}
