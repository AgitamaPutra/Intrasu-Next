"use client"

import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useState, useEffect } from 'react'
import { usePathname } from "next/navigation";
export default function Navbar() {

    const [nav, setNav] = useState(false)
    const [color, setColor] = useState('transparent')
    const [textColor, setTextColor] = useState('white')
    const [shadow, setShadow] = useState('drop-shadow-lg')
    const handleNav = () => {
        setNav(!nav)
    }
    const router = usePathname()

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 90) {
                setColor('#ffffff')
                setTextColor('#000000')
                setShadow('drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))')
            } else {
                setColor('transparent')
                setTextColor('#ffffff')
            }
        }
        window.addEventListener('scroll', changeColor)
    }, [])

    const Navbar = [
        {
            name: 'Home',
            href: '/'
        },
        {
            name: 'Programs',
            href: '/programs'
        },
        {
            name: 'About Us',
            href: '/about-us'
        },
        {
            name: 'Contact Us',
            href: '/contact-us'
        },
    ]
    return (
        <div style={{ backgroundColor: `${color}`, filter: `${shadow}` }} className='fixed left-0 top-0 w-full z-50 ease-in duration-300'>
            <div className='max-2-[1240px] m-auto flex justify-between items-center p-4 text-white '>
                <Link href={'/'}>
                    <h1 style={{ color: `${textColor}` }} className='font-bold lg:text-4xl md:text-3xl sm: text-2xl'>Intrasu Indonesia</h1>
                </Link>
                <ul style={{ color: `${textColor}` }} className='hidden md:flex'>
                    {Navbar && Navbar.map((item, i) => {
                        return (
                            <li key={i} className='px-4 py-2'>
                                <Link href={item.href}  className={` ${router === item.href ? 'font-black nav' : ""} hover:font-bold nav`}>
                                    {item.name}
                                </Link>
                            </li>
                        )
                    })}

                    <li className='py-2 px-4 border font-bold hover:bg-green-500 hover:drop-shadow-lg hover: duration-300 hover:z-10 hover:ease-in'>
                        <Link href={'/apply-now'}>
                            Apply Now
                        </Link>
                    </li>
                </ul>

                {/* Mobile Button */}
                <div onClick={handleNav} className='block md:hidden z-10'>
                    {nav ? <AiOutlineClose size={20} style={{ color: 'white' }} /> : <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />}
                </div>

                {/* Mobile Menu */}
                <div className={nav ? 'lg:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-[50vh] bg-gradient-to-r from-cyan-950 to-blue-950 text-center ease-in duration-200 '
                    :
                    'lg:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-[50vh] bg-gradient-to-r from-cyan-950 to-blue-950 text-center ease-in duration-200 '}>
                    
                    <ul >
                        {Navbar && Navbar.map((item, i) => {
                            return (
                                <li className={`p-2 text-xl ${router === item.href ? 'font-black ' : ""} `} key={i}>
                                    <Link href={item.href} onClick={() => setNav(false)}>
                                        {item.name}
                                    </Link>
                                </li>
                            )
                        })}

                        <li className='p-2 text-xl hover:text-gray-500 border'>
                            <Link href={'/apply-now'}>
                                Apply Now
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}