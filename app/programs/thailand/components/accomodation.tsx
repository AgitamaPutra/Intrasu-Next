import { AccThaiData } from "@/lib/data/programs/thailand/accomodation"


export const AccThai = () => {
    return (
        <>
            <h1 className='phone:text-2xl lg:text-4xl'>Thailand <span className='font-black text-green-500'>Accomodation</span></h1>
            <p className='text-justify mt-5'>Finding suitable accommodation for your internship in Thailand is an important aspect of your planning. Thailand offers a range of options for intern housing. Here are some accommodation options to consider:</p>
            <div className='py-5'>
                <ul className='pl-3'>
                    {AccThaiData && AccThaiData.map((item, i) => {
                        return <li key={i} className='text-justify list-decimal'><span className='font-bold'>{item.title}</span> {item.val}</li>
                    })}
                </ul>
            </div>
            <p className='text-justify '> {`Thailand's accommodation options are diverse, catering to various budgets and preferences. It's advisable to begin your search well in advance of your internship start date to secure suitable housing. Additionally, consider factors such as transportation convenience, local amenities, and proximity to your internship location when making your accommodation choice.`}</p>
        </>
    )
}