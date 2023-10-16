import { AccUAEData, factors } from "@/lib/data/programs/uae/accomodation"


export const AccUAE = () => {
    return (
        <>
            <h1 className='phone:text-2xl lg:text-4xl'>United Arab Emirates <span className='font-black text-green-500'>Accomodation</span></h1>
            <p className='text-justify mt-5'>Accommodation options in the United Arab Emirates (UAE) vary depending on your budget, location, and personal preferences. The UAE, particularly cities like Dubai and Abu Dhabi, offers a wide range of housing choices, from luxury apartments to more budget-friendly options. Here are some common types of accommodations you can find in the UAE:</p>
            <div className='py-5'>
                <ul className='pl-3'>
                    {AccUAEData && AccUAEData.map((item) => {
                        return (
                            <>
                                <li className='text-justify list-decimal'><span className='font-bold'>{item.title}</span> {item.val}</li>
                                <div className='pl-3'>
                                    <ul>
                                        {item.data && item.data.map((item, i) => {
                                            return <li key={i} className='text-justify list-disc'><span className='font-bold'>{item.sub} </span>{item.val}</li>
                                        })}
                                    </ul>
                                </div>
                            </>
                        )
                    })}
                </ul>
            </div>
            <p className='text-justify '> {`When looking for accommodation in the UAE, consider the following factors:`}</p>
            <div className='py-5'>
                <ul className='pl-3'>
                    {factors && factors.map((item,i) => {
                        return <li key={i} className='text-justify list-disc'><span className='font-bold'>{item.title}</span> {item.val}</li>
                        
                    })}
                </ul>
            </div>
            <p className='text-justify'> {`Keep in mind that the cost of living in the UAE can be relatively high, especially in major cities. It's advisable to start your accommodation search well in advance, as housing can be competitive, particularly in sought-after areas.`}</p>
        </>
    )
}