import { howItWork } from "@/lib/data/howItWork"
import Image from "next/image"


export const ProgramProccess = () => {
    return (
        <>
            <h1 className='phone:text-2xl lg:text-4xl'>Our <span className='font-black text-green-500'>Process</span></h1>
            <div className='mt-10'>
                {howItWork && howItWork.map((item, index) => {
                    return (
                        <div key={index} className='flex'>
                            <div className="mx-auto text-center items-center w-[20%] mt-5">
                                <Image src={item?.icon} alt={item.title} width={50} height={50} style={{ alignItems: "center", display: "unset" }} />
                                <p className="text-2xl text-green-500 rotate-90 mt-20">{item.arrowRight}</p>
                            </div>
                            <div className="sm:py-3 phone:py-3 w-[80%]" key={index} >
                                <div className="" >
                                    <h2 className="font-bold text-lg ">{item.title} </h2>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                            <br />
                        </div>
                    )
                })}
            </div>
        </>
    )
}