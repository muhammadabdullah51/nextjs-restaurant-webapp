"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link"
import { useSelector } from 'react-redux'

interface UserState {
    _id: string;
    company_logo_base64: string;
    company_name: string;
    [key: string]: string | number | boolean | undefined;
}


const NavBar: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const user = useSelector((state: { user: UserState }) => state.user);
    const getImageSrc = (base64: string | undefined | null): string | undefined => {
        if (!base64) return undefined;

        // Return if already a valid data URL
        if (base64.startsWith('data:image/')) {
            return base64;
        }

        // Detect MIME type from Base64 signature
        let mimeType = 'image/png';
        if (base64.startsWith('/9j/')) {
            mimeType = 'image/jpeg';
        } else if (base64.startsWith('iVBORw0KGgo')) {
            mimeType = 'image/png';
        } else if (base64.startsWith('R0lGODlh')) {
            mimeType = 'image/gif';
        } else if (base64.startsWith('UklGR')) {
            mimeType = 'image/webp';
        } else if (base64.startsWith('Qk')) {
            mimeType = 'image/bmp';
        } else if (base64.startsWith('PD94bWwg') || base64.startsWith('PHN2Zy')) {
            mimeType = 'image/svg+xml';
        }

        return `data:${mimeType};base64,${base64}`;
    };
    const imageSrc = getImageSrc(user?.company_logo_base64);

    return (
        <header className="relative w-full z-1 ">

            {/* Optional Overlay */}
            <div className="absolute inset-0 "></div>

            <div className="relative  mx-auto pb-4 py-3">
                <div className="flex items-center justify-between px-10">
                    {/* Mobile Brand */}
                    <div className="md:hidden">
                        <Link href="#" className="text-xl font-bold uppercase">
                            {/* Flavio */}
                            {imageSrc ? (
                                <Image
                                    width={80}
                                    height={100}
                                    src={imageSrc}
                                    alt="Logo"
                                    style={{
                                        filter: 'drop-shadow(0 0 10px white) drop-shadow(0 0 10px black)',
                                    }}

                                // className="w-full"
                                />
                            ) : (
                                <Image
                                    width={80}
                                    height={100}
                                    src="https://websitedemos.net/flavio-restaurant-07/wp-content/uploads/sites/1244/2022/12/logo-regular.png"
                                    alt="Logo"
                                />
                            )}

                        </Link>
                    </div>

                    {/* Hamburger Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden block text-[#143642] focus:outline-none transition-all duration-300 ease-in-out"
                        aria-label="Toggle navigation"
                    >
                        {mobileMenuOpen ? (
                            <FaTimes size={28} className="transition-transform duration-300 ease-in-out" />
                        ) : (
                            <FaBars size={28} className="transition-transform duration-300 ease-in-out" />
                        )}
                    </button>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-6 gap-3">
                        <Link href="#" className="text-xl text-[#a97959] hover:text-[#a97959] transition">
                            Home
                        </Link>
                        <Link href="#menu" className="text-xl text-[#143642] hover:text-[#a97959] transition">
                            Our Menu
                        </Link>
                        <Link href="#history" className="text-xl text-[#143642] hover:text-[#a97959] transition">
                            History
                        </Link>
                        <Link href="#contact" className="text-xl text-[#143642] hover:text-[#a97959] transition">
                            Contact
                        </Link>
                    </nav>


                    {/* Center Logo/Title (Desktop) */}
                    <div className="hidden md:flex flex-col items-center justify-center text-center mt-4 ">
                        {imageSrc ? (
                            <Image
                                width={150}
                                height={100}
                                src={imageSrc}
                                alt="Logo"
                                style={{
                                    filter: 'drop-shadow(0 0 10px white) drop-shadow(0 0 10px black)',
                                }}
                            // className="w-full"
                            />
                        ) : (
                            <Image
                                width={150}
                                height={100}
                                src="https://websitedemos.net/flavio-restaurant-07/wp-content/uploads/sites/1244/2022/12/logo-regular.png"
                                alt="Logo"
                            />
                        )}

                    </div>


                    {/* Desktop Button */}
                    <Link
                        href="#"
                        className="hidden md:inline-block bg-[#a97959] text-white px-5 py-3 hover:bg-[#815d45] transition text-xl"
                    >
                        Make Reservation
                    </Link>
                </div>

            </div>

            {/* Mobile Menu */}
            <div
                id="mobile-menu"
                className={`absolute top-[60px] left-0 w-full bg-[#efe7df] md:hidden ${mobileMenuOpen ? "" : "hidden"
                    }`}
            >
                <nav className="flex flex-col space-y-2 p-4">
                    <Link href="#" className="text-xl text-[#143642] hover:text-[#a97959] transition">
                        Home
                    </Link>
                    <Link href="#" className="text-xl text-[#143642] hover:text-[#a97959] transition">
                        Our Menu
                    </Link>
                    <Link href="#" className="text-xl text-[#143642] hover:text-[#a97959] transition">
                        History
                    </Link>
                    <Link href="#" className="text-xl text-[#143642] hover:text-[#a97959] transition">
                        Contact
                    </Link>
                    <Link
                        href="#"
                        className="inline-block bg-[#a97959] text-white px-4 py-2 hover:bg-[#815d45] transition"
                    >
                        Make Reservation
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default NavBar