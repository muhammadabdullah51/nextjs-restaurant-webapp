"use client"
import React from 'react'
import { useSelector } from "react-redux";


interface UserState {
    paragraphs: string;
    [key: string]: string | number | boolean | undefined; // Allow any additional properties
}


const menuItems = [
    {
        title: "LAMB CHOPS",
        description: "lamb chops, sauce, arugula, cherry tomato, almonds",
        price: "45$"
    },
    {
        title: "GRILLED SALMON",
        description: "salmon, lemon butter sauce, asparagus, baby carrots",
        price: "38$"
    },
    {
        title: "PASTA PRIMAVERA",
        description: "pasta, seasonal vegetables, garlic, olive oil",
        price: "29$"
    },
    {
        title: "BEEF TENDERLOIN",
        description: "beef, truffle mashed potatoes, grilled veggies",
        price: "52$"
    },
    {
        title: "PRIMAVERA SALAD",
        description: "tomatoes, olives, egg, sed, pellentesqu, sit amet, viverra",
        price: "20$"
    }
];

const Special = () => {
    const user = useSelector((state: { user: UserState }) => state.user);
    const paragraphs = user?.paragraphs?.[user?.paragraphs?.length - 2] ?? [
        "Donec vehicula vulputate hendrerit. Phasellus dictum vitae augue non aliquet. Aenean sodales magna ac ipsum sollicitudin, id eleifend lorem dapibus.",
    ];
    return (
        <section className="flex flex-col md:flex-row px-5 border-t border-[#c9bcb3]">
            {/* Left Column */}
            <div className="w-full md:w-[35%] bg-white px-5 md:px-10 lg:px-18 flex flex-col gap-10 py-10 border md:border-y-0 md:border-r border-[#c9bcb3]">
                <div>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl mb-4 leading-tight text-[#143642]">
                        Today’s <br /> Specials
                    </h2>
                    <p className="text-gray-700 mb-6 leading-relaxed text-sm md:text-base">{paragraphs}</p>
                </div>
            </div>

            {/* Right Column */}
            <div className="w-full md:w-[65%] pb-5 pl-0 md:pl-5">
                <div className="relative bg-[url('https://websitedemos.net/flavio-restaurant-07/wp-content/uploads/sites/1244/2022/12/bg-10.jpg')] bg-cover bg-center bg-no-repeat flex flex-col md:flex-row gap-0 md:gap-5 pb-8">

                    {/* Empty space or image side */}
                    <div className="w-full md:w-1/2 h-40 md:h-auto"></div>

                    {/* Menu Items */}
                    <div className="w-full md:w-1/2 bg-[#0d3c4b] text-white flex flex-col justify-between p-18 gap-12">
                        {menuItems.map((item, idx) => (
                            <div
                                key={idx}
                                className="w-full flex justify-between items-start md:items-center gap-3 md:gap-0"
                            >
                                <div className="flex-1">
                                    <h2 className="text-xl font-semibold uppercase mb-1">{item.title}</h2>
                                    <p className="text-sm md:text-base text-gray-400 menu-msg w-[90%]">{item.description}</p>
                                </div>
                                <p className="text-lg md:text-xl text-[#a97959] whitespace-nowrap">{item.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Special
