"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";


interface UserState {
    paragraphs: string;
    [key: string]: string | number | boolean | undefined; // Allow any additional properties
}


const About = () => {
    const user = useSelector((state: { user: UserState }) => state.user);
    const paragraphs = user?.paragraphs[0] ?? [
        "Donec vehicula vulputate hendrerit. Phasellus dictum vitae augue non aliquet. Aenean sodales magna ac ipsum sollicitudin, id eleifend lorem dapibus. Suspendisse id posuere ex. Vestibulum tempus elementum tortor a convallis. Nam mattis ultricies tincidunt. Ut quis viverra lorem, vitae sagittis sapien. Nam lacinia consequat est sollicitudin aliquam. Etiam id elit malesuada, vehicula arcu at, pellentesque leo.",
    ];


    return (
        <section className="flex flex-col md:flex-row mt-[87.3vh] px-5 border-t border-[#c9bcb3]">
            {/* Left Column */}
            <div className="w-full md:w-[30%] bg-white px-5 md:px-10 lg:px-18 flex flex-col justify-center gap-10 py-10 border md:border-y-0 md:border-r border-[#c9bcb3]">
                <div>
                    <h2 className="text-5xl md:text-7xl xl:text-8xl mb-4 leading-snug text-[#143642]">
                        About
                        <br />
                        Us
                    </h2>
                    <p className="text-gray-700 mb-6 leading-relaxed text-sm md:text-base menu-msg">
                        {paragraphs}
                    </p>
                </div>
                <Link
                    href="#"
                    className="inline-block w-auto max-w-fit bg-[#a97959] text-white px-8 py-3 hover:bg-[#815d45] transition"
                >
                    Read More
                </Link>
            </div>

            {/* Right Column: Image */}
            <div className="w-full md:w-[70%] py-5 md:py-10 pl-0 md:pl-5">
                <div className="bg-[url('https://websitedemos.net/flavio-restaurant-04/wp-content/uploads/sites/1146/2022/12/bg-07.jpg')] bg-black p-3 md:p-5 flex flex-col md:flex-row gap-5">
                    {/* Left spacer box */}
                    <div className="w-full md:w-1/2 h-40 md:h-auto"></div>
                    {/* Image */}
                    <div className="w-full md:w-1/2">
                        <Image
                            src="https://websitedemos.net/flavio-restaurant-04/wp-content/uploads/sites/1146/2022/12/bg-06.jpg"
                            alt="Restaurant Interior"
                            width={700}
                            height={300}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
