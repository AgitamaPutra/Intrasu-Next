import { OvDenmarkData } from "@/lib/data/programs/denmark/overview"
import Image from "next/image"


export const OvDenmark = () => {
    return (
        <>
            <h1 className='phone:text-2xl lg:text-4xl'>Denmark <span className='font-black text-green-500'>Overview</span></h1>
            <div className='my-8'>
                <Image className='mx-auto' src={'https://images.unsplash.com/photo-1575843456098-25dc4244e9f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80'} alt='uae' width={700} height={700} />
            </div>
            <p className='text-justify'>{`Internships in Denmark can be a valuable opportunity for students and young professionals to gain practical work experience in a foreign country while also immersing themselves in Danish culture. Denmark is known for its strong economy, innovative industries, and high-quality education system, making it an attractive destination for internships. Here's an overview of what you need to know about internships in Denmark:`}</p>
            <div className='py-5'>
                <ul className='pl-3'>
                    {OvDenmarkData && OvDenmarkData.map((item, i) => {
                        return <li key={i} className='text-justify list-decimal'><span className='font-bold'>{item.title}</span> {item.val}</li>
                    })}
                </ul>
            </div>
            <p className='text-justify'>{`Before pursuing an internship in Denmark, it's important to research specific details related to your field of interest, the company's requirements, and any legal and logistical considerations based on your nationality and circumstances. Additionally, consult with your university's career services or an internship coordinator for guidance and support in finding and securing internships in Denmark.`}</p>
        </>
    )
}