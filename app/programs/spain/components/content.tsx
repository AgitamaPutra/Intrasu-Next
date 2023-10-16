import { howItWork } from '@/lib/data/howItWork'
import Image from 'next/image'
import React from 'react'
import { OvSpain } from './overview'
import { LtSpain } from './livingthere'
import { AccSpain } from './accomodation'
import { VisaSpain } from './visa'
import { ProgramProccess } from '../../components/Process'

export const SpainContent = () => {
    return (
        <div className='flex items-start flex-col'>
            <section id='Overview' className='w-full'>
               <OvSpain/>
            </section>
            <section id='living-there' className='mt-20 w-full '>
                <LtSpain/>
            </section>
            <section id='accomodation' className='mt-20 w-full'>
                <AccSpain/>
            </section>
            <section id='visa-info' className='mt-20 w-full'>
                <VisaSpain/>
            </section>
            <section id='our-process' className='mt-20 w-full'>
                <ProgramProccess/>
            </section>
            <section id='program-fee' className='w-full mt-20' >
                <h1 className='phone:text-2xl lg:text-4xl'>Program <span className='font-black text-green-500'>Fee $1200</span></h1>
            </section>
        </div>
    )
}
