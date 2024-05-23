"use client"
import '../Components/styles/index.scss';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Alegreya } from 'next/font/google';
import { Roboto } from 'next/font/google';
import Footer from "@/Components/Footer";
import Header from "@/Components/Header/Header";
import ReactQueryProvider from '@/providers/react-query';
import HeaderMenu from '@/Components/HeaderMenu';
import { FooterFull } from '@/Components/Footer/Footer';
const queryClient = new QueryClient();
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        
        <html lang="ru" >
            <body className="wrapper">
                <ReactQueryProvider >
                    <Header />
                    <HeaderMenu />
                    <main>{children}</main>
                    <FooterFull/>
                </ReactQueryProvider>       
            </body> 
        </html>
    );
}

function express() {
  throw new Error('Function not implemented.');
}
//csca