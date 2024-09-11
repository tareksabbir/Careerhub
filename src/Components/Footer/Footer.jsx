import { Link } from "react-router-dom";
import social from "../../assets/icons/social.png";

const Footer = () => {
  return (
    <footer className="p-10 text-white bg-black bg-">
      <div className="container mx-auto">
        <div className="mb-10 footer">
          <aside>
            <Link to={"/"} className="md:text-3xl btn btn-ghost ml-[-20px]">
              CareerHub
            </Link>
            <p>
              ACME Industries Ltd.
              <br />
              Providing reliable tech since 1992
            </p>
            <img src={social} className="mt-3" alt="" />
          </aside>
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </div>
        <hr />
        <div className="flex justify-between mt-5 mb-5 text-gray-500">
          <p>Copyright @ 2024 </p>
          <p>Tarek Sabbir</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
