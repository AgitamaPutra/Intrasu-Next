import Image from 'next/image'
import React from 'react'

export const AboutContents = () => {
  return (
      <div>
          <div className='grid grid-cols-1 phone:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5 lg:p-20 md:p-16 sm:p-5 phone:p-5 '>
              <div className='lg:flex'>
                  <div className='mx-auto'>
                      <Image src={'https://www.intrasu.org/wp-content/uploads/2023/07/CEO.jpg'} alt='test' width={250} height={250} className='rounded-lg shadow-lg' />
                      <p className='lg:text-center mt-3'>Agus Redika - CEO</p>
                  </div>
                  <div className='lg:m-auto mt-10'>
                      <Image src={'https://www.intrasu.org/wp-content/uploads/2023/07/CFO1.jpg'} alt='test' width={250} height={250} className='rounded-lg shadow-lg mx-auto' />
                      <p className='text-center mt-3'>Eka Tresna - CFO</p>
                  </div>
              </div>
              <div className='lg:py-10 lg:pl-10'>
                  <div className='bg-gray-100 p-10 text-justify rounded drop-shadow-lg'>
                      <p className='font-black text-4xl'>Our Story</p>
                      <p>Intrasu Indonesia was born from an aspiration to help students and young professionals to develop their career and be stand out from the peers through an Internship and Training Programs that we design in collaboration with multinational corporations and small medium enterprises in top cities worldwide. Founded by I Putu Arya Agus Redika who has been working and living overseas, advising more than 200 students since 2012 and successfully placing the students in various companies from startup to multinational worldwide.</p>
                  </div>
              </div>
          </div>
          <p className='text-center text-4xl font-black my-20'>Join Our Happy Participants Today!</p>
      </div>
  )
}
