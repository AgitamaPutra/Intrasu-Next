
import { VisaFranceData } from "@/lib/data/programs/france/visa"

export const VisaFrance = () => {
    return (
        <>
            <h1 className='phone:text-2xl lg:text-4xl'><span className='font-black text-green-500'>Visa</span> Information</h1>
            {VisaFranceData && VisaFranceData.map((item, i) => {
                return <p key={i} className='text-justify mt-5'>{item.desc}</p>
            })}
        </>
    )
}