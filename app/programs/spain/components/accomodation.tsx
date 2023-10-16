import { AccSpainData } from "@/lib/data/programs/spain/accomodation"


export const AccSpain = () => {
    return (
        <>
            <h1 className='phone:text-2xl lg:text-4xl'>Spain <span className='font-black text-green-500'>Accomodation</span></h1>
            <p className='text-justify mt-5'>Finding accommodation for your internship in Spain is an important step in your preparation process. The availability and cost of accommodation can vary depending on the city or region where your internship is located. Here are some options to consider when looking for accommodation in Spain:</p>
            <div className='py-5'>
                <ul className='pl-3'>
                    {AccSpainData && AccSpainData.map((item, i) => {
                        return <li key={i} className='text-justify list-decimal'><span className='font-bold'>{item.title}</span> {item.val}</li>
                    })}
                </ul>
            </div>
            <p className='text-justify '> {`When searching for accommodation, consider factors such as location, proximity to public transportation, safety, and your budget. It's advisable to start your search well in advance of your internship start date, especially if you're looking for specific types of housing or during peak rental periods. Additionally, be sure to read rental agreements carefully and understand the terms and conditions before signing any contracts.`}</p>
        </>
    )
}