import { LtSpainData } from "@/lib/data/programs/spain/livingThere"
import { LtThaiData } from "@/lib/data/programs/thailand/livingThere"
import Image from "next/image"

export const LtSpain = () => {
    return (
        <>
            <h1 className='phone:text-2xl lg:text-4xl'>Internship experience in <span className='font-black text-green-500'>Spain</span></h1>
            <div className='my-8'>
                <Image className='mx-auto' src={'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80'} alt='usa' width={700} height={700} />
            </div>
            <p className='text-justify'>{`Internship experiences in Spain can be diverse and rewarding, offering a unique blend of professional development and cultural immersion. Here are some common aspects and highlights of internship experiences in Spain:`}</p>
            <div className='py-5'>
                <ul className='pl-3'>
                    {LtSpainData && LtSpainData.map((item, i) => {
                        return <li key={i} className='text-justify list-decimal'><span className='font-bold'>{item.title}</span> {item.val}</li>
                    })}
                </ul>
            </div>
            <p className='text-justify'>{`Remember that internship experiences in Spain can vary widely depending on your field, location, and the specific company or organization you work for. To make the most of your internship in Spain, embrace the cultural differences, be open to new experiences, and actively seek opportunities for both personal and professional growth.`}</p>
        </>
    )
}