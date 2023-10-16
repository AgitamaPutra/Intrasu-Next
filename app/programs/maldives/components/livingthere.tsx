import { LtMaldiveskData } from "@/lib/data/programs/maldives/livingThere"
import Image from "next/image"

export const LtMaldives = () => {
    return (
        <>
            <h1 className='phone:text-2xl lg:text-4xl'>Internship experience in <span className='font-black text-green-500'>Maldives</span></h1>
            <div className='my-8'>
                <Image className='mx-auto' src={'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80'} alt='usa' width={700} height={700} />
            </div>
            <p className='text-justify'>{`Interning in the Maldives can be a truly unique and unforgettable experience. While every internship is different, here's a general idea of what you might expect from an internship experience in the Maldives:`}</p>
            <div className='py-5'>
                <ul className='pl-3'>
                    {LtMaldiveskData && LtMaldiveskData.map((item) => {
                        return (
                            <>
                                <li className='text-justify list-decimal'>{item.title}</li>
                                <div className='pl-3'>
                                    <ul>
                                        {item.data && item.data.map((item, i) => {
                                            return <li key={i} className='text-justify list-disc'>{item.val}</li>
                                        })}
                                    </ul>
                                </div>
                            </>
                        )
                    })}
                </ul>
            </div>
            <p className='text-justify'>{`Overall, an internship in the Maldives can be a rewarding experience that combines work with the opportunity to explore a tropical paradise. It's a chance to gain practical skills, learn about the tourism industry, and create lasting memories in a stunning environment.`}</p>
        </>
    )
}