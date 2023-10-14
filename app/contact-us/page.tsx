"use client"
import HeroPrograms from "../programs/components/HeroPrograms";
import ProgData from "../programs/components/ProgData";
import { ContactContents } from "./components/contents";
import { motion, AnimatePresence } from 'framer-motion'

export default async function Contact() {

  return (
    <AnimatePresence>
      <motion.div>
        <HeroPrograms heading="Contact Us" message="Get us for general inquiries or further information about Intern and Training programs." bg="contact-img" />
        <ContactContents />
        <motion.div
          className='slide-in'
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
        <motion.div
          className='slide-out'
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
      </motion.div>
    </AnimatePresence>
  )
}