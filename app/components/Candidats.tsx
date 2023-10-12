"use client"
import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

export const Candidats = () => {

  const [counterOn, setCounterOn] = useState<boolean>(false)

  const value = [
    {
      title: `CANDIDATES PLACED`,
      value: `100+`,
      border_xl_lg: 'border-r-gray-300',
      border_md: 'border-r-gray-300',
      border_sm: 'border-b-gray-300',
      color: '#D9D9D9',
      hr_lg: <hr className='rotate-90' />,
      hr_sm: <hr />
    },
    {
      title: `PLACEMENT SUCCESS`,
      value: `98%`,
      border_xl_lg: 'border-r-gray-300',
      border_sm: 'border-b-gray-300',
      color: '#D9D9D9',
      hr_lg: <hr className='rotate-90' />,
      hr_sm: <hr />

    },
    {
      title: `RECIVED JOB OFFERS`,
      value: `85%`,
      border_xl_lg: 'border-r-gray-300',
      border_md: 'border-r-gray-300',
      border_sm: 'border-b-gray-300',
      color: '#D9D9D9',
      hr_lg: <hr className='rotate-90' />,
      hr_sm: <hr />
    },
    {
      title: `PLACEMENT PARTNERS`,
      value: `20+`,

    },
  ]
  return (
    <div className='grid grid-cols-1 phone:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 xl:px-24 lg:px-24 md:px-20 sm:p-5 phone:p-5'>
      <div className={`text-center items-center justify-center my-10 py-10 2xl:border-2 2xl:border-transparent 2xl:border-r-gray-300 xl:border-2 xl:border-transparent xl:border-r-gray-300 lg:border-2 lg:border-transparent lg:border-r-gray-300 md:border-2 md:border-transparent md:border-r-gray-300 sm:border-2 sm:border-transparent sm:border-b-gray-300 phone:border-2 phone:border-transparent phone:border-b-gray-300`} >
        <span className='text-6xl font-black text-green-500'>100+</span>
        <p className='mt-10 '>CANDIDATES PLACED</p>
      </div>
      <div className={`text-center items-center justify-center my-10 py-10 2xl:border-r-gray-300 xl:border-2 xl:border-transparent xl:border-r-gray-300 lg:border-2 lg:border-transparent lg:border-r-gray-300 md:border-2 md:border-transparent sm:border-2 sm:border-transparent sm:border-b-gray-300 phone:border-2 phone:border-transparent phone:border-b-gray-300`} >
        <span className='text-6xl font-black text-green-500'>98%</span>
        <p className='mt-10 '>PLACEMENT SUCCESS</p>
      </div>
      <div className={`text-center items-center justify-center my-10 py-10 2xl:border-r-gray-300 xl:border-2 xl:border-transparent xl:border-r-gray-300 lg:border-2 lg:border-transparent lg:border-r-gray-300 md:border-2 md:border-transparent md:border-r-gray-300 sm:border-2 sm:border-transparent sm:border-b-gray-300 phone:border-2 phone:border-transparent phone:border-b-gray-300`} >
        <span className='text-6xl font-black text-green-500'>85%</span>
        <p className='mt-10 '>RECIVED JOB OFFERS</p>
      </div>
      <div className={`text-center items-center justify-center my-10 py-10 `} >
        <span className='text-6xl font-black text-green-500'>20+</span>
        <p className='mt-10 '>PLACEMENT PARTNERS</p>
      </div>
    </div>
  )
}

