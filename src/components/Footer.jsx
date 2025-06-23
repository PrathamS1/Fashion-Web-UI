import "../styles/style.css";
import logo from "../assets/logo.png";
import { RiInstagramFill } from "react-icons/ri";
import { BsFacebook, BsTwitterX } from "react-icons/bs";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-block">
        <div className="footer-left">
          <div className="brand-name">
            <img src={logo} alt="Logo" />
            <h1>Irenes Fashion</h1>
          </div>
          <p className="address">
            710, Maker Chamber V, Nariman Point,
            <br />
            Mumbai, Maharashtra - 400021
            <br />
            India Phone: +91 22 2283 3477
          </p>
          <div className="social-links">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <RiInstagramFill size={32} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <BsTwitterX size={32} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <BsFacebook size={32} />
            </a>
          </div>
        </div>
        <div className="footer-middle">
          <div className="navigation-link">
            <h3>Navigation</h3>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Company</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-right">
          <div className="browse-links">
            <h3>Browse Through Our Collection</h3>
            <ul>
              <li>
                {" "}
                <a href="#"> Limited Edition</a>
              </li>
              <li>
                <a href="#">Tees</a>
              </li>
              <li>
                <a href="#">Shirts</a>
              </li>
              <li>
                <a href="#">Jackets</a>
              </li>
              <li>
                <a href="#">Summer Deals</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>
          © 2025 Irenes Fashion. UI crafted by Pratham. All rights reserved.
        </p>
      </div>
    </div>
  );
}
export default Footer;
