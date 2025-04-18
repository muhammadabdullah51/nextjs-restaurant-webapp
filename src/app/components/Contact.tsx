"use client"
import Link from 'next/link'
import React from 'react'
const Contact = () => {
    return (
        <div className="w-full border-t border-[#c9bcb3] px-5 " id='contact'>
            <div className="w-full flex flex-col lg:flex-row gap-4 lg:gap-2">
                <div className="w-full bg-cover bg-center bg-no-repeat bg-fixed text-[#143642] py-16 md:py-32 px-5 md:px-12 lg:px-18 flex flex-col md:flex-row relative bg-[url('https://websitedemos.net/flavio-restaurant-07/wp-content/uploads/sites/1244/2022/12/bg-0008.jpg')] ">


                    {/* Content */}
                    <div className="w-full max-w-6xl mx-auto text-center">
                        <h3 className="text-6xl italic mb-4 text-[#A97959] welcome-msg">Reservations</h3>
                        <h1 className="text-8xl  tracking-widest text-[#143642]">Book a table</h1>

                        <form action="" className='flex flex-col w-[80%] mx-auto gap-10 text- mt-10'>
                            {/* Input Fields */}

                            <label className='text-xl text-start  text-gray-500'>Name: *
                                <input type="text" className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-[#A97959] " />
                            </label>
                            <label className='text-xl text-start  text-gray-500'>Phone Number: *
                                <input type="tel" className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-[#A97959] " />
                            </label>
                            <label className='text-xl text-start  text-gray-500'>Number of Persons:
                                <input type="number" className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-[#A97959] " />
                            </label>
                            <label className='text-xl text-start  text-gray-500'>Reservation Day:
                                <input type="text" className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-[#A97959] " />
                            </label>
                            <label className='text-xl text-start  text-gray-500'>Hour:
                                <input type="text" className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-[#A97959] " />
                            </label>
                            <button><Link href="#" className="inline-block bg-[#a97959] text-white px-5 py-3 hover:bg-[#815d45] transition max-w-fit">Book A table</Link></button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact