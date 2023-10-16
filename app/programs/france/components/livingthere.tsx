import { LtFranceData } from "@/lib/data/programs/france/livingThere"
import Image from "next/image"

export const LtFrance= () => {
    return (
        <>
            <h1 className='phone:text-2xl lg:text-4xl'>Internship experience in <span className='font-black text-green-500'>France</span></h1>
            <div className='my-8'>
                <Image className='mx-auto' src={'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80'} alt='usa' width={700} height={700} />
            </div>
            <p className='text-justify'>{`Internship experiences in France can be diverse and rewarding, offering a blend of professional growth, cultural immersion, and personal development. Here are some common aspects of internship experiences in France:`}</p>
            <div className='py-5'>
                <ul className='pl-3'>
                    {LtFranceData && LtFranceData.map((item, i) => {
                        return <li key={i} className='text-justify list-decimal'><span className='font-bold'>{item.title}</span> {item.val}</li>
                    })}
                </ul>
            </div>
            <p className='text-justify'>{`Your internship experience in France will largely depend on your field of study, the company you intern with, and your personal goals. Embrace the opportunity to learn, grow, and explore a new culture during your time in France, as it can be a transformative experience for your career and life.`}</p>
        </>
    )
}