import { OvUSAData } from "@/lib/data/programs/usa/overview"
import Image from "next/image"


export const OvUSA = () => {
    return (
        <>
            <h1 className='phone:text-2xl lg:text-4xl'>United States <span className='font-black text-green-500'>Overview</span></h1>
            <div className='my-8'>
                <Image className='mx-auto' src={'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNhfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'} alt='usa' width={700} height={700} />
            </div>
            <p className='text-justify '>The J-1 Visa Program in the United States is a cultural exchange program organized by the U.S. government. This program allows foreign nationals to come to the United States with the aim of participating in educational, cultural, and work exchange experiences. Here is a summary of the J-1 Visa Program in the United States:</p>
            <div className='py-5'>
                {OvUSAData && OvUSAData.map((item, i) => {
                    return (
                        <ul key={i} className="">
                            <li >{i + 1}. <span className="font-bold">{item.title}</span></li>
                            <ul className='pl-10'>
                                {item.data && item.data.map((item, i) => {
                                    return <li key={i} className='text-justify list-disc'>{item.item}</li>
                                })}
                            </ul>
                        </ul>
                    )
                })}
            </div>
            <p className='text-justify '>The J-1 Visa Program in the United States is one of the popular ways for foreign nationals to experience life in the United States while contributing to international cultural exchange. Each year, thousands of participants from various countries take part in this program.</p>
        </>
    )
}