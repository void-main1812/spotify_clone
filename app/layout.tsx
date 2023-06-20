import './globals.css'
import {Figtree} from 'next/font/google'
import React from "react";
import Sidebar from "@/app/components/Sidebar";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import getSongsByUserId from "@/actions/getSongsByUserId";
import Player from "@/app/components/Player";

const font = Figtree({subsets: ['latin']})

export const metadata = {
    title: 'Groove-box',
    description: 'A spot where whole world can grooves',
}

export const revalidate = 0;

export default async function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    const userSongs = await getSongsByUserId();
    return (
        <html lang="en">
        <body className={font.className}>
        <ToasterProvider/>
        <SupabaseProvider>
            <UserProvider>
                <ModalProvider/>
                <Sidebar songs={userSongs} >
                    {children}
                </Sidebar>
                <Player/>
            </UserProvider>
        </SupabaseProvider>
        </body>
        </html>
    )
}
