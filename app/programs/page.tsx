
"use client"

import HeroPrograms from "./components/HeroPrograms";
import ProgData from "./components/ProgData";
import { motion, AnimatePresence } from 'framer-motion'
export default async function Programs() {

    return (
        <AnimatePresence >
            <motion.div>
                <HeroPrograms heading="Our Programs" message="We have internship and training programs for Diploma and Degree student to many countries. Such as USA, Middle East, South East Asia, Australia and many more..." bg="programs-img" />
                <ProgData />
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