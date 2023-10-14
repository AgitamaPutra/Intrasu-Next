"use client"

import HeroPrograms from "../programs/components/HeroPrograms";
import ProgData from "../programs/components/ProgData";
import { AboutContents } from "./components/contents";
import { motion, AnimatePresence } from 'framer-motion'

export default async function AboutUs() {

  return (
    <AnimatePresence mode='wait'>
      <motion.div>
        <HeroPrograms heading="About Us" message="We are a team with more than 15 years experience in hospitality internship, training and manpower placement" bg="about-img" />
        <AboutContents />
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