import { OvUKData } from "@/lib/data/programs/uk/overview"

import Image from "next/image"


export const OvUK = () => {
    return (
        <>
            <h1 className='phone:text-2xl lg:text-4xl'>United Kingdom <span className='font-black text-green-500'>Overview</span></h1>
            <div className='my-8'>
                <Image className='mx-auto' src={'https://images.unsplash.com/photo-1454537468202-b7ff71d51c2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80'} alt='usa' width={700} height={700} />
            </div>

            <p className='text-justify'>{`An internship in the United Kingdom (UK) can be a valuable experience for students and recent graduates looking to gain practical work experience, enhance their skills, and build their professional network. Here's an overview of what you need to know about internships in the UK:       `}</p>
            <div className='py-5'>
                <ul className='pl-10'>
                    {OvUKData && OvUKData.map((item, i) => {
                        return <li key={i} className='text-justify list-decimal'><span className='font-bold'>{item.title}</span> {item.val}</li>
                    })}
                </ul>
            </div>
            <p className='text-justify'>{`Remember that the specifics of internships can vary greatly depending on the industry, company, and location in the UK. It's essential to research and prepare thoroughly for your internship application and make the most of the opportunities it provides for your personal and professional growth.`}</p>
        </>
    )
}