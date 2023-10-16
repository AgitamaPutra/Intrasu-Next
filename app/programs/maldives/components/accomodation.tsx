import { AccMaldivesData } from "@/lib/data/programs/maldives/accomodation"


export const AccMaldives = () => {
    return (
        <>
            <h1 className='phone:text-2xl lg:text-4xl'>Maldives <span className='font-black text-green-500'>Accomodation</span></h1>
            <p className='text-justify mt-5'>Accommodation for interns in the Maldives can vary depending on the specific organization or resort where you are interning. Here are some common types of intern accommodation arrangements you might encounter:</p>
            <div className='py-5'>
                <ul className='pl-3'>
                    {AccMaldivesData && AccMaldivesData.map((item) => {
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
            <p className='text-justify '> {`It's essential to clarify the details of your accommodation with your internship provider or employer before you arrive in the Maldives. Ask about the type of accommodation, whether meals are included, any associated costs, and the location in relation to your workplace. Additionally, consider factors like transportation options and the availability of amenities when choosing your accommodation.`}</p>
        </>
    )
}