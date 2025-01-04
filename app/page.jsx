import { Button } from "@/components/ui/button";
import {FiDownload} from 'react-icons/fi'

// component
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer - IT Support - Cyber Security</span>
            <h1 className="h1 mb-6">
              Hai Saya <br /> <span className="text-accent">Hafadz Hazmirullah</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Saya unggul dalam bidang web developer, serta mahir dalam berbagai bahasa pemrograman dan teknologi
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button 
                variant="outline"
                size='lg'
                className='uppercase flex items-center gap-2'
                href='https://drive.google.com/uc?export=download&id=1hyPBAJL2o84O7egz6eaW2opueSjZPP-k'
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social 
                  containerStyles='flex gap-6' 
                  iconStyles='w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500' 
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}

export default Home;