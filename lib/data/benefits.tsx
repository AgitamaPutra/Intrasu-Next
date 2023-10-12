import Network from '@/asset/tes/network-graphic-overlay-banner-background.jpg'
import Grow from '@/asset/tes/successfully-young-businessman-keeping-arms-raised-expressing-positivity-while-standing-outdoors.jpg'
import Culture from '@/asset/tes/young-friends-standing-circle-showing-peace-gesture.jpg'
import Intern from '@/asset/tes/people-work.jpg'

import { StaticImageData } from 'next/image'

export type TypeBenefit =
    [
        {
            image: StaticImageData
            title: string
            keterangan: string

        },
        {
            
            image: StaticImageData
            title: string
            keterangan: string

        },
        {
            
            image: StaticImageData
            title: string
            keterangan: string

        },
        {
            
            image: StaticImageData
            title: string
            keterangan: string

        }
    ]

export const Benefit: TypeBenefit = [
    {   
        image: Intern,
        title: "Assured Internship",
        keterangan: 'We assure you that we will locate an ideal internship tailored to your needs, offering valuable hands-on experience to enhance your professional journey.'
    },
    {
        image: Grow,
        title: 'Evolve alongside us',
        keterangan: 'Our program provides numerous chances for you to grow, both in your professional and personal capacities.'
    },
    {
        image: Culture,
        title: 'Immerse Yourself in Fresh Cultures',
        keterangan: 'Engaging in an international internship opens up an excellent chance to fully immerse yourself in the culture of your host nation, leading to fresh perspectives and experiences'
    },
    {
        image: Network,
        title: 'Enhance Your Professional Connections',
        keterangan: 'Within our program, you will have the opportunity to expand your professional network by attending exclusive networking events.'
    },
]