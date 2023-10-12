
type Props = {
    heading: string
    message: string
}

export default function Hero({heading, message}: Props) {
    return (
        <div className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img">
            {/* OVERLAY */}
            <div className="absolute top-0 left-0 bottom-0 right-0 bg-black/70 z-[2]" />
            <div className="p-5 text-white z-[2] ">
                <h2 className="lg:text-4xl md:text-3xl sm:text-2xl phone:text-2xl font-bold">{heading}</h2>
                <p className="py-5 lg:text-xl md:text-lg sm:text-md phone:text-md">{message}</p>
                <button className="px-8 py-2 border hover:bg-green-500 hover:drop-shadow-lg hover:duration-300 hover:z-10 hover:ease-in">Apply Now</button>
            </div>
        </div>
    )
}