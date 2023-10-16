import { LtUSAData } from "@/lib/data/programs/usa/livingThere"
import Image from "next/image"

export const LtUSA = () => {
    return (
        <>
            <h1 className='phone:text-2xl lg:text-4xl'>Internship experience in <span className='font-black text-green-500'>United States</span></h1>
            <div className='my-8'>
                <Image className='mx-auto' src={'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80'} alt='usa' width={700} height={700} />
            </div>
            <p className='text-justify'>{`Experiencing an internship in the USA can be a valuable and enriching opportunity for both personal and professional growth. Here's what you can typically expect from an internship experience in the USA:`}</p>
            <div className='py-5'>
                <ul className='pl-10'>
                    {LtUSAData && LtUSAData.map((item, i) => {
                        return <li key={i} className='text-justify list-decimal'><span className='font-bold'>{item.title}</span> {item.val}</li>
                    })}
                </ul>
            </div>
            <p className='text-justify'>{`To secure an internship in the USA, you typically need to go through an application and interview process. It's important to research potential opportunities, prepare a strong resume and cover letter, and network with professionals in your field. Additionally, you'll need to navigate the visa application process if you're not a U.S. citizen or permanent resident.`}</p>
            <p className='text-justify mt-5'>{`Overall, an internship experience in the USA can be a transformative and valuable step in your education and career journey. It offers a unique chance to gain practical skills, expand your horizons, and build a foundation for future success.`}</p>
        </>
    )
}