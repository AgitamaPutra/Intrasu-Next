import { AccDenmarkData } from "@/lib/data/programs/denmark/accomodation"


export const AccDenmark = () => {
    return (
        <>
            <h1 className='phone:text-2xl lg:text-4xl'>Denmark <span className='font-black text-green-500'>Accomodation</span></h1>
            <p className='text-justify mt-5'>Finding accommodation for your internship in Denmark is an important aspect of your planning process. Here are some tips and options to consider when searching for accommodation:</p>
            <div className='py-5'>
                <ul className='pl-3'>
                    {AccDenmarkData && AccDenmarkData.map((item, i) => {
                        return <li key={i} className='text-justify list-decimal'><span className='font-bold'>{item.title}</span> {item.val}</li>
                    })}
                </ul>
            </div>
            <p className='text-justify '> {`Start your accommodation search well in advance of your internship start date, as finding suitable housing can sometimes be competitive, especially in popular cities like Copenhagen and Aarhus. Be proactive, keep an eye on various housing platforms, and be prepared to act quickly when you find a suitable place.`}</p>
        </>
    )
}