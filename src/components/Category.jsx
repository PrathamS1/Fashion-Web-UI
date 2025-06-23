import "../styles/style.css";
import { motion } from "framer-motion";
import InfiniteMenu from "../blocks/Components/InfiniteMenu/InfiniteMenu";
import street from "../assets/street.jpg";
import casual from "../assets/casual.jpg";
import formal from "../assets/formal.jpg";
import denim from "../assets/denim.jpg";
import newar from "../assets/newar.jpg";
import jacket from "../assets/jacket.jpg";
import footwear from "../assets/footwear.jpeg";
import access from "../assets/access.jpg";
import lux from "../assets/lux.jpg";
import tshirt from "../assets/tshirt.jpeg";
import overcoat from "../assets/overcoat.jpeg";


const categories = [
  {
    image: street,
    link: "https://example.com/streetwear",
    title: "Streetwear",
    description: "Urban-inspired looks that turn heads everywhere you go.",
  },
  {
    image: casual,
    link: "https://example.com/casual",
    title: "Casual",
    description: "Everyday comfort with effortless style.",
  },
  {
    image: formal,
    link: "https://example.com/formal",
    title: "Formal",
    description: "Look sharp for every occasion that demands class.",
  },
  {
    image: denim,
    link: "https://example.com/denim",
    title: "Denim",
    description: "Timeless jeans and jackets made to move with you.",
  },
  {
    image: newar,
    link: "https://example.com/new-arrivals",
    title: "New Arrivals",
    description: "Fresh drops that just hit the shelves.",
  },
  {
    image: jacket,
    link: "https://example.com/jackets",
    title: "Jackets & Outerwear",
    description: "Stay warm and stylish through any season.",
  },
  {
    image: footwear,
    link: "https://example.com/footwear",
    title: "Footwear",
    description: "Step into comfort and performance with flair.",
  },
  {
    image: access,
    link: "https://example.com/accessories",
    title: "Accessories",
    description: "The perfect finishing touch to any outfit.",
  },
  {
    image: lux,
    link: "https://example.com/luxury",
    title: "Luxury Picks",
    description: "Premium pieces that define elegance.",
  },
  {
    image: tshirt,
    link: "https://example.com/tshirts",
    title: "T-shirts & Tops",
    description: "Versatile tops for every look and layer.",
  },
  {
    image: overcoat,
    link: "https://example.com/overcoats",
    title: "Overcoats",
    description: "Classic outerwear that keeps you warm in style.",
  },
];

function Category() {
  return (
    <div className="category-container">
      <motion.h1
        className="category-title"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Your Style, Your Rules
      </motion.h1>
      <motion.div
        className="category"
        style={{ position: "relative" }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      >
        <InfiniteMenu items={categories} />
      </motion.div>
    </div>
  );
}
export default Category;
