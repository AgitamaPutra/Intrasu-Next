import { VisaMaldivesData } from "@/lib/data/programs/maldives/visa"


export const VisaMaldives = () => {
    return (
        <>
           <h1 className='phone:text-2xl lg:text-4xl'><span className='font-black text-green-500'>Visa</span> Information</h1 >
                <p className='text-justify mt-5'>{`Visa requirements for the Maldives vary depending on your nationality, the purpose of your visit, and the duration of your stay. Here is some general information about Maldives visas:`}</p>
                <p className='mt-2'>Here are some common types of UAE visas:</p>
                <div className='py-2'>
                    <ul className='pl-3'>
                    {VisaMaldivesData && VisaMaldivesData.map((item) => {
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
                <p className='mt-2 text-justify'>{`Remember that visa regulations can change, so it's essential to verify the most up-to-date information before planning your trip to the Maldives. Additionally, ensure that your passport is valid for at least six months beyond your intended date of departure from the Maldives, and have proof of sufficient funds for your stay.`}</p>
        </>
    )
}