import React from "react";
import AmgenLogo from "../assets/amgen-logo.png";
import { motion } from "framer-motion";
import { scaleIn } from "../animations";
export default function Logo() {
  return (
    <article className="logo-container">
      <motion.img {...scaleIn(0.35)} src={AmgenLogo} alt="amgen logo" />
    </article>
  );
}
