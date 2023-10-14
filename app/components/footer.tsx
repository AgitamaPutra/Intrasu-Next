"use client"

import { BsTelephone } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { AiOutlineSkype } from 'react-icons/ai'
import Image from 'next/image'
import Logo from '@/asset/Logo Intrasu.png'
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
                        <div className="text-white flex my-1">
                            <span className='text-xl my-auto mr-3'><BsTelephone /></span>
                            <span className='text-lg my-auto'>+62 813-1615-1799</span>
                        </div>
                        <div className="text-white flex my-1">
                            <span className='text-xl my-auto mr-3'><AiOutlineMail /></span>
                            <span className='text-lg my-auto'>arya@intrasu.org</span>
                        </div>
                        <div className="text-white flex my-1">
                            <span className='text-xl my-auto mr-3'><AiOutlineSkype /></span>
                            <span className='text-lg my-auto'>arya@intrasu.org</span>
                        </div>
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
                    <div className='border-collapse 2xl:flex xl:flex lg:flex md:flex'>
                        <p className='text-gray-300 phone:py-1 text-xs md:pr-5 2xl:border-2 2xl:border-transparent 2xl:border-r-gray-400 xl:border-2 xl:border-transparent xl:border-r-gray-400 lg:border-2 lg:border-transparent lg:border-r-gray-400 md:border-2 md:border-transparent md:border-r-gray-400 '>All Rights Reserved</p>
                        <p className='text-gray-300 phone:py-1 text-xs md:px-5 2xl:border-2 2xl:border-transparent 2xl:border-r-gray-400 xl:border-2 xl:border-transparent xl:border-r-gray-400 lg:border-2 lg:border-transparent lg:border-r-gray-400 md:border-2 md:border-transparent md:border-r-gray-400 '>Terms & Conditions</p>
                        <p className='text-gray-300 phone:py-1 text-xs md:px-5 2xl:border-2 2xl:border-transparent 2xl:border-r-gray-400 xl:border-2 xl:border-transparent xl:border-r-gray-400 lg:border-2 lg:border-transparent lg:border-r-gray-400 md:border-2 md:border-transparent md:border-r-gray-400 '>Privacy Policy</p>
                        <p className='text-gray-300 phone:py-1 text-xs md:px-5'>Copyright © 2023 Intrasu Indonesia</p>
                    </div>
                </div>
            </div>
        </div>
    )
}