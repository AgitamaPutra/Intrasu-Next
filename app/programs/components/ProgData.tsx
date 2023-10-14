'use client'

import React, { useEffect, useState } from 'react'
import { US, MV, AE, GB, ES, DK, FR, TH} from 'country-flag-icons/react/3x2'
import Link from 'next/link'


export default function ProgData() {

    const data = [
        {
            desc: 'Some of the industries hiring for intern jobs in UAE are Retail, Hospitality, and Healthcare. Additionally, opportunities in UAE can be found thru us.',
            title: 'UAE',
            place: 'Dubai, Sharjah, Abu Dhabi',
            flag: <AE title="United Arab" className="h-[4em] w-[4em] " />,
            href: 'programs/united-arab-emirates'
        },
        {
            desc: 'The United States has a strong internship culture, with most industries from finance to food hosting an internal paid or unpaid internship program.',
            title: 'USA',
            place: 'All State Of US',
            flag: <US title="United States" className="h-[4em] w-[4em]" />,
            href: 'programs/united-states'
        },
        {
            desc: 'Looking for Internships in Maldives? We have thousands of jobs in hotels, catering or as chef & waiter etc. Apply on Intrasu Indonesia!',
            title: 'MALDIVES',
            place: 'Male and Other Islands',
            flag: <MV title="Maldives" className="h-[4em] w-[4em]" />,
            href: 'programs/maldives'
        },
        {
            desc: 'We can help university or college careers service for finding internships. Scotland, Wales and Northern Ireland. Find out more about graduate internships in UK',
            title: 'UNITED KINGDOM',
            place: 'London and Other cities',
            flag: <GB title="United Kingdom" className="h-[4em] w-[4em]" />,
            href: 'programs/united-kingdom'
        },
        {
            desc: 'Apply for hundreds of paid internships in Spain and student placements in Europe. Business, Teaching, Tourism and other program fields available in Spain.',
            title: 'SPAIN',
            place: 'Madrid, Sevilla, Barcelona',
            flag: <ES title="Spain" className="h-[4em] w-[4em]" />,
            href: 'programs/spain'
        },
        {
            desc: 'Lorem',
            title: 'DENMARK',
            place: 'Lorem',
            flag: <DK title="Denmark" className="h-[4em] w-[4em]" />,
            href: 'programs/denmark'
        },
        {
            desc: 'Lorem',
            title: 'FRANCE',
            place: 'Lorem',
            flag: <FR title="Denmark" className="h-[4em] w-[4em]" />,
            href: 'programs/france'
        },
        {
            desc: 'Lorem',
            title: 'THAILAND',
            place: 'Lorem',
            flag: <TH title="Denmark" className="h-[4em] w-[4em]" />,
            href: 'programs/thailand'
        },
    ]
  return (
      <div>
          <h1 className='font-black phone:text-2xl lg:text-4xl text-center phone:py-10 lg:py-20'>Where we place our students and participants?</h1>
          <div className='grid grid-cols-1 phone:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 xl:px-24 lg:px-24 md:px-20 sm:p-3 phone:p-3'>
              {data && data.map((item, i) => {
                  return (
                      <Link href={item.href} className="card bg-white hover:lg:bg-gray-100 shadow-md border hover:lg:drop-shadow-xl duration-300 hover:lg:z-40 ease-in" key={i} >
                          <div className="card-body" >
                              <p>{item.desc}</p>
                              <div className='flex'>
                                  {item.flag}
                                  <div className='mx-5 my-auto' >
                                      <p className='font-bold'>{item.title}</p>
                                      <p className='text-sm'>{item.place}</p>
                                  </div>
                              </div>
                          </div>
                      </Link>
                  )
              })}
          </div>
          <h1 className='font-black  phone:text-xl lg:text-3xl text-center phone:py-10 lg:py-20'>Join Our Happy Participants Today!</h1>
      </div>
  )
}
