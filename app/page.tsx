"use client"

import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Benefits from "./components/Benefit";
import HowItWork from "./components/works";
import ServiceS from "./components/Service";
import Footer from "./components/footer";
import Place from "./components/Place";
import Partners from "./components/Partners";
import { Candidats } from "./components/Candidats";
import { motion, AnimatePresence } from 'framer-motion'

export default function Home() {
  return (
    <AnimatePresence mode='wait' >
      <motion.div>

        <Hero heading='Welcome to
Intrasu Indonesia' message='We provide internship and training programs for University Students and Fresh Graduates to get great experience worldwide' />
        <ServiceS />
        <Place />
        <Benefits />
        <HowItWork />
        <Partners />
        <Candidats />
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
