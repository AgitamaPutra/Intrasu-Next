import { howItWork } from '@/lib/data/howItWork'
import Image from 'next/image'
import React from 'react'

export const USAContent = () => {
    return (
        <div className='flex items-start flex-col'>
            <section id='Overview' className='w-full'>
                <h1 className='phone:text-2xl lg:text-4xl'>United States <span className='font-black text-green-500'>Overview</span></h1>
                <div className='my-8'>
                    <Image className='mx-auto' src={'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNhfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'} alt='usa' width={700} height={700} />
                </div>

                <p className='text-justify'>The J-1 Visa Program in the United States is a cultural exchange program organized by the U.S. government. This program allows foreign nationals to come to the United States with the aim of participating in educational, cultural, and work exchange experiences. Here is a summary of the J-1 Visa Program in the United States:</p>
                <div className='py-5'>
                    <span>1. Program Purpsoe :</span>
                    <ul className='pl-10'>
                        <li className='text-justify list-disc'>The J-1 Visa Program in the United States aims to promote cultural exchange and international understanding by providing participants with opportunities to learn, teach, conduct research, or engage in training programs in the United States.</li>
                    </ul>
                    <span>2. Participant Categories :</span>
                    <ul className='pl-10'>
                        <li className='text-justify list-disc'>The J-1 Visa Program encompasses various participant categories, including exchange students, interns, teachers, researchers, and temporary workers.</li>
                        <li className='text-justify list-disc'>Participants come to the United States under the sponsorship of specific program sponsors, who provide logistical and administrative support during their stay.</li>
                    </ul>
                    <span>3. Program Duration :</span>
                    <ul className='pl-10'>
                        <li className='text-justify list-disc'>The duration of the program varies depending on the category and type of program the participant is enrolled in. For example, exchange students may stay for one academic year, while intern participants may have shorter time limits.</li>
                    </ul>
                    <span>4. Restrictions and Requirements :</span>
                    <ul className='pl-10'>
                        <li className='text-justify list-disc'>J-1 Visa participants must comply with the rules and regulations set by their program sponsors.</li>
                        <li className='text-justify list-disc'>They are also expected to return to their home country after completing their program and are not allowed to seek permanent employment in the United States during their J-1 visa period.</li>
                    </ul>
                    <span>5. Exchange Visitor Program :</span>
                    <ul className='pl-10'>
                        <li className='text-justify list-disc'>The J-1 Visa Program is part of the Exchange Visitor Program, managed by the U.S. Department of State. This program comprises more than 15 different program categories that facilitate exchanges in various fields.</li>
                    </ul>
                    <span>6. Benefits :</span>
                    <ul className='pl-10'>
                        <li className='text-justify list-disc'>The J-1 Visa Program provides participants with the opportunity to enhance their skills, gain international experience, and understand American culture.</li>
                        <li className='text-justify list-disc'>{`It also enables the exchange of knowledge and understanding between the United States and the participant's home country.`}</li>
                    </ul>
                    <span>7. Visa Requirements :</span>
                    <ul className='pl-10'>
                        <li className='text-justify list-disc'>Participants must apply for a J-1 visa through the U.S. Embassy or Consulate in their home country and follow the procedures established by their program sponsor.</li>
                    </ul>
                    <span>8. Program Sponsorship :</span>
                    <ul className='pl-10'>
                        <li className='text-justify list-disc'>The J-1 Visa Program must be pursued through an approved sponsor organization officially designated by the U.S. Department of State.</li>
                    </ul>
                </div>
                <p className='text-justify'>The J-1 Visa Program in the United States is one of the popular ways for foreign nationals to experience life in the United States while contributing to international cultural exchange. Each year, thousands of participants from various countries take part in this program.</p>
            </section>
            <section id='living-there' className='mt-20 w-full '>
                <h1 className='phone:text-2xl lg:text-4xl'>Internship experience in <span className='font-black text-green-500'>United States</span></h1>
                <div className='my-8'>
                    <Image className='mx-auto' src={'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80'} alt='usa' width={700} height={700} />
                </div>
                <p className='text-justify'>{`Experiencing an internship in the USA can be a valuable and enriching opportunity for both personal and professional growth. Here's what you can typically expect from an internship experience in the USA:`}</p>
                <div className='py-5'>
                    <ul className='pl-10'>
                        <li className='text-justify list-decimal'><span className='font-bold'>Diverse Opportunities:</span> The USA offers a wide range of internship opportunities across various industries, from technology and finance to healthcare and entertainment. You can find internships at multinational corporations, startups, non-profit organizations, research institutions, and more.</li>
                        <li className='text-justify list-decimal'><span className='font-bold'>Professional Development: </span> {`Internships in the USA are designed to provide you with practical experience in your field of interest. You'll have the chance to apply what you've learned in a real-world setting, develop new skills, and gain industry-specific knowledge.`}</li>
                        <li className='text-justify list-decimal'><span className='font-bold'>Cultural Exposure:</span> {`Living and working in the USA exposes you to American culture and diverse communities. It's an opportunity to interact with people from various backgrounds and learn about American customs and traditions.`}</li>
                        <li className='text-justify list-decimal'><span className='font-bold'>Networking: </span> {`Internships often come with networking opportunities. You'll meet professionals in your field, attend industry events, and connect with colleagues who may become valuable contacts for your future career.`}</li>
                        <li className='text-justify list-decimal'><span className='font-bold'>Language Skills:</span> {`If English is not your first language, interning in the USA can significantly improve your English language skills. You'll have the chance to practice and enhance your communication abilities, which can be a valuable asset in today's global job market.`}</li>
                        <li className='text-justify list-decimal'><span className='font-bold'>Resume Building:</span> An internship in the USA adds prestige to your resume and can make you more competitive in the job market, both in the USA and internationally. Employers often value the experience gained from working in the American business environment.</li>
                        <li className='text-justify list-decimal'><span className='font-bold'>Cultural Exchange: </span> {`The USA is a diverse country with people from all over the world. You'll have the opportunity to engage with different cultures, try new foods, and explore different regions, which can be an enriching cultural experience.`}</li>
                        <li className='text-justify list-decimal'><span className='font-bold'>Personal Growth:</span> {`Living and working abroad can lead to personal growth and independence. You'll learn to adapt to new environments, overcome challenges, and become more self-reliant.`}</li>
                        <li className='text-justify list-decimal'><span className='font-bold'>Possible Academic Credit: </span> {`Some internships in the USA may offer academic credit, allowing you to gain practical experience while earning credits toward your degree.`}</li>
                        <li className='text-justify list-decimal'><span className='font-bold'>Potential for Future Employment:</span> {`Many companies use internships as a way to evaluate potential future employees. If you perform well during your internship, you may be offered a full-time position after graduation.`}</li>
                    </ul>
                </div>
                <p className='text-justify'>{`To secure an internship in the USA, you typically need to go through an application and interview process. It's important to research potential opportunities, prepare a strong resume and cover letter, and network with professionals in your field. Additionally, you'll need to navigate the visa application process if you're not a U.S. citizen or permanent resident.`}</p>
                <p className='text-justify mt-5'>{`Overall, an internship experience in the USA can be a transformative and valuable step in your education and career journey. It offers a unique chance to gain practical skills, expand your horizons, and build a foundation for future success.`}</p>
            </section>
            <section id='accomodation' className='mt-20 w-full'>
                <h1 className='phone:text-2xl lg:text-4xl'>United States <span className='font-black text-green-500'>Accomodation</span></h1>
                <p className='text-justify mt-5'>When you are participating in a J-1 Exchange Visitor Program in the USA, you will need accommodation for the duration of your stay. Here are some common options for J-1 visa holders:</p>
                <div className='py-5'>
                    <ul className='pl-10'>
                        <li className='text-justify list-decimal'><span className='font-bold'>On-Campus Housing:</span>  If you are a student or scholar affiliated with a university or educational institution, they may offer on-campus housing options. These can range from dormitories to apartments.</li>
                        <li className='text-justify list-decimal'><span className='font-bold'>Off-Campus Housing: </span> {`Many J-1 visa holders choose to rent apartments or houses off-campus. This allows for more independence and privacy. Websites like Zillow, Craigslist, or apartment-hunting apps can help you find suitable options.`}</li>
                        <li className='text-justify list-decimal'><span className='font-bold'>Homestays:</span> {`Some J-1 participants opt for homestays, where they live with an American family. This can provide cultural immersion and a supportive environment.`}</li>
                        <li className='text-justify list-decimal'><span className='font-bold'>Temporary Housing: </span> {` If you need a place to stay temporarily while you search for more permanent accommodation, you can consider extended-stay hotels, hostels, or Airbnb.`}</li>
                        <li className='text-justify list-decimal'><span className='font-bold'>Roommate Matching:</span> {`If you want to share the cost of accommodation, you can look for roommate matching services or websites where you can find potential roommates.`}</li>
                        <li className='text-justify list-decimal'><span className='font-bold'>University International Offices:</span> {`Your university or program sponsor's international office can often provide guidance and resources for finding accommodation.`}</li>
                        <li className='text-justify list-decimal'><span className='font-bold'>Local Community Resources:</span> {`You can check with local community organizations, bulletin boards, or social media groups for housing listings and tips.`}</li>
                    </ul>
                </div>
                <p className='text-justify '> {`When looking for accommodation, consider factors such as location, proximity to your school or workplace, transportation options, safety, and cost. It's also a good idea to start your search well in advance to secure suitable housing before your J-1 program begins. Additionally, make sure to understand the terms of your lease or housing agreement and any related financial obligations.`}</p>
            </section>
            <section id='visa-info' className='mt-20 w-full'>
                <h1 className='phone:text-2xl lg:text-4xl'><span className='font-black text-green-500'>Visa</span> Information</h1>
                <p className='text-justify mt-5'>{`The J-1 Intern category is designed for international students and recent graduates to participate in internship programs in the United States. This program allows individuals to gain practical experience related to their field of study or career goals. Here's some key information about the J-1 Intern program:`}</p>

                <p className='font-bold mt-2'>Eligibility:</p>
                <div className='p-2'>
                    <ul className='pl-10'>
                        <li className='text-justify list-decimal'><span className='font-bold'>Student or Recent Graduate:</span> To be eligible for the J-1 Intern program, you must be either a current student or a recent graduate (within 12 months of your graduation date) from a foreign university or college.</li>
                        <li className='text-justify list-decimal'><span className='font-bold'>Sponsorship:  </span> {`You must be accepted into a J-1 Internship program sponsored by an approved U.S. Department of State-designated Exchange Visitor Program sponsor. `}</li>
                        <li className='text-justify list-decimal'><span className='font-bold'>Duration:</span> {`The J-1 Intern program can last for a maximum of 12 months. Some participants may be eligible for program extensions in certain circumstances, but there is a maximum limit.`}</li>
                    </ul>
                </div>

                <p className='font-bold mt-2'>Internship Requirements:</p>
                <div className='p-2'>
                    <ul className='pl-10'>
                        <li className='text-justify list-decimal'><span className='font-bold'>Field of Study:</span> Your internship must be directly related to your field of study or your career objectives.</li>
                        <li className='text-justify list-decimal'><span className='font-bold'>Training Plan:  </span> {`Your program sponsor will help you create a training plan that outlines your learning objectives and the skills you will acquire during your internship.`}</li>
                        <li className='text-justify list-decimal'><span className='font-bold'>Supervision:</span> {`You will have a designated supervisor at your host organization who will provide guidance and oversight during your internship.`}</li>
                    </ul>
                </div>

                <p className='font-bold mt-2'>Work Authorization:</p>
                <div className='p-2'>
                    <ul className='pl-10'>
                        <li className='text-justify list-decimal'><span className='font-bold'>Employment Authorization: </span> J-1 Interns are authorized to work in the United States during their internship. The employment is typically full-time, but part-time internships may be allowed in certain cases.</li>
                        <li className='text-justify list-decimal'><span className='font-bold'>No Secondary Employment:</span> {`J-1 Interns are generally not permitted to have a second job or engage in any employment that is not part of their internship program.`}</li>
                    </ul>
                </div>

                <p className='font-bold mt-2'>Cultural Exchange:</p>
                <div className='p-2'>
                    <ul className='pl-10'>
                        <li className='text-justify list-decimal'>The J-1 Intern program emphasizes cultural exchange, and participants are encouraged to engage in cultural and educational activities to enhance their understanding of American culture and society.</li>
                        <li className='text-justify list-decimal'>J-1 Interns can travel and explore the United States during their program, but they must comply with the program rules and maintain their training and educational objectives.</li>
                    </ul>
                </div>

                <p className='font-bold mt-2'>Insurance Requirement:</p>
                <div className='p-2'>
                    <ul className='pl-10'>
                        <li className='text-justify list-decimal'>J-1 Interns are required to have health insurance coverage that meets specific minimum requirements throughout the duration of their program.</li>
                    </ul>
                </div>

                <p className='font-bold mt-2'>Two-Year Home Residency Requirement:</p>
                <div className='p-2'>
                    <ul className='pl-10'>
                        <li className='text-justify list-decimal'>Some J-1 Interns may be subject to the two-year home residency requirement, which means they must return to their home country or country of last residence for two years before being eligible for certain other U.S. immigration benefits.</li>
                    </ul>
                </div>

                <p className='text-justify'>{`It's important to work closely with your program sponsor to ensure that you meet all program requirements and that your internship aligns with your educational and career goals. Additionally, it's advisable to familiarize yourself with the specific regulations and guidelines provided by the U.S. Department of State and consult with your program sponsor for any questions or concerns related to your J-1 Intern program.`}</p>
            </section>
            <section id='our-process' className='mt-20 w-full'>
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
            </section>
            <section id='program-fee' className='w-full mt-20' >
                <h1 className='phone:text-2xl lg:text-4xl'>Program <span className='font-black text-green-500'>Fee $7000</span></h1>

            </section>
        </div>
    )
}
