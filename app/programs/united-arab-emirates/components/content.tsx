
import React from 'react'
import { OvUAE } from './overview'
import { LtUAE } from './livingthere'
import { AccUAE } from './accomodation'
import { VisaUAE } from './visa'
import { ProgramProccess } from '../../components/Process'

export const UAEContent = () => {
    return (
        <div className='flex items-start flex-col'>
            <section id='Overview' className='w-full'>
                <OvUAE />
            </section>
            <section id='living-there' className='mt-20 w-full '>
                <LtUAE />
            </section>
            <section id='accomodation' className='mt-20 w-full'>
                <AccUAE />
            </section>
            <section id='visa-info' className='mt-20 w-full'>
                <VisaUAE />
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
