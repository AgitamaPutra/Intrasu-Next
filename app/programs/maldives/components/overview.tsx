
import { OvMaldivesData } from "@/lib/data/programs/maldives/overview"
import Image from "next/image"


export const OvMaldives = () => {
    return (
        <>
            <h1 className='phone:text-2xl lg:text-4xl'>Maldives <span className='font-black text-green-500'>Overview</span></h1>
            <div className='my-8'>
                <Image className='mx-auto' src={'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80'} alt='uae' width={700} height={700} />
            </div>
            <p className='text-justify'>{`Internships in the Maldives can be a unique and exciting opportunity for individuals looking to gain valuable work experience in a beautiful and tropical island nation. Here's an overview of what you can expect from an internship in the Maldives:`}</p>
            <div className='py-5'>
                <ul className='pl-3'>
                    {OvMaldivesData && OvMaldivesData.map((item) => {
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
            <p className='text-justify'>{`When considering an internship in the Maldives, it's crucial to research potential organizations thoroughly, understand the terms and conditions of the internship, and plan for the logistics of living and working in a remote island paradise.`}</p>
        </>
    )
}