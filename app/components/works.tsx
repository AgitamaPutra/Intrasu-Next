
import { howItWork } from "@/lib/data/howItWork"
import Image from "next/image"

export default function HowItWork() {

    return (
        <div>
            <div className="py-20">
                <p className="text-4xl text-center phone:p-5">How Does Our Program <span className="font-black text-green-500">Function?</span></p>
                <div className='grid grid-cols-1 phone:grid-cols-1 sm:grid-cols-1 md:grid-cols-11 lg:grid-cols-11 gap-4 mt-20 sm:mt-10 phone:mt-10 py-20 xl:px-32 lg:px-24 md:px-20 sm:p-3 phone:p-3'>
                    {howItWork && howItWork.map((item) => {
                        return (
                            <>
                                <div className="sm:py-3 phone:py-3 text-center"  >
                                    <div className="w-full items-center">
                                        <Image src={item?.icon} alt={item.title} width={50} height={50} style={{ alignItems: "center", display: "unset" }} />
                                    </div>
                                    <h2 className="font-bold text-lg ">{item.title} </h2>
                                </div>
                                <div className="text-center m-auto phone:rotate-90 sm:rotate-90 md:rotate-0">
                                    <span className="mx-auto text-2xl text-green-500 ">{item.arrowRight}</span>
                                </div>
                            </>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}