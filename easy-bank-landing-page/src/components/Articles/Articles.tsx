const articles = [
  {
    author: "Claire Robinson",
    title: "Receive money in any currency with no fees",
    content:
      "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
    image: "/image-currency.jpg",
  },
  {
    author: "Wilson Hutton",
    title: "Treat yourself without worrying about money",
    content:
      "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
    image: "/image-restaurant.jpg",
  },
  {
    author: "Wilson Hutton",
    title: "Take your Easybank card wherever you go",
    content:
      "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
    image: "/image-plane.jpg",
  },
  {
    author: "Claire Robinson",
    title: "Our invite-only Beta accounts are now live!",
    content:
      "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
    image: "/image-confetti.jpg",
  },
];

const Articles = () => {
  return (
    <div className="bg-very-light-gray py-20 px-5 gap-5 flex flex-col items-center lg:items-start lg:px-18">
      <h1 className="text-3xl lg:text-4xl lg:px-5 lg:mb-5">Latest Articles</h1>
      <div className="px-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-white rounded-md overflow-hidden shadow-sm"
          >
            <img className="h-[250px] w-full" src={article.image} alt="" />
            <div className="px-5 flex flex-col gap-2 py-7">
              <p className="text-[14px] text-grayish-blue">
                By {article.author}
              </p>
              <a href="" className="text-xl hover:text-lime-green">
                {article.title}
              </a>
              <p className="text-grayish-blue">By {article.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
