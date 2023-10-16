import { howItWork } from '@/lib/data/howItWork'
import Image from 'next/image'
import React from 'react'
import { OvMaldives } from './overview'
import { LtMaldives } from './livingthere'
import { AccMaldives } from './accomodation'
import { VisaMaldives } from './visa'
import { ProgramProccess } from '../../components/Process'

export const MaldivesContent = () => {
    return (
        <div className='flex items-start flex-col'>
            <section id='Overview' className='w-full'>
                <OvMaldives />
            </section>
            <section id='living-there' className='mt-20 w-full '>
                <LtMaldives />
            </section>
            <section id='accomodation' className='mt-20 w-full'>
                <AccMaldives />
            </section>
            <section id='visa-info' className='mt-20 w-full'>
                <VisaMaldives />
            </section>
            <section id='our-process' className='mt-20 w-full'>
                <ProgramProccess />
            </section>
            <section id='program-fee' className='w-full mt-20' >
                <h1 className='phone:text-2xl lg:text-4xl'>Program <span className='font-black text-green-500'>Fee $1200</span></h1>
            </section>
        </div>
    )
}
