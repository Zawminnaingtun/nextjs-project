import Image from 'next/image'
import React from 'react'
import logo from "../../../public/me.png"
import AuthForm from '../components/AuthForm'

function page() {
    return (
        <div className='flex'>
            <div className="w-1/2 p-10 h-screen mx-auto bg-[#0e1265] space-y-10 flex flex-col justify-center">
                <div className="flex items-center gap-3">
                    <Image
                        src={logo}
                        alt="logo"
                        width={100}
                        height={100}
                    />
                    <h1 className="text-5xl font-bold">Creative <span className="text-[#0070F3]">Coder</span></h1>
                </div>
                <p className='text-gray-300'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quam. Ipsum velit fugiat nobis ad voluptate, aliquam pariatur aliquid. Illo vitae beatae delectus at harum modi ullam placeat officia laboriosam?
                </p>
                <button className='bg-[#0070F3] w-full text-center text-white px-4 py-2 rounded-md'>Login account</button>
            </div>
            <div className="w-1/2 p-10 h-screen mx-auto space-y-10 flex items-center justify-center">
                <div className="w-4/5 space-y-5">
                    <h3 className="text-3xl font-bold">Register to Creative Coder Form</h3>
                    <div className="">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
                    </div>
                    <div className="">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
                    </div>
                    <div className="">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
                    </div>
                    <div className="">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
                    </div>
                    <div className="">
                        <button className='bg-[#0070F3] w-full text-center text-white px-4 py-2 rounded-md'>Register</button>
                    </div>
                    <AuthForm />
                </div>
            </div>
        </div>
    )
}

export default page