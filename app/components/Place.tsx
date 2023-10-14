import { placeData } from "@/lib/data/place";
import { Service } from "@/lib/data/service";
import Image from "next/image";
import Link from "next/link";


export default function Place() {

    return (
        <div className="py-5">
            <p className="lg:text-4xl md:text-3xl sm:text-2xl phone:text-2xl p-5 text-center ">Where we place our students and participants?</p>
            <div className='grid grid-cols-1 phone:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xl:px-24 lg:px-24 md:px-20 sm:p-5 phone:p-5' >
                {placeData && placeData.map((item, index) => {
                    return (
                        <Link key={index} href={item.href} className="card shadow-xl border w-full xl:h-52 sm:h-40 phone:h-52 text-center justify-center card-body bg-center bg-cover phone:text-3xl lg:text-2xl text-white lg:hover:text-4xl duration-300 ease-in font-bold" style={{ backgroundImage: `url(${item.image})` }}> 
                            <div className="absolute card card-body top-0 left-0 bottom-0 right-0 hover:lg:bg-black/30 z-[2] text-center justify-center sm:bg-black/20 phone:bg-black/20 xl:bg-transparent" >
                                <hr className="border mb-3" />
                                {item.title}
                                <hr className="border mt-3" />
                            </div>
                            </Link>
                    )
                })}
            </div>
        </div>
    )
}