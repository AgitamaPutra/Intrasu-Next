import { COOKIE_NAME } from '@/app/constanst'
import { serialize } from 'cookie'
import {sign} from "jsonwebtoken"
import { NextResponse } from "next/server"

const MAX_AGE = 60 * 60 * 24 * 30 // days   


export async function POST(request: Request) {
    const body = await request.json()

    const {email , password} = body

    if (email !== "admin@gmail.com" || password !== 'admin') {
        return NextResponse.json(
            {
                message: "Unauthorized"
            },
            {
                status: 401,
            }
        )
    }

    const secret = process.env.JWT_SECRET || ""

    const token = sign(
        {
            email,
        },
        secret,
        {
            expiresIn: MAX_AGE,
        }
    )

    const seralized = serialize(COOKIE_NAME, token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: MAX_AGE,
        path: '/'
    })

    const response = {
        message: "Authenticated!"
    }

    return new Response(JSON.stringify(response), {
        status: 200,
        headers: { "Set-Cookie" : seralized}
    })
}