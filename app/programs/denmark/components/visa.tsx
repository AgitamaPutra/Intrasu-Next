
import { VisaDenmarkData } from "@/lib/data/programs/denmark/visa"

export const VisaDenmark = () => {
    return (
        <>
            <h1 className='phone:text-2xl lg:text-4xl'><span className='font-black text-green-500'>Visa</span> Information</h1>
            {VisaDenmarkData && VisaDenmarkData.map((item, i) => {
                return <p key={i} className='text-justify mt-5'>{item.desc}</p>
            })}
        </>
    )
}