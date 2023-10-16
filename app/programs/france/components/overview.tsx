import { OvFranceData } from "@/lib/data/programs/france/overview"
import Image from "next/image"


export const OvFrance = () => {
    return (
        <>
            <h1 className='phone:text-2xl lg:text-4xl'>France <span className='font-black text-green-500'>Overview</span></h1>
            <div className='my-8'>
                <Image className='mx-auto' src={'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80'} alt='uae' width={700} height={700} />
            </div>

            <p className='text-justify'>{`Interning in France can be a rewarding experience, offering opportunities for professional development, cultural immersion, and personal growth. Here's an overview of what you should know about internships in France:`}</p>
            <div className='py-5'>
                <ul className='pl-3'>
                    {OvFranceData && OvFranceData.map((item, i) => {
                        return <li key={i} className='text-justify list-decimal'><span className='font-bold'>{item.title}</span> {item.val}</li>
                    })}
                </ul>
            </div>
            <p className='text-justify'>{`Before pursuing an internship in France, research specific details related to your field of interest, the company's requirements, and any legal and logistical considerations based on your nationality and circumstances. Additionally, consult with your university's career services or an internship coordinator for guidance and support in finding and securing internships in France.`}</p>
        </>
    )
}