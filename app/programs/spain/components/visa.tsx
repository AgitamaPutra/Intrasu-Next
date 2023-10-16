
import { VisaSpainData } from "@/lib/data/programs/spain/visa"

export const VisaSpain = () => {
    return (
        <>
            <h1 className='phone:text-2xl lg:text-4xl'><span className='font-black text-green-500'>Visa</span> Information</h1>
            <p className='text-justify mt-5'>{`Visa requirements for an internship in Spain can vary depending on your nationality, the duration of your internship, and the specific circumstances of your stay. As of my last knowledge update in September 2021, I can provide you with some general information. However, it's important to verify the most up-to-date information and requirements from the nearest Spanish consulate or embassy as rules and regulations can change over time.`}</p>
            <div className='py-2'>
                <ul className='pl-3'>
                    {VisaSpainData && VisaSpainData.map((item) => {
                        return (
                            <>
                                <li className='text-justify list-decimal'><span className='font-bold'>{item.title}</span> {item.val}</li>
                                <div className='pl-3'>
                                    <ul>
                                        {item.data && item.data.map((item, i) => {
                                            return <li key={i} className='text-justify list-disc'>{item.item}</li>
                                        })}
                                    </ul>
                                </div>
                            </>
                        )
                    })}
                </ul>
            </div>
            <p className='mt-2 text-justify'>{`It's important to remember that visa requirements can change, and the information provided here is based on my last update in September 2021. Therefore, I strongly recommend that you contact the nearest Spanish consulate or embassy in your home country to get the most up-to-date and accurate information regarding visa requirements and the application process for your specific situation.`}</p>
            
        </>
    )
}