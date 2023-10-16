import { howItWork } from '@/lib/data/howItWork'
import Image from 'next/image'
import React from 'react'
import { OvFrance } from './overview'
import { LtFrance } from './livingthere'
import { AccFrance } from './accomodation'
import { VisaFrance } from './visa'
import { ProgramProccess } from '../../components/Process'

export const FranceContent = () => {
    return (
        <div className='flex items-start flex-col'>
            <section id='Overview' className='w-full'>
                <OvFrance />
            </section>
            <section id='living-there' className='mt-20 w-full '>
                <LtFrance />
            </section>
            <section id='accomodation' className='mt-20 w-full'>
                <AccFrance />
            </section>
            <section id='visa-info' className='mt-20 w-full'>
               <VisaFrance />
            </section>
            <section id='our-process' className='mt-20 w-full'>
                <ProgramProccess />
            </section>
            <section id='program-fee' className='w-full mt-20' >
                <h1 className='phone:text-2xl lg:text-4xl'>Program <span className='font-black text-green-500'>Fee $2000</span></h1>
            </section>
        </div>
    )
}
