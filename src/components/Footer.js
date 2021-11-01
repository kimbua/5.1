import logo from "../images/logo.png";
import ig from "../images/ig.png";
import fb from "../images/fb.png";
import tw from "../images/twitter.png";
import usa from "../images/usa.jpg";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="green flex space-between align-center">
          <div className="footer-left flex space-around">
            <div className="blue">
              <img src={logo} width="130" alt="footer img" />
            </div>
            <div className="flex col">
              <span>Company</span>
              <a href="#.">About</a>
              <a href="#.">Jobs</a>
              <a href="#.">For the Record</a>
            </div>
            <div className="flex col">
              <span>Communities</span>
              <a href="#.">For Artists</a>
              <a href="#.">Developers</a>
              <a href="#.">Brands</a>
              <a href="#.">Investors</a>
              <a href="#.">Vendors</a>
            </div>
            <div className="flex col">
              <span>Useful Links</span>
              <a href="#.">Support</a>
              <a href="#.">Web Player</a>
              <a href="#.">Free Mobile App</a>
              <a href="#.">2020 Wrapped</a>
            </div>
          </div>
          <div className="footer-right">
            <a href="#.">
              <img src={ig} width="50" alt="footer img" />
            </a>
            <a href="#.">
              <img src={fb} width="50" alt="footer img" />
            </a>
            <a href="#.">
              <img src={tw} width="50" alt="footer img" />
            </a>
          </div>
        </div>
        <span className="row2 flex">
          USA <img src={usa} width="20" alt="footer img" />
        </span>
        <div className="footer flex space-between">
          <div>
            <a href="#.">Legal</a>
            <a href="#.">Privacy Center</a>
            <a href="#.">Privacy Policy</a>
            <a href="#.">Cookies</a>
            <a href="#.">About Ads</a>
            <a href="#.">Additional CA Privacy Disclosures</a>
          </div>
          <span>© 2020 Spotify AB</span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
