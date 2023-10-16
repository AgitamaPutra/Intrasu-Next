
import { PartnerData } from "@/lib/data/partners"
import Image from "next/image"

export default function Partners() {

    return (    
        <div className="bg-slate-100 py-20">
            <p className="text-4xl text-center phone:p-5">Our University <span className="font-black text-green-500">Partners</span></p>
            <p className="text-center justify-center py-10 phone:p-5">{`We're proud to collaborate with globally recognized organizations, diverse small-to-medium enterprises, and innovative startups.`}</p>
            <div className='grid grid-cols-1 phone:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 xl:px-24 lg:px-24 md:px-20 sm:p-3 phone:p-3'>
                {PartnerData && PartnerData.map((item, index) => {
                    return (
                        <div key={index}  >
                            <div className="text-center justify-center" >
                                <div className="w-full">
                                    <Image src={item.image} alt={item.title} width="100" height="100" style={{ textAlign: "center", borderRadius: "10px", width: "150px" }} className="mx-auto grayscale hover:grayscale-0 duration-300 ease-in hover:z-30 hover:drop-shadow-lg"/>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}