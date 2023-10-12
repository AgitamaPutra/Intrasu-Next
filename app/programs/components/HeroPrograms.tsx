
type Props = {
    heading?: string
    message?: string
    bg?: string
    text?: string
}

export default function HeroPrograms({ heading, message, bg, text }: Props) {
    return (
        <div className={`flex items-center justify-center h-[75vh] bg-fixed bg-center bg-cover ${bg}`}>
            {/* OVERLAY */}
            <div className="absolute top-0 left-0 bottom-0 h-[75vh] right-0 bg-black/70 z-[2]" />
            <div className=" text-white z-[2] phone:mx-5 sm:mx-20 md:mx-40 lg:mx-60 ">
                <div className="flex">
                    <p className="lg:text-5xl md:text-3xl sm:text-2xl phone:text-2xl text-center mr-2">{text}</p>
                    <h2 className="lg:text-5xl md:text-3xl sm:text-2xl phone:text-2xl font-bold text-center mx-auto">{heading}</h2>
                </div>
                <p className="py-5 lg:text-xl md:text-lg sm:text-md phone:text-md text-center">{message}</p>
            </div>
        </div>
    )
}