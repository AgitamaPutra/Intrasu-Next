
import { VisaUSAData } from "@/lib/data/programs/usa/visa"

export const VisaUSA = () => {
    return (
        <>
            <h1 className='phone:text-2xl lg:text-4xl'><span className='font-black text-green-500'>Visa</span> Information</h1>
            <p className='text-justify mt-5'>{`The J-1 Intern category is designed for international students and recent graduates to participate in internship programs in the United States. This program allows individuals to gain practical experience related to their field of study or career goals. Here's some key information about the J-1 Intern program:`}</p>
            {VisaUSAData && VisaUSAData.map((item) => {
                return (
                    <>
                        <p className='font-bold mt-2'>{item.title}</p>
                        <div className='p-2'>
                            <ul className='pl-10' >
                                {item.data && item.data.map((item, i) => {
                                    return <li key={i} className='text-justify list-decimal'><span className="font-bold">{item.sub}</span>{item.val}</li>
                                })}
                            </ul>
                        </div>
                    </>
                )
            })}
            <p className='text-justify'>{`It's important to work closely with your program sponsor to ensure that you meet all program requirements and that your internship aligns with your educational and career goals. Additionally, it's advisable to familiarize yourself with the specific regulations and guidelines provided by the U.S. Department of State and consult with your program sponsor for any questions or concerns related to your J-1 Intern program.`}</p>
        </>
    )
}