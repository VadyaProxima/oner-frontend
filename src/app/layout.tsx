"use client"
import '../Components/styles/index.scss';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Alegreya } from 'next/font/google';
import { Roboto } from 'next/font/google';
import Footer from "@/Components/Footer";
import Header from "@/Components/Header/Header";
import ReactQueryProvider from '@/providers/react-query';
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
                    <main>{children}</main>
                    <Footer />
                </ReactQueryProvider>
            </body> 
        </html>
    );
}

function express() {
  throw new Error('Function not implemented.');
}
