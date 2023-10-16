"use client"

import Image from 'next/image'
import Logo from '@/asset/Logo Intrasu.png'
import { contact } from '@/lib/data/contact'
import { footer } from '@/lib/data/footerData'
export default function Footer() {

    return (
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 items-center justify-center bg-fixed bg-center bg-cover">
            {/* OVERLAY */}
            <div className="top-0 left-0 bottom-0 right-0 bg-black/70 z-[2]" >
                <div className='grid grid-cols-1 phone:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 xl:px-32 lg:px-16 md:px-16 sm:p-3 phone:p-3'>
                    <div className=''>
                        <div><Image src={Logo} alt='Logo intrasu' width="150" height="150" /></div>
                    </div>
                    <div className='my-auto'>
                        {contact && contact.map((item,i) => {
                            return (
                                <div className="text-white flex my-1" key={i}>
                                    <span className='text-xl my-auto mr-3'>{item.icon}</span>
                                    <span className='text-lg my-auto'>{item.val}</span>
                                </div>
                            )
                        })}
                    </div>
                    <div className='my-auto'>
                        <label className='text-white'>Get latest news</label> <br />
                        <div >
                            <input type='text' className='bg-gray-50 border border-slate-300 p-2 mb-5 rounded-sm' placeholder='Input Your Email Here' />
                            <button type='button' className='bg-white p-2 ml-2 rounded-sm hover:bg-green-700 hover:text-white duration-300 ease-in'>Subscribe!</button>
                        </div>
                    </div>
                </div>
                <div className='sm:mt-10 phone:mt-10 py-20 xl:px-32 lg:px-16 md:px-16 sm:p-3 phone:p-3'>
                    <div className='2xl:flex xl:flex lg:flex md:flex'>
                    {footer && footer.map((item, i) => {
                        return (
                            <p key={i} className='phone:mb-2 md:mr-5 lg:mr-10 text-slate-400 '>
                                <a href={item.href} className='hover:text-white duration-300 ease-in text-sm'>{item.val}</a>
                            </p>
                        )
                    })}
                    </div>
                </div>
            </div>
        </div>
    )
}