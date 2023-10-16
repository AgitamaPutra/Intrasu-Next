

import { VisaUKData } from "@/lib/data/programs/uk/visa"


export const VisaUK = () => {
    return (
        <>
            <h1 className='phone:text-2xl lg:text-4xl'><span className='font-black text-green-500'>Visa</span> Information</h1>
            <p className='text-justify mt-5'>{`If you are planning to do an internship in the United Kingdom as an international student or non-EEA (European Economic Area) national, you will likely need the appropriate visa or immigration permission to work legally in the country. The type of visa you need will depend on various factors, including the length of your internship, your nationality, and the specific circumstances of your internship. Here is some information on the most common types of visas for internships in the UK:`}</p>
            <div className='p-2'>
                <ul className='pl-10'>
                    {VisaUKData && VisaUKData.map((item) => {
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
            <p className='text-justify'>{`It's essential to check the specific requirements and eligibility criteria for the visa category that applies to your internship. Additionally, be aware of the application process, fees, and processing times, which can change over time. Always consult the official website of the UK Home Office or seek guidance from your university's international student office for the most up-to-date information and assistance with your visa application.`}</p>
            <p className='text-justify mt-5'>{`Please note that visa regulations and requirements can change, and my knowledge is based on information available up to September 2021. It's crucial to verify the current visa requirements and guidelines on the official UK government website or through your nearest UK embassy or consulate.`}</p>
        </>
    )
}