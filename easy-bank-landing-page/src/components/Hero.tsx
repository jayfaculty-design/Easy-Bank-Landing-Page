import Button from "./Button/Button";

const Hero = () => {
  return (
    <>
      <div className="top-intro relative bg-very-light-gray flex flex-col  lg:h-[600px] lg:flex-row-reverse lg:items-center">
        <div className="relative bg-[url(/bg-intro-mobile.svg)] lg:bg-[url(/bg-intro-desktop.svg)] bg-cover bg-center lg:bg-left h-[480px] sm:h-[500px] md:h-[970px]">
          <img
            className="absolute lg:relative -mt-26 sm:mt-26 md:-mt-24 lg:mt-52"
            src="/image-mockups.png"
            alt="mockups"
          />
        </div>
        <div className="next-gen p-5 flex flex-col gap-5 items-center text-center">
          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl lg:text-left w-10/12 mx-auto">
            Next generation digital banking
          </h1>
          <p className="text-grayish-blue sm:text-sm md:text-lg sm:w-10/12 md:w-8/12 lg:w-10/12 lg:text-left">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <div className="lg:w-full lg:flex lg:pl-16 ">
            <Button label="Request Invite"></Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
