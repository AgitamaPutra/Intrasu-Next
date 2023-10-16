
import { OvSpainData } from "@/lib/data/programs/spain/overview"
import Image from "next/image"


export const OvSpain = () => {
    return (
        <>
            <h1 className='phone:text-2xl lg:text-4xl'>Spain <span className='font-black text-green-500'>Overview</span></h1>
            <div className='my-8'>
                <Image className='mx-auto' src={'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'} alt='uae' width={700} height={700} />
            </div>
            <p className='text-justify'>{`Internships in Spain can be a fantastic opportunity to gain valuable work experience, immerse yourself in Spanish culture, and develop your language skills. Here is an overview of what you can expect when pursuing an internship in Spain:`}</p>
            <div className='py-5'>
                <ul className='pl-3'>
                    {OvSpainData && OvSpainData.map((item, i) => {
                        return <li key={i} className='text-justify list-decimal'><span className='font-bold'>{item.title}</span> {item.val}</li>
                    })}
                </ul>
            </div>
            <p className='text-justify'>{`When searching for internships in Spain, utilize online job boards, university career services, and international internship programs. It's essential to research and plan your internship well in advance to ensure a smooth and successful experience in Spain.`}</p>            
        </>
    )
}