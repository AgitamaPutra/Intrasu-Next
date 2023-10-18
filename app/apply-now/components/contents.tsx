import { placeData } from '@/lib/data/place'
import { DatePicker, Form, Input, Radio, Select } from 'antd'
import React from 'react'

export const ApplyContents = () => {
    return (
        <div className='lg:p-20 md:p-16 sm:p-3 phone:p-3'>
            <div>
                <p className='text-justify lg:text-3xl font-bold'>We are delighted that you have expressed an interest in joining our team!</p>
                <p className='my-5'> Before you begin the application process, we would like to draw your attention to some important points:</p>
                <ul className='pl-5'>
                    <li className='text-justify list-decimal'>
                        {`If you're applying for an in-person internship, please note that the minimum age requirement is 18 years.`}
                    </li>
                    <li className='text-justify list-decimal'>
                        {`It is not obligatory to speak the local language when applying for our internships. We welcome applicants from diverse backgrounds and with varying language skills.`}
                    </li>
                    <li className='text-justify list-decimal'>
                        {`Whether you have a degree or prior experience, or not, don't worry. We believe in offering opportunities to individuals from all educational backgrounds and levels of experience.`}
                    </li>
                    <li className='text-justify list-decimal'>
                        {`Please ensure you possess a valid passport, as it is a requirement for participation in our program.`}
                    </li>
                </ul>
                <p className='text-justify mt-5'>{`We appreciate your consideration of our program and eagerly anticipate reviewing your application to help you embark on a rewarding journey with us! Should you have any questions along the way, please don't hesitate to reach out. We are here to support you throughout the process. Best of luck!`}</p>
            </div>

            <div className='grid grid-cols-1 phone:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:p-20 md:p-16 sm:p-3 phone:p-3'>
                {placeData && placeData.map((item,i) => {
                    return (
                        <div className='card' key={i}>
                            <div className='flex bg-slate-200 px-5 py-2 rounded-md'>
                                <div className='rounded-lg'>{item.flag}</div>
                                <span className='my-auto mx-3'>{item.title}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
            
            <div>
                <p className='lg:px-20 md:px-16 sm:p-3 phone:p-3 lg:text-4xl phone:text-2xl'>Personal Information</p>
                <div className='grid grid-cols-1 phone:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5 lg:px-20 md:px-16 sm:p-3 phone:p-3'>
                    <Form.Item >
                        <p>First Name</p>
                        <Input placeholder='Robert'/>
                    </Form.Item>
                    <Form.Item >
                        <p>Last Name</p>
                        <Input placeholder='Hill' />
                    </Form.Item>
                    <Form.Item >
                        <p>Nationality</p>
                        <Select placeholder='Hill' />
                    </Form.Item>
                    <Form.Item >
                        <p>Gender</p>
                        <Radio.Group>
                            <Radio>Mele</Radio>
                            <Radio>Mele</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <div>
                        <p>Phone</p>
                        <div className='grid grid-cols-1 phone:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5 '>
                            <Form.Item >
                                <Select placeholder='Select One' />
                            </Form.Item>
                            <Form.Item >
                                <Input placeholder='123456789' />
                            </Form.Item>
                        </div>
                    </div>
                    <Form.Item >
                        <p>Email Adress</p>
                        <Input placeholder='Robert@gmail.com' />
                    </Form.Item>
                    <Form.Item>
                        <DatePicker
                            format={"DD-MM-YYYY"}
                            placeholder='Select Date'
                            className='w-full h-10'
                            onChange={(value: any, dateString: string) => (dateString)}
                        />
                    </Form.Item>
                </div>
            </div>

            <div className='lg:px-20 md:px-16 sm:p-3 phone:p-3 '>
                <p className='text-4xl'>Promotions & Conditions</p>

                <p>CV</p>

                <p>Terms & conditions</p>
            </div>
        </div>
    )
}
