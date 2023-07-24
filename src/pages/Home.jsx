import heroImage from '../assets/image.png';
import background from '../assets/BG.svg';
import lady from '../assets/lady.png';
import { Button } from '@material-tailwind/react';

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

      <section className="min-h-[80vh] p-2 md:p-5  grid md:grid-cols-2 justify-center items-center">
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
            <Button color="green" className="bg-lime text-white font-mono font-normal self-start capitalize">
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

      <section className="min-h-[40vh] bg-gradient-to-r from-lime to-dark-blue">

      </section>
    </>
  );
}

export default Home;
