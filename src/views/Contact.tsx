// assets
import contactPageImg from "../assets/contact-page.svg";
import contactIllustration from "../assets/contact-illustration.svg";

// components
import { Button, LabelInput, Reveal } from "../components";

// framer-motion
import { motion } from "framer-motion";

// utils
import { fadeIn, scale } from "../utils/variants";
import { transition } from "../utils/transition";

const Contact = () => {
  return <div id="contact" className="min-h-screen flex items-center justify-center relative"
  style={{
    background: `url(${contactPageImg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }}>

  </div>;
};

export default Contact;
