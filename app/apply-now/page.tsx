"use client"

import HeroPrograms from "../programs/components/HeroPrograms";
import { motion, AnimatePresence } from 'framer-motion'
import { ApplyContents } from "./components/contents";

export default async function ApplyNow() {

  return (
    <AnimatePresence mode='wait'>
      <motion.div>
        <HeroPrograms heading="Apply Now" message="If not now, When?" bg="apply-img" />
        <ApplyContents />
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