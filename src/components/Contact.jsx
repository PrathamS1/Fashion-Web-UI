import "../styles/style.css";
import { motion } from "framer-motion";
function Contact() {
  return (
    <div className="contact-container">
      <motion.div
        className="contact-title"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h1>Unlock Exclusive Drops</h1>
        <p>
          Get early access to limited drops, member-only deals, and insider
          style tips.
        </p>
      </motion.div>
      <motion.form
        className="contact-form"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      >
        <motion.input
          type="email"
          placeholder="Drop your email to unlock style"
          required
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        />
        <motion.button
          type="submit"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Join the Club
        </motion.button>
      </motion.form>
    </div>
  );
}
export default Contact;
