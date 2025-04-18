"use client"
import React from 'react'
import { useSelector } from "react-redux";


interface UserState {
    company_name: string;
    hero_section: string;
    paragraphs: string;
    [key: string]: string | number | boolean | undefined; // Allow any additional properties
}

const HeroSection = () => {
    const user = useSelector((state: { user: UserState }) => state.user);
    const cmpName = user?.company_name;
    return (
        <section className="mx-5 relative" >
            <div className={`
          flex flex-col items-center justify-center 
          border-b-0 border-solid border-[#c9bcb3]
          shadow-[0px_0px_0_#00000070] 
          bg-no-repeat bg-center bg-cover bg-fixed 
          bg-[url('https://websitedemos.net/flavio-restaurant-07/wp-content/uploads/sites/1244/2022/12/bg-0001.jpg')] 
          bg-clip-padding
          h-[102vh]
          absolute
          -top-35
          border-1
          w-full

        `}>

                <h3 className="text-6xl italic mb-4 text-[#A97959] welcome-msg">Welcome to our</h3>
                <h1 className="text-[12vw]  tracking-widest text-[#143642] leading-[0.8] text-center">{cmpName && cmpName.length > 0 ? cmpName : 'RESTAURANT'}</h1>
            </div>
        </section>
    );
};

export default HeroSection;
