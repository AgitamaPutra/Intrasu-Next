import { howItWork } from '@/lib/data/howItWork'
import Image from 'next/image'
import React from 'react'
import { OvUSA } from './overview'
import { LtUSA } from './livingthere'
import { AccUSA } from './accomodation'
import { VisaUSA } from './visa'
import { ProgramProccess } from '../../components/Process'

export const USAContent = () => {
    return (
        <div className='flex items-start flex-col'>
            <section id='Overview' className='w-full'>
                <OvUSA />
            </section>

            <section id='living-there' className='mt-20 w-full '>
                <LtUSA />
            </section>

            <section id='accomodation' className='mt-20 w-full'>
                <AccUSA />       
            </section>

            <section id='visa-info' className='mt-20 w-full'>
                <VisaUSA />
            </section>
            <section id='our-process' className='mt-20 w-full'>
                <ProgramProccess />
            </section>
            <section id='program-fee' className='w-full mt-20' >
                <h1 className='phone:text-2xl lg:text-4xl'>Program <span className='font-black text-green-500'>Fee $7000</span></h1>
            </section>
        </div>
    )
}
