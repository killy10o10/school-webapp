import heroImage from '../assets/image.png';

function Home() {
  return (
    <section className="text-white p-2 md:p-5 h-screen grid md:grid-cols-2">
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
        <div className="translate-y-0 animate-slow-float">
          <img src={heroImage} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Home;
