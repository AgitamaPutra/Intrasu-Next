import { Benefit } from "@/lib/data/benefits"
import Image from "next/image"


export default function Benefits() {

    return (    
        <div className="bg-slate-100 py-20">
            <div className='grid grid-cols-1 phone:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 xl:px-24 lg:px-24 md:px-20 sm:p-3 phone:p-3 '>
                {Benefit && Benefit.map((item, index) => {
                    return (
                        <div key={index}  >
                            <div className="text-center" >
                                <div className="w-full">
                                    <Image src={item?.image} alt={item.title} width="200" height="300" style={{ textAlign: "center", width: "100%", height: "200px", borderRadius: "10px" }} />
                                </div>
                                <h2 className="font-bold text-xl my-5 ">{item.title} </h2>
                                <p >{item.keterangan}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}