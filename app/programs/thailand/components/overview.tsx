import { OvThaiData } from "@/lib/data/programs/thailand/overview"
import Image from "next/image"


export const OvThai = () => {
    return (
        <>
            <h1 className='phone:text-2xl lg:text-4xl'>Thailand <span className='font-black text-green-500'>Overview</span></h1>
            <div className='my-8'>
                <Image className='mx-auto' src={'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'} alt='uae' width={700} height={700} />
            </div>
            <p className='text-justify'>{`Interning in Thailand can be a unique and culturally enriching experience. Thailand, known for its rich culture, stunning landscapes, and diverse economy, offers a range of internship opportunities across various industries. Here's an overview of what you should know about internships in Thailand:`}</p>
            <div className='py-5'>
                <ul className='pl-3'>
                    {OvThaiData && OvThaiData.map((item, i) => {
                        return <li key={i} className='text-justify list-decimal'><span className='font-bold'>{item.title}</span> {item.val}</li>
                    })}
                </ul>
            </div>
            <p className='text-justify'>{`Before pursuing an internship in Thailand, research specific details related to your field of interest, the company's requirements, and any legal and logistical considerations based on your nationality and circumstances. Additionally, consult with your university's career services or an internship coordinator for guidance and support in finding and securing internships in Thailand.`}</p>
        </>
    )
}