import { Divider } from 'antd'
import Link from 'next/link'
import React from 'react'

type Props = {
    place: string
}

export const Sidebar = ({place}: Props) => {
    const SidebarItems = [
        {
            name: 'Overview',
            href: `programs/${place}#Overview`
        },
        {
            name: 'Living There',
            href: `programs/${place}#living-there`
        },
        {
            name: 'Accomodation',
            href: `programs/${place}#accomodation`
        },
        {
            name: 'Visa Information',
            href: `programs/${place}#visa-info`
        },
        {
            name: 'Our Process',
            href: `programs/${place}#our-process`
        },
        {
            name: 'Program Fee',
            href: `programs/${place}#program-fee`
        },
    ]

    return (
        <div className='bg-white sticky top-[125px] phone:hidden md:block '>
            <aside id='sidebar'>
                    <span className='font-bold text-lg'>Quick Links</span>
                    <Divider />
                    <ul>
                        {SidebarItems.map((item, i) => {
                            return (
                                <Link href={item.href} key={i} >
                                    <li className='py-2'>{item.name}</li>
                                </Link>
                            )
                        })}
                    </ul>
            </aside>
        </div>
    )
}
