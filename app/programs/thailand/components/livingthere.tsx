import { LtThaiData } from "@/lib/data/programs/thailand/livingThere"
import Image from "next/image"

export const LtThai = () => {
    return (
        <>
            <h1 className='phone:text-2xl lg:text-4xl'>Internship experience in <span className='font-black text-green-500'>Thailand</span></h1>
            <div className='mt-8'>
                <Image className='mx-auto' src={'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80'} alt='usa' width={700} height={700} />
            </div>
            {LtThaiData && LtThaiData.map((item, i) => {
                return <p key={i} className='text-justify mt-5'>{item.desc}</p>
            })}
        </>
    )
}