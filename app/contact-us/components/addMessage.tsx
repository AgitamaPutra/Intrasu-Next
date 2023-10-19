

import { showToastError, showToastSuccess } from '@/lib/function/showToast'
import { message } from 'antd'
import React, { SyntheticEvent, useState } from 'react'

export const AddMessage = () => {

    const [fullName, setFullName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [subject, setSubject] = useState<string>('')
    const [comment, setComment] = useState<string>('')
    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'This is a success message',
        });
    };

    const error = () => {
        messageApi.open({
            type: 'error',
            content: 'This is an error message',
        });
    };
    async function handleSubmit(e: SyntheticEvent) {
        e.preventDefault()
        const req = await fetch('http://localhost:5000/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fullname: fullName,
                email: email,
                subject: subject,
                comment: comment
            })
        })
        if (req.status === 201) {
            message.success('Berhasil mengirim pesan!')
            setFullName('')
            setEmail('')
            setSubject('')
            setComment('')
        } else {
            message.error("Gagal mengirim pesan!");
        }

    }

    return (
        <form onSubmit={handleSubmit} action="">
            {contextHolder}
            <div className='card bg-white'>
                <div className='card-body lg:mx-80'>
                    <label>Full Name</label>
                    <input type='text' value={fullName} onChange={(e) => setFullName(e.target.value)} className='bg-gray-50 border border-slate-300 p-2 mb-5' required />

                    <label>Email</label>
                    <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} className='bg-gray-50 border border-slate-300 p-2 mb-5' required />

                    <label>Subject</label>
                    <input type='text' value={subject} onChange={(e) => setSubject(e.target.value)} className='bg-gray-50 border border-slate-300 p-2 mb-5' required />

                    <label >Comment or Message</label>
                    <textarea value={comment} onChange={(e) => setComment(e.target.value)} className='bg-gray-50 border border-slate-300 p-2 mb-10' required />

                    <button type='submit'>Submit</button>
                </div>
            </div>
        </form>
    )
}
