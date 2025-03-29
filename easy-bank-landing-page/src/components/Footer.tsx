import Button from "./Button/Button";

const Footer = () => {
  return (
    <div className="py-8 px-5 bg-dark-blue flex gap-6 flex-col items-center lg:flex-row lg:justify-between lg:px-10 lg:pl-24">
      <div className="flex flex-col gap-7 lg:flex-row lg:items-center">
        <div className="flex flex-col gap-7 lg:gap-12">
          <img className="invert" src="/logo.svg" alt="logo" />
          <div className="socials flex gap-5">
            <a href="">
              <img src="/icon-facebook.svg" alt="icon-facebook" />
            </a>
            <a href="">
              <img src="/icon-youtube.svg" alt="icon-youtube" />
            </a>
            <a href="">
              <img src="/icon-twitter.svg" alt="icon-twitter" />
            </a>
            <a href="">
              <img src="/icon-pinterest.svg" alt="icon-pinterest" />
            </a>
            <a href="">
              <img src="/icon-instagram.svg" alt="icon-instagram" />
            </a>
          </div>
        </div>

        <div className="text-grayish-blue lg:ml-10">
          <ul className="text-center flex flex-col gap-2 lg:flex-row lg:items-center lg:text-left lg:gap-24">
            <div className="flex flex-col gap-3">
              <li>
                <a className="hover:text-lime-green" href="#">
                  About Us
                </a>
              </li>
              <li>
                <a className="hover:text-lime-green" href="#">
                  Contact
                </a>
              </li>
              <li>
                <a className="hover:text-lime-green" href="#">
                  Blog
                </a>
              </li>
            </div>
            <div className="flex flex-col gap-3">
              <li>
                <a className="hover:text-lime-green" href="#">
                  Careers
                </a>
              </li>
              <li>
                <a className="hover:text-lime-green" href="#">
                  Support
                </a>
              </li>
              <li>
                <a className="hover:text-lime-green" href="#">
                  Privacy Policy
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center gap-7">
        <Button label="Request Invite" />
        <p className="text-grayish-blue">
          © {new Date().getFullYear()} EasyBank. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
