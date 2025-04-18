"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";


interface UserState {
    paragraphs: string;
    [key: string]: string | number | boolean | undefined; // Allow any additional properties
}


const HistorySection: React.FC = () => {
    const user = useSelector((state: { user: UserState }) => state.user);
    const paragraphs = user?.paragraphs ?? [
        " Our story goes back over 25 years ago, when consectetur adipiscing elit. Vestibulum ac commodo nibh, sed finibus velit. Morbi mattis faucibus urna, a imperdiet nisl interdum non. Sed mattis nisl rhoncus, rhoncus erat sit amet, gravida mi. Sed ut augue nunc. Duis tincidunt semper sagittis...",
    ];

    const [selectedParagraph, setSelectedParagraph] = useState("");

    useEffect(() => {
        if (paragraphs.length > 0) {
            const randomIndex = Math.floor(Math.random() * paragraphs.length);
            setSelectedParagraph(paragraphs[randomIndex]);
        }
    }, [paragraphs]);

    const firstSentence = selectedParagraph.split(".")[0] + ".";
    return (
        <div className="w-full border-t border-[#c9bcb3] py-20 px-5" id="history">
            <div className="w-full relative">
                {/* Background Image with overlay */}
                <div className="w-full bg-cover bg-center bg-no-repeat bg-fixed text-[#143642] py-16 md:py-32 px-5 md:px-12 lg:px-18 flex flex-col md:flex-row relative bg-[url('https://websitedemos.net/flavio-restaurant-04/wp-content/uploads/sites/1146/2022/12/bg-0002.jpg')]">

                    {/* Brownish overlay */}
                    <div className="absolute inset-0 bg-[#ecdbcf] opacity-70 mix-blend-multiply"></div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col md:flex-row w-full max-w-6xl gap-10">

                        {/* Divider & Subheading */}
                        <div className="flex flex-col gap-2 w-full md:w-[50%] justify-center">
                            <div className="h-[1px] w-full bg-[#143642]"></div>
                            <h6 className="text-xl md:text-2xl uppercase tracking-wider">
                                How it all started
                            </h6>
                        </div>

                        {/* Main Content */}
                        <div className="flex flex-col gap-8 w-full md:w-[70%]">
                            <div className="flex flex-col gap-2 relative md:-left-20">
                                <h3 className="text-4xl md:text-6xl italic mb-4 welcome-msg">Since 1995</h3>
                                <h2 className="text-5xl md:text-8xl tracking-wide">Our History</h2>
                            </div>

                            <div className="flex flex-col gap-4 ">
                                <h4 className="text-lg md:text-2xl lg:text-4xl leading-snug text-[#143642]">
                                    {firstSentence}
                                </h4>
                                <Link
                                    href="#"
                                    className="inline-block bg-[#a97959] text-white px-5 py-3 hover:bg-[#815d45] transition max-w-fit"
                                >
                                    Our Full History
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HistorySection;
