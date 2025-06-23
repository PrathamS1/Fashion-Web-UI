import '../styles/style.css';
import hero1 from '../assets/herom.jpg';
import hero2 from '../assets/herof.jpg';
import hero3 from '../assets/herof2.jpg';
import hero4 from '../assets/herom2.jpg';
import { motion } from 'framer-motion';

const heroImages = [
  { src: hero1, alt: 'Hero Image 1' },
  { src: hero2, alt: 'Hero Image 2' },
  { src: hero3, alt: 'Hero Image 3' },
  { src: hero4, alt: 'Hero Image 4' },
];

function Hero () {
    return(
        <div className="hero-container">
            <div className="hero-heading">
                <h1>Choose Your</h1>
                <h2>own <span className='font-[Italianno] text-[8rem] mobile-hero-style'>Style</span></h2>
            </div>
            <div className="hero-images-container responsive-hero-images">
                {heroImages.map((img, idx) => (
                  <motion.div
                    className="hero-image"
                    key={img.alt}
                    initial={{
                      opacity: 0,
                      y: idx % 2 === 0 ? -80 : 80,
                      scale: 0.97
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1
                    }}
                    transition={{
                      y: { type: 'spring', stiffness: 50, damping: 18, delay: 0.1 + idx * 0.12 },
                      opacity: { type: 'tween', duration: 0.7, ease: 'easeOut', delay: 0.1 + idx * 0.12 },
                      scale: { type: 'tween', duration: 0.7, ease: 'easeOut', delay: 0.1 + idx * 0.12 }
                    }}
                  >
                    <img src={img.src} alt={img.alt} />
                  </motion.div>
                ))}
            </div>
        </div>
    )
}
export default Hero;