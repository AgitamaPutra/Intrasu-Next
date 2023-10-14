import { Service } from "@/lib/data/service";
import Image from "next/image";
import Link from "next/link";


export default function ServiceS() {

    return (
        <div className="py-5">
            <div className='grid grid-cols-1 phone:grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 xl:px-24 lg:px-24 md:px-20 sm:p-3 phone:p-3' >
                {Service && Service.map((item, index) => {
                    return (
                        <div className="card bg-white shadow-xl border" key={index} >
                            <div className="text-center card-body" >
                                <div className="w-full items-center">
                                    <Image src={item?.icon} alt={item.title} width={50} height={50} style={{ alignItems: "center", display: "unset" }} />
                                </div>
                                <h2 className="font-bold text-lg my-5 ">{item.title} </h2>
                                <p >{item.keterangan}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="text-center justify-center pt-20 pb-5">
                <p className="text-4xl font-bold mb-5">Our Most Popular Programs</p>
                <p className="p-5">The J-1 Visa provides countless opportunities for international candidates looking to travel and gain experience in the United States.</p>
            </div>
            <div className="text-center justify-center pb-5 pt-5">
                <p className="text-4xl font-bold mb-5">Be in Demand with Our Professional Training</p>
                <p className="p-5">With the J-1 visa, students and graduates can complete a cultural exchange program in the USA for up to 12 months by participating in an internship.</p>

            </div>

            <div className="text-center justify-center pb-12 pt-5">
                <Link href={'/programs/united-states'} className="border p-3 hover:bg-green-500 hover:drop-shadow-lg duration-300 hover:z-10 ease-in font-bold ">
                    {`See More >`}
                </Link>
            </div>
        </div>
    )
}