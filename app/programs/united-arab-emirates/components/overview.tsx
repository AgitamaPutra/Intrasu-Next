import { OvUAEData } from "@/lib/data/programs/uae/overview"
import Image from "next/image"


export const OvUAE = () => {
    return (
        <>
            <h1 className='phone:text-2xl lg:text-4xl'>United Arab Emirates <span className='font-black text-green-500'>Overview</span></h1>
            <div className='my-8'>
                <Image className='mx-auto' src={'https://images.unsplash.com/flagged/photo-1559717865-a99cac1c95d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dWFlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'} alt='uae' width={700} height={700} />
            </div>
            <p className='text-justify'>{`An internship in the United Arab Emirates (UAE) can be a valuable opportunity for students and recent graduates to gain practical work experience in a dynamic and rapidly growing region. Here's an overview of what you can expect from an internship in the UAE:`}</p>
            <div className='py-5'>
                <ul className='pl-3'>
                    {OvUAEData && OvUAEData.map((item,i) => {
                        return <li key={i} className='text-justify list-decimal'><span className='font-bold'>{item.title}</span> {item.val}</li>
                    })}
                </ul>
            </div>
            <p className='text-justify'>When searching for internships in the UAE, use job search websites, company websites, and networking to identify potential opportunities. Be sure to tailor your resume and cover letter to match the specific requirements of each internship you apply for, and research the company thoroughly to understand its culture and values.</p>
        </>
    )
}