'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { placeData } from '@/lib/data/place'

export default function ProgData() {

  return (
      <div>
          <h1 className='font-black phone:text-2xl lg:text-4xl text-center phone:py-10 lg:py-20'>Where we place our students and participants?</h1>
          <div className='grid grid-cols-1 phone:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 xl:px-24 lg:px-24 md:px-20 sm:p-3 phone:p-3'>
              {placeData && placeData.map((item, i) => {
                  return (
                      <Link href={item.href} className="card bg-white hover:lg:bg-gray-100 shadow-md border hover:lg:drop-shadow-xl duration-300 hover:lg:z-40 ease-in" key={i} >
                          <div className="card-body" >
                              <p>{item.desc}</p>
                              <div className='flex'>
                                  <span className='w-[4em] h-[4em]'>{item.flag}</span>
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
