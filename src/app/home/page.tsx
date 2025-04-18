"use client"
import React from 'react'
import Banner from '../components/Banner'
import About from '../components/About'
import HistorySection from '../components/HistorySection'
import MenuSection from '../components/Menu'
import Special from '../components/Special'
import Contact from '../components/Contact'
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface UserState {
    company_name: string;
    hero_section: string;
    paragraphs: string;
    [key: string]: string | number | boolean | undefined; // Allow any additional properties
}

const Home = () => {

    const user = useSelector((state: UserState) => state.user);
    const router = useRouter();
    useEffect(() => {
        if (!user) {
            router.push('/');
        }
    }, [user, router]);

    return (
        <>
            <Banner />
            <About />
            <HistorySection />
            <MenuSection />
            <Special />
            <Contact />
        </>
    )
}

export default Home