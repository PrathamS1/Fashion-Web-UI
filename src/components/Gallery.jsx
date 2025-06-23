import "../styles/style.css";
import { motion } from "framer-motion";
import fashion1 from "../assets/fashion1.jpg";
import fashion2 from "../assets/fashion2.jpg";
import fashion3 from "../assets/fashion3.jpg";
import fashion4 from "../assets/fashion4.jpg";
import fashion5 from "../assets/fashion5.jpg";
import fashion6 from "../assets/fashion6.jpg";
import fashion7 from "../assets/fashion7.jpg";
import fashion8 from "../assets/fashion8.jpg";
import fashion9 from "../assets/fashion9.jpg";
const leftColumn = [fashion1, fashion2, fashion3];
const middleColumn = [fashion4, fashion5, fashion6];
const rightColumn = [fashion7, fashion8, fashion9];

function Gallery() {
  return (
    <div className="gallery-container">
      <div className="ribbon-strip-1"></div>
      <h1 className="gallery-title">Styled By You</h1>
      <div className="bento-gallery">
        <div className="column">
          {leftColumn.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
            >
              <img src={img} alt={`Left ${i}`} className="bento-img" />
            </motion.div>
          ))}
        </div>
        <div className="column middle">
          {middleColumn.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
            >
              <img src={img} alt={`Middle ${i}`} className="bento-img" />
            </motion.div>
          ))}
        </div>
        <div className="column">
          {rightColumn.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
            >
              <img src={img} alt={`Right ${i}`} className="bento-img" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Gallery;
