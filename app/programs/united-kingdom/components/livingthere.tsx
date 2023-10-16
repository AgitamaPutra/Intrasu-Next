
import { LtUKData } from "@/lib/data/programs/uk/livingThere"
import Image from "next/image"

export const LtUK= () => {
    return (
        <>
            <h1 className='phone:text-2xl lg:text-4xl'>Internship experience in <span className='font-black text-green-500'>United Kingdom</span></h1>
            <div className='my-8'>
                <Image className='mx-auto' src={'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80'} alt='usa' width={700} height={700} />
            </div>
            <p className='text-justify'>{`Internship experiences in the United Kingdom can vary widely depending on the field, company, and location. However, I can provide you with a general overview of what you might expect when doing an internship in the UK:`}</p>
            <div className='py-5'>
                <ul className='pl-10'>
                    {LtUKData && LtUKData.map((item, i) => {
                        return <li key={i} className='text-justify list-decimal'><span className='font-bold'>{item.title}</span> {item.val}</li>
                    })}
                </ul>
            </div>
            <p className='text-justify'>{`It's important to research the specific requirements and expectations of your internship before you start, as they can vary significantly. Additionally, seek guidance from your university's career services or internship office, as they can provide valuable assistance in finding and securing internships in the UK.`}</p>
        </>
    )
}