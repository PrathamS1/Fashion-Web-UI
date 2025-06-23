import { useState, Fragment, useRef, useEffect } from "react";
import { motion } from "framer-motion";

import "../styles/style.css";
import brand1 from "../assets/brand1.png";
import brand2 from "../assets/brand2.png";
import brand3 from "../assets/brand3.png";
import brand4 from "../assets/brand4.png";
import brand5 from "../assets/brand5.png";
import brand6 from "../assets/brand6.png";
import brand7 from "../assets/brand7.png";
import brand8 from "../assets/brand8.png";
import brand9 from "../assets/brand9.png";
import brand10 from "../assets/brand10.png";
import brand11 from "../assets/brand11.png";
import brand12 from "../assets/brand12.png";
import brand13 from "../assets/brand13.png";

const brandImages = [
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brand6,
  brand7,
  brand8,
  brand9,
  brand10,
  brand11,
  brand12,
  brand13,
];

function Partnership() {
  const rowOneRef = useRef(null);
  const rowTwoRef = useRef(null);
  const [speed, setSpeed] = useState(0.5); // initial pixels per frame

  useEffect(() => {
    let animationFrameId;

    const animate = () => {
      if (rowOneRef.current && rowTwoRef.current) {
        rowOneRef.current.scrollLeft += speed;
        rowTwoRef.current.scrollLeft -= speed;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [speed]);

  const handleScrollSpeed = (e) => {
    const delta = e.deltaY > 0 ? 0.2 : -0.2;
    setSpeed((prev) => {
      const newSpeed = Math.max(0.1, Math.min(prev + delta, 5));
      return parseFloat(newSpeed.toFixed(2));
    });
  };

  return (
    <div className="partner-container">
      <motion.div
        className="partner-heading"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h1>Partnered With The Best</h1>
      </motion.div>
      <motion.div
        className="brand-slider-wrapper"
        onWheel={handleScrollSpeed}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      >
        <div className="brand-slider">
          <div className="brand-track row one" ref={rowOneRef}>
            {[...Array(2)].map((_, index) => (
              <Fragment key={index}>
                {brandImages.map((img, i) => (
                  <motion.img
                    src={img}
                    alt={`Brand ${i + 1}`}
                    key={`row1-${index}-${i}`}
                    className="brand-logo"
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.04 }}
                    whileHover={{ scale: 1.1, rotate: -3 }}
                  />
                ))}
              </Fragment>
            ))}
          </div>
          <div className="brand-track row two" ref={rowTwoRef}>
            {[...Array(2)].map((_, index) => (
              <Fragment key={index}>
                {brandImages.map((img, i) => (
                  <motion.img
                    src={img}
                    alt={`Brand ${i + 1}`}
                    key={`row2-${index}-${i}`}
                    className="brand-logo"
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.04 }}
                    whileHover={{ scale: 1.1, rotate: 3 }}
                  />
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
export default Partnership;
