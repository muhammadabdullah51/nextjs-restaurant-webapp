"use client"
// import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "react-redux";
import store from "@/store";
import GoogleTranslateWidget from "./components/GoogleTranslateWidget";
import Head from "next/head";
import { Alex_Brush, Bebas_Neue, Noto_Sans } from 'next/font/google';

const alexBrush = Alex_Brush({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-alex-brush'
});

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas-neue'
});

const notoSans = Noto_Sans({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-noto-sans'
});




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Bebas+Neue&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Special+Gothic+Expanded+One&display=swap" rel="stylesheet" />
      </Head>
      <body className={`${alexBrush.variable} ${bebasNeue.variable} ${notoSans.variable} antialiased`}>
        <GoogleTranslateWidget />

        <Provider store={store}>

          {children}
        </Provider>
      </body>
    </html >
  );
}
