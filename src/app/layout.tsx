"use client"

import '../Components/styles/index.scss';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Alegreya } from 'next/font/google';
import { Roboto } from 'next/font/google';
import Footer from "@/Components/Footer";
// import type { Metadata } from "next";
import Header from "@/Components/Header/Header";
// import Footer from '@/components/Footer';
// import Header from '@/components/Header';
import ReactQueryProvider from '@/providers/react-query';

const alegreya = Alegreya({
    subsets: ['cyrillic'],
    variable: '--font-alegreya',
    display: 'swap',
});

const roboto = Roboto({
    subsets: ['cyrillic'],
    weight: ['400', '700'],
    variable: '--font-roboto',
    display: 'swap',
});

// export const metadata: Metadata = {
//     title: "Интернет Магазин",
//     description: "Проект 1",
// };
const queryClient = new QueryClient();
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html>
            <body className="wrapper">
                <QueryClientProvider client={queryClient}>
                    <Header />  
                    <main>{children}</main>
                    {/* <Footer /> */}
                </QueryClientProvider>
            </body>
        </html>
    );
}

function express() {
  throw new Error('Function not implemented.');
}
