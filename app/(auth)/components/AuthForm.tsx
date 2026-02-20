import React from 'react'
import google from "../../../public/google.png"
import github from "../../../public/github.png"
import Image from 'next/image'
function AuthForm() {
    return (
        <div className="flex gap-3">
            <button className='bg-[#0a192b] w-full text-center text-white px-4 py-2 rounded-md flex items-center justify-center gap-2'>
                <Image src={google} alt="logo" width={30} height={30} />
                <span>Login with Google</span>
            </button>
            <button className='bg-[#0a192b] w-full text-center text-white px-4 py-2 rounded-md flex items-center justify-center gap-2'>
                <Image src={github} alt="logo" width={30} height={30} />
                <span>Login with Github</span>
            </button>
        </div>
    )
}

export default AuthForm