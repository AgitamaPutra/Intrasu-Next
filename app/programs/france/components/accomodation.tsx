import { AccFranceData } from "@/lib/data/programs/france/accomodation"


export const AccFrance = () => {
    return (
        <>
            <h1 className='phone:text-2xl lg:text-4xl'>France <span className='font-black text-green-500'>Accomodation</span></h1>
            {AccFranceData && AccFranceData.map((item, i) => {
                return <p key={i} className='text-justify mt-5'>{item.desc}</p>
            })}
        </>
        
    
    )
}