const Hero2 = () => {
  const services = [
    {
      title: "Online Banking",
      description:
        "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
      image: "/icon-online.svg",
    },
    {
      title: "Simple Budgeting",
      description:
        "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
      image: "/icon-budgeting.svg",
    },
    {
      title: "Fast Onboarding",
      description:
        "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
      image: "/icon-onboarding.svg",
    },
    {
      title: "Open API",
      description:
        "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
      image: "/icon-api.svg",
    },
  ];
  return (
    <div className="px-5 py-10 lg:pl-18">
      <div className="flex lg:items-start lg:pl-5 flex-col items-center gap-5 text-center">
        <h1 className="text-3xl w-10/12 lg:text-left lg:w-full mx-auto">
          Why Choose EasyBank?
        </h1>
        <p className="text-grayish-blue lg:w-[50%] sm:w-10/12 md:w-8/12 lg:text-left">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>
      <div className="px-5 py-10  grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:mt-10 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col text-center items-center gap-5 lg:text-left lg:items-start"
          >
            <img src={service.image} alt={service.title} />
            <h3 className="font-normal text-lg">{service.title}</h3>
            <p className="text-grayish-blue">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero2;
