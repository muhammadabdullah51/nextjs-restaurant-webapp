"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/userSlice";
import Link from "next/link";

const Verify = () => {
    const [url, setUrl] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/data', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ url }),
            });
            const data = await response.json();
            console.log(data)
            if (response.ok) {
                dispatch(setUser(data)); // Store user data in Redux
                router.push('/home'); // Redirect to the main page
            } else {
                console.error(data.message);
                setError(data.message)
            }
        } catch (err: unknown) {
            // setError(err)
            console.error('Error:', err);
        }
    };

    return (
        <>
            <div className="h-screen md:flex " >
                <div
                    className="relative overflow-hidden md:flex w-1/2 bg-[url('https://images.pexels.com/photos/31285170/pexels-photo-31285170/free-photo-of-bartender-mixing-drinks-in-dimly-lit-bar.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center justify-around items-center hidden"
                >
                    <div>
                        <h1 className="text-white font-bold text-4xl font-sans">Restaurant</h1>
                        <p className="text-white mt-1">Your Own Restaurant Website</p>
                        <button type="submit" className="block w-28 bg-white text-black mt-4 py-2 rounded-2xl font-bold mb-2">
                            <Link href="https://axixtechnologies.com/contact/">Contact Us</Link></button>
                    </div>
                    <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                    <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                    <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                    <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                </div>
                <div className="flex md:w-1/2 justify-center py-10 items-center bg-white ">
                    <form className="bg-white" onSubmit={(handleSubmit)}>
                        <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
                        <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>

                        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                            </svg>
                            <input className="pl-2 outline-none border-none text-black" type="text" name="url" id="url" value={url}
                                onChange={(e) => setUrl(e.target.value)}
                                placeholder="Website URL" />
                        </div>
                        <button type="submit" className="block w-full bg-[#54595F] hover:bg-[#121314] text-white px-6 py-3 font-semibold transition rounded-2xl  mb-2">Verify</button>
                        {error && <p className="mt-4 text-red-500">{error}</p>}
                    </form>
                </div>
            </div>
        </>

    )
};

export default Verify;
