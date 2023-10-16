import { howItWork } from '@/lib/data/howItWork'
import { OvThaiData } from '@/lib/data/programs/thailand/overview'
import Image from 'next/image'
import React from 'react'
import { OvThai } from './overview'
import { LtThai } from './livingthere'
import { AccThai } from './accomodation'
import { VisaThai } from './visa'
import { ProgramProccess } from '../../components/Process'

export const ThailandContent = () => {
    return (
        <div className='flex items-start flex-col'>
            <section id='Overview' className='w-full'>
                <OvThai />
            </section>
            <section id='living-there' className='mt-20 w-full '>
                <LtThai />
            </section>
            <section id='accomodation' className='mt-20 w-full'>
                <AccThai />
            </section>
            <section id='visa-info' className='mt-20 w-full'>
                <VisaThai />
            </section>
            <section id='our-process' className='mt-20 w-full'>
                <ProgramProccess />
            </section>
            <section id='program-fee' className='w-full mt-10' >
                <h1 className='phone:text-2xl lg:text-4xl'>Program <span className='font-black text-green-500'>Fee $1200</span></h1>
            </section>
        </div>
    )
}
