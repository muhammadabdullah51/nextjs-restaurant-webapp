"use client"
import Image from 'next/image'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import React from 'react'
import Link from 'next/link';
import { useSelector } from 'react-redux'

interface UserState {
    _id: string;
    company_logo_base64: string;
    company_name: string;
    [key: string]: string | number | boolean | undefined;
}


const FooterSection = () => {

    const user = useSelector((state: { user: UserState }) => state.user);
    const cmpName = user?.company_name;
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
        <>
            <div className="w-full border-t border-[#c9bcb3] px-5">
                <div className="w-full relative">
                    {/* Background Image with overlay */}
                    <div className="w-full bg-white text-[#143642] py-16 md:py-16 px-5 md:px-12 lg:px-18 flex flex-col md:flex-row')] ">
                        <Link href="#" className="text-xl font-bold uppercase mx-auto">
                            {/* Flavio */}
                            {imageSrc ? (
                                <Image
                                    width={80}
                                    height={100}
                                    src={imageSrc}
                                    alt="Logo"
                                    className="w-3xs"
                                    style={{
                                        filter: 'drop-shadow(0 0 10px white) drop-shadow(0 0 10px black)',
                                    }}
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
                        <nav className="flex space-y-2 p-4 justify-center gap-10">
                            <Link href="#" className="text-xl text-[#a97959] hover:text-[#a97959] transition ">
                                Home
                            </Link>
                            <Link href="#" className="text-xl text-[#143642] hover:text-[#a97959] transition ">
                                Our Menu
                            </Link>
                            <Link href="#" className="text-xl text-[#143642] hover:text-[#a97959] transition ">
                                History
                            </Link>
                            <Link href="#" className="text-xl text-[#143642] hover:text-[#a97959] transition ">
                                Contact
                            </Link>

                        </nav>
                        <nav className="flex space-y-2 p-4 justify-center gap-5">
                            <Link href="#" className="text-xl text-[#a97959] hover:text-[#143642] transition ">
                                <FaFacebookF />
                            </Link>
                            <Link href="#" className="text-xl text-[#a97959] hover:text-[#143642]  transition ">
                                <FaInstagram />
                            </Link>
                            <Link href="#" className="text-xl text-[#a97959] hover:text-[#143642]  transition ">
                                <FaTwitter />
                            </Link>



                        </nav>

                    </div>
                </div>
            </div>
            <div className="w-full border-t border-[#c9bcb3] px-5">
                <div className="w-full relative">
                    {/* Background Image with overlay */}
                    <div className="w-full bg-white text-[#143642] py-16 md:py-8 px-5 md:px-12 lg:px-18 flex flex-col md:flex-row')] mb-5">
                        <p className="text-center text-lg md:text-xl">
                            &copy; 2025 {cmpName && cmpName.length > 0 ? cmpName : 'Flavio Restaurant'}. All rights reserved.
                        </p>
                        <p className="text-center text-lg md:text-xl">
                            Powered by {cmpName && cmpName.length > 0 ? cmpName : 'Flavio Restaurant'}.
                        </p>

                    </div>
                </div>
            </div>
        </>
    )
}

export default FooterSection