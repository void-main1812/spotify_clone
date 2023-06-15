import './globals.css'
import {Figtree} from 'next/font/google'
import React from "react";
import Sidebar from "@/app/components/Sidebar";

const font = Figtree({subsets: ['latin']})

export const metadata = {
    title: 'Groove-box',
    description: 'A spot where whole world can grooves',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={font.className}>
        <Sidebar>
            {children}
        </Sidebar>
        </body>
        </html>
    )
}
