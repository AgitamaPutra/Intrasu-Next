import { AccUSAData } from "@/lib/data/programs/usa/accomodation"

export const AccUSA = () => {
    return (
        <>
            <h1 className='phone:text-2xl lg:text-4xl'>United States <span className='font-black text-green-500'>Accomodation</span></h1>
            <p className='text-justify mt-5'>When you are participating in a J-1 Exchange Visitor Program in the USA, you will need accommodation for the duration of your stay. Here are some common options for J-1 visa holders:</p>
            <div className='py-5'>
                <ul className='pl-10'>
                    {AccUSAData && AccUSAData.map((item, i) => {
                        return <li key={i} className='text-justify list-decimal'><span className='font-bold'>{item.title}</span> {item.val}</li>
                    })}
                </ul>
            </div>
            <p className='text-justify '> {`When looking for accommodation, consider factors such as location, proximity to your school or workplace, transportation options, safety, and cost. It's also a good idea to start your search well in advance to secure suitable housing before your J-1 program begins. Additionally, make sure to understand the terms of your lease or housing agreement and any related financial obligations.`}</p>
        </>
    )
}