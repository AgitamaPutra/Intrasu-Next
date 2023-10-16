
import { AccUKData } from "@/lib/data/programs/uk/accomodation"


export const AccUK = () => {
    return (
        <>
            <h1 className='phone:text-2xl lg:text-4xl'>United Kingdom <span className='font-black text-green-500'>Accomodation</span></h1>
            <p className='text-justify mt-5'>Finding accommodation for an internship in the United Kingdom can be a significant part of your planning process. The availability and cost of accommodation can vary depending on the city and region where your internship is located. Here are some tips and options to consider when looking for accommodation:</p>
            <div className='py-5'>
                <ul className='pl-10'>
                    {AccUKData && AccUKData.map((item, i) => {
                        return <li key={i} className='text-justify list-decimal'><span className='font-bold'>{item.title}</span> {item.val}</li>
                    })}
                </ul>
            </div>
            <p className='text-justify '> {`When searching for accommodation, it's crucial to read reviews, check the terms and conditions, and consider factors such as location, safety, and proximity to your internship site. Additionally, start your search well in advance to ensure you have suitable accommodation before your internship begins.`}</p>
        </>
    )
}