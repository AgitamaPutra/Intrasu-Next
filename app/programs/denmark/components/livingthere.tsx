import { LtDenmarkData } from "@/lib/data/programs/denmark/livingThere"
import Image from "next/image"

export const LtDenmark = () => {
    return (
        <>
            <h1 className='phone:text-2xl lg:text-4xl'>Internship experience in <span className='font-black text-green-500'>Denmark</span></h1>
            <div className='my-8'>
                <Image className='mx-auto' src={'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80'} alt='usa' width={700} height={700} />
            </div>
            <p className='text-justify'>{`Internship experiences in Denmark can vary widely depending on the field, company, and individual circumstances. However, here are some common themes and experiences that interns in Denmark may encounter:`}</p>
            <div className='py-5'>
                <ul className='pl-3'>
                    {LtDenmarkData && LtDenmarkData.map((item, i) => {
                        return <li key={i} className='text-justify list-decimal'><span className='font-bold'>{item.title}</span> {item.val}</li>
                    })}
                </ul>
            </div>
            <p className='text-justify'>{`Remember that every internship experience is unique, so your specific experience may differ from others. It's essential to set clear goals for your internship, communicate openly with your supervisor, and make the most of the opportunities presented to you during your time in Denmark. Ultimately, interning in Denmark can be a rewarding and culturally enriching experience that enhances your professional skills and broadens your horizons.`}</p>
        </>
    )
}