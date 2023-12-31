import Image from 'next/image'
import React from 'react'
import { FaPhoneVolume } from 'react-icons/fa'
import { BiSolidPhoneCall } from 'react-icons/bi'
import { HiMail } from 'react-icons/hi'
import { FaLocationDot } from 'react-icons/fa6'
import { AddMessage } from './addMessage'
export const ContactContents = () => {

    const data = [
        {
            icon: <BiSolidPhoneCall />,
            href: 'https://wa.me/6281316151799',
            title: 'Call Us/WA 24x7',
            desc: '+62 813-1615-1799'
        },
        {
            icon: <FaLocationDot />,
            href: 'https://maps.app.goo.gl/P5HTkW3XVcEFRXGw6',
            title: 'Main Office',
            desc: 'Jl. Tukad Batanghari XI No.9, Dauh Puri Klod, Denpasar Selatan, Kota Denpasar, Bali 80225'
        },
        {
            icon: <HiMail />,
            href: 'mailto:aryaagitama87@gmail.com',
            title: 'Write Us',
            desc: 'info@intrasu.org'
        },
    ]

    const form = [
        {
            label: 'Full Name',
            type: 'text',
        },
        {
            label: 'Email',
            type: 'email',
        },
        {
            label: 'Subject',
            type: 'text',
        },
    ]
    return (
        <div>
            <div className='grid grid-cols-1 phone:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:p-20 md:p-16 sm:p-3 phone:p-3 '>
                {data && data.map((item, i) => {
                    return (
                        <a className="card bg-white shadow-md border hover:z-50 hover:bg-gray-50 hover:drop-shadow-xl duration-300 ease-in" target="_blank" href={item.href} key={i}>
                            <div className="text-center card-body" >
                                <p className='text-3xl mx-auto' >{item.icon}</p>
                                <h2 className="font-bold text-lg">{item.title}</h2>
                                <p >{item.desc}</p>
                            </div>
                        </a>
                    )
                })}
            </div>
            <p className='text-center text-4xl font-black mb-10 phone:mt-10 lg:mt-0'>Send Us a Message</p>  
            <AddMessage />
        </div>
    )
}
