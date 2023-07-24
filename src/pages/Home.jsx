import heroImage from '../assets/image.png';
import background from '../assets/BG.svg';
import lady from '../assets/lady.png';
import { Button, Carousel } from '@material-tailwind/react';
import dataAnalysis from '../assets/data_an.png';
import cyberSecurity from '../assets/cyber_security.png';
import config from '../assets/config.png';

function Home() {
  const styles = {
    backgroundImage: `url("${background}")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <>
      <section
        className="text-white p-2 md:p-5 min-h-screen grid md:grid-cols-2"
        style={styles}
      >
        <div className="font-poppins h-4/5 flex flex-col items-center justify-center mt-10 md:mt-0">
          <div className="lg:w-4/5 flex flex-col gap-6">
            <h1 className="text-6xl font-semibold lg:leading-normal">
              Best Learning Institution IT Related Problems
            </h1>
            <p className="text-xl font-light">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s
            </p>
            <button className="bg-white text-dark-blue font-mono rounded-3xl px-5 py-2 self-start">
              Apply Now
            </button>
          </div>
        </div>
        <div className="h-4/5 flex flex-col items-center justify-center">
          <div className="animate-slow-float">
            <img src={heroImage} alt="" />
          </div>
        </div>
      </section>

      <section className="min-h-[90vh] p-2 md:p-5  grid md:grid-cols-2 justify-center items-center">
        <div className="font-poppins h-4/5 flex items-center lg:ml-40 justify-center mt-10 md:mt-0">
          <div className=" flex flex-col gap-6">
            <h1 className="text-6xl font-bold text-dark-blue">
              Best Learning Institution IT Related Problems
            </h1>
            <p className="text-xl  text-gray-800">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s
            </p>
            <Button
              color="green"
              className="bg-lime text-white font-mono font-normal self-start capitalize"
            >
              View More
            </Button>
          </div>
        </div>
        <div className="h-4/5 flex flex-col items-center justify-center">
          <div className="lg:w-3/5 mt-20 md:mt-0">
            <img className="" src={lady} alt="" />
          </div>
        </div>
      </section>

      <Carousel>
        <div className="bg-gradient-to-r from-lime to-dark-blue text-white animate-gradient-xy">
          <h3 className="font-semibold text-5xl ml-8 p-5">Our courses</h3>
          <section className="min-h-[50vh] gap-10 grid grid-cols-3 p-5">
            <div className="flex text-center flex-col gap-10 items-center justify-center">
              <img className="w-1/3" src={dataAnalysis} alt="" />
              <h4 className="font-semibold text-2xl">Data Analysis</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
                voluptatem hic sit commodi, error delectus quidem, cum rerum
                eaque eveniet
              </p>
            </div>
            <div className="flex text-center flex-col gap-10 items-center justify-center">
              <img className="w-1/3" src={config} alt="" />
              <h4 className="font-semibold text-2xl">Data Analysis</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
                voluptatem hic sit commodi, error delectus quidem, cum rerum
                eaque eveniet
              </p>
            </div>
            <div className="flex text-center flex-col gap-10 items-center justify-center">
              <img className="w-1/3" src={cyberSecurity} alt="" />
              <h4 className="font-semibold text-2xl">Data Analysis</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
                voluptatem hic sit commodi, error delectus quidem, cum rerum
                eaque eveniet
              </p>
            </div>
          </section>
        </div>
        <div className="bg-gradient-to-r from-lime to-dark-blue text-white ">
          <h3 className="font-semibold text-5xl ml-8 p-5">Our courses</h3>
          <section className="min-h-[50vh] gap-10 grid grid-cols-3 p-5">
            <div className="flex text-center flex-col gap-10 items-center justify-center">
              <img className="w-1/3" src={dataAnalysis} alt="" />
              <h4 className="font-semibold text-2xl">Data Analysis</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
                voluptatem hic sit commodi, error delectus quidem, cum rerum
                eaque eveniet
              </p>
            </div>
            <div className="flex text-center flex-col gap-10 items-center justify-center">
              <img className="w-1/3" src={config} alt="" />
              <h4 className="font-semibold text-2xl">Data Analysis</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
                voluptatem hic sit commodi, error delectus quidem, cum rerum
                eaque eveniet
              </p>
            </div>
            <div className="flex text-center flex-col gap-10 items-center justify-center">
              <img className="w-1/3" src={cyberSecurity} alt="" />
              <h4 className="font-semibold text-2xl">Data Analysis</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
                voluptatem hic sit commodi, error delectus quidem, cum rerum
                eaque eveniet
              </p>
            </div>
          </section>
        </div>
        
      </Carousel>
    </>
  );
}

export default Home;
