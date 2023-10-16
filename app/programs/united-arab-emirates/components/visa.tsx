
import { VisaUAEData, requirements } from "@/lib/data/programs/uae/visa"


export const VisaUAE = () => {
    return (
        <>
            <h1 className='phone:text-2xl lg:text-4xl'><span className='font-black text-green-500'>Visa</span> Information</h1>
            <p className='text-justify mt-5'>{`Visa requirements for the United Arab Emirates (UAE) can vary depending on your nationality, the purpose of your visit, and the duration of your stay. As of my last knowledge update in September 2021, I can provide you with some general information about UAE visas. However, visa policies and requirements can change, so it's essential to check with the nearest UAE embassy or consulate or visit the official website of the UAE's General Directorate of Residency and Foreign Affairs (GDRFA) for the most up-to-date information.`}</p>
            <p className='mt-2'>Here are some common types of UAE visas:</p>
            <div className='py-2'>
                <ul className='pl-3'>
                    {VisaUAEData && VisaUAEData.map((item, i) => {
                        return <li key={i} className='text-justify list-decimal'><span className='font-bold'>{item.title}</span> {item.val}</li>

                    })}
                </ul>
            </div>
            <p className='mt-2'>To apply for a UAE visa, you will usually need to provide the following documents and meet specific requirements:</p>
            <div className='py-2'>
                <ul className='pl-3'>
                    {requirements && requirements.map((item, i) => {
                        return <li key={i} className='text-justify list-disc'>{item.val}</li>

                    })}
                </ul>
            </div>
            <p className='text-justify'>{`Please note that visa requirements and application processes may change, and certain nationalities may be eligible for visa-free entry or visa-on-arrival. Additionally, visa rules and fees can vary between the different emirates within the UAE.`}</p>
            <p className='text-justify mt-2'>{`It's crucial to verify the most current visa requirements and procedures with the UAE embassy or consulate in your home country or through the official GDRFA website before planning your trip to the UAE. Violating visa rules and overstaying your visa can result in fines, deportation, and other legal consequences.`}</p>
        </>
    )
}