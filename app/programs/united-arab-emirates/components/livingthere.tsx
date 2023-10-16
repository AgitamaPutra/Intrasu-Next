import { LtUAEData } from "@/lib/data/programs/uae/livingThere"
import Image from "next/image"

export const LtUAE = () => {
    return (
        <>
            <h1 className='phone:text-2xl lg:text-4xl'>Internship experience in <span className='font-black text-green-500'>United Arab Emirates</span></h1>
            <div className='my-8'>
                <Image className='mx-auto' src={'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80'} alt='usa' width={700} height={700} />
            </div>
            <p className='text-justify'>{`Interning in the United Arab Emirates (UAE) can be an exciting and culturally enriching experience. Here are some key aspects of what you might expect from an internship in the UAE based on typical experiences:`}</p>
            <div className='py-5'>
                <ul className='pl-3'>
                    {LtUAEData && LtUAEData.map((item, i) => {
                        return <li key={i} className='text-justify list-decimal'><span className='font-bold'>{item.title}</span> {item.val}</li>
                    })}
                </ul>
            </div>
            <p className='text-justify'>{`An internship in the UAE can be an excellent opportunity to gain international work experience, build a global network, and develop your skills. It's essential to conduct thorough research on the company, the specific internship role, and the legal requirements before accepting an offer. Additionally, embrace the cultural experience and make the most of your time in this dynamic and vibrant country.`}</p>
        </>
    )
}