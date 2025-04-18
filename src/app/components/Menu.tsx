"use client"
import Link from 'next/link';
import React from 'react';
import { useSelector } from "react-redux";


interface UserState {
    paragraphs: string;
    [key: string]: string | number | boolean | undefined; // Allow any additional properties
}


const MenuSection: React.FC = () => {

    const user = useSelector((state: { user: UserState }) => state.user);
    const paragraphs = user?.paragraphs?.[user?.paragraphs?.length - 1] ?? [
        "Donec vehicula vulputate hendrerit. Phasellus dictum vitae augue non aliquet. Aenean sodales magna ac ipsum sollicitudin, id eleifend lorem dapibus. Suspendisse id posuere ex",
    ];
    return (
        <div className="w-full border-t border-[#c9bcb3] py-5 px-5" id='menu'>
            <div className="w-full flex flex-col lg:flex-row gap-4 lg:gap-2">



                <div
                    className="flex-1 bg-cover bg-center md:h-auto bg-no-repeat  text-[#143642] py-100 flex flex-col md:flex-row relative  bg-[url('https://websitedemos.net/flavio-restaurant-07/wp-content/uploads/sites/1244/2022/12/bg-004.jpg')] "
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black flex items-end p-18">
                        <h4 className="text-white text-5xl">DINING MENU</h4>
                    </div>
                </div>
                <div
                    className="flex-1 bg-cover bg-center md:h-auto bg-no-repeat  text-[#143642] py-100 flex flex-col md:flex-row relative  bg-[url('https://websitedemos.net/flavio-restaurant-07/wp-content/uploads/sites/1244/2022/12/bg-005.jpg')]"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black flex items-end p-18">
                        <h4 className="text-white text-5xl">DESSERT MENU</h4>
                    </div>
                </div>



                {/* Info Box */}
                <div className="flex-1 bg-[#0d3c4b] text-white flex flex-col justify-center items-end p-8 ">
                    <h2 className="text-8xl text-end leading-tight mb-4 uppercase">
                        Our <br /> Menu
                    </h2>
                    <p className="text-lg text-end mb-6 text-gray-400 w-[70%] menu-msg">{paragraphs}</p>
                    <Link
                        href="#"
                        className="inline-block bg-[#a97959] text-white px-5 py-3 hover:bg-[#815d45] transition max-w-fit"
                    >
                        Explore Menu
                    </Link>
                </div>
            </div>
        </div >
    );
};

export default MenuSection;
