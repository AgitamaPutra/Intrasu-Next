import Apply from '@/asset/how it work/apply.png'
import Interview from '@/asset/how it work/invterview.png'
import PayDeposit from '@/asset/how it work/pay deposit.png'
import Placement from '@/asset/how it work/placement.png'
import FinalPay from '@/asset/how it work/final payment.png'
import Prepare from '@/asset/how it work/prepare.png'

import { BsArrowRight } from 'react-icons/bs'
export const howItWork = [
    {
        icon: Apply,
        title: "1. Apply",
        arrowRight: <BsArrowRight />,
        desc: `Click "Apply Now", fill the form and schedule an interview to discuss your dream internship.`
    },
    {
        icon: Interview,
        title: '2. Interview',
        arrowRight: <BsArrowRight />,
        desc: `During your interview, one of our AIP representatives will ask you questions about your background, past work experiences, internship preferences and goals.`
    },
    {
        icon: PayDeposit,
        title: '3. Pay Deposit',  
        arrowRight: <BsArrowRight />,
        desc: `If you are officially accepted into AIP, you will be asked to confirm your spot in our program with a deposit fee.`
    },
    {
        icon: Placement,
        title: "4. Placement",
        arrowRight: <BsArrowRight />,
        desc: `Our experienced placement team will match you with your ideal host company and arrange an online interview for you with them.`

    },
    {
        icon: FinalPay,
        title: '5. Final Payment',
        arrowRight: <BsArrowRight />,
        desc: `Once your internship has been accepted by yourself and the host company, you will be invoiced for the final payment which will officially confirm your placement.`

    },
    {
        icon: Prepare,
        title: '6. Prepare',
        desc: `Once your internship has been accepted by yourself and the host company, you will be invoiced for the final payment which will officially confirm your placement.`
    },
]