import "../styles/style.css";
import logo from "../assets/logo.png";
import { RiShoppingBag2Line } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
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

      {/* Collapsible Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <a href="#">Brands</a>
        <a href="#">Collections</a>
        <a href="#">Limited Editions</a>
        <div className="mobile-cart">
          <RiShoppingBag2Line size={25} />
          <span className="item-count">0</span>
        </div>
      </div>
    </>
  );
}

export default Navbar;
