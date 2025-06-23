import "../styles/style.css";
import logo from "../assets/logo.png";
import { RiShoppingBag2Line } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="website-name">
          <h1>Irenes Fashion</h1>
        </div>

        <div className="navbar-links desktop-only">
          <a href="#">Brands</a>
          <a href="#">Collections</a>
          <a href="#">Limited Editions</a>
        </div>

        <div className="item-cart desktop-only">
          <div className="cart-icon">
            <RiShoppingBag2Line size={30} />
          </div>
          <span className="item-count">0</span>
        </div>

        <div
          className="hamburger mobile-only"
          onClick={() => setIsOpen(!isOpen)}
        >
          <GiHamburgerMenu size={28} />
        </div>

      </div>
      {isOpen && (
        <div className="mobile-menu-expanded mobile-only">
          <a href="#">Brands</a>
          <a href="#">Collections</a>
          <a href="#">Limited Editions</a>
          <div className="mobile-cart">
            <RiShoppingBag2Line size={25} />
            <span className="item-count">0</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
