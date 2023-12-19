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
    <div className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between items-center xl:items-start gap-12 w-full pt-20 pb-20 sm:pb-16 px-12">
    <div className="flex-1 flex flex-col gap-14">

    </div>
    </div>

  </div>;
};

export default Contact;
