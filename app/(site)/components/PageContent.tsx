'use client'

import React from 'react';
import {Song} from "@/types";
import {AiOutlineExclamation} from "react-icons/ai";
import SongItem from "@/app/components/SongItem";

interface PageContentProps {
    songs: Song[];
}

const PageContent: React.FC<PageContentProps> = ({songs}) => {
    if (songs.length === 0) {
        return (
            <div className='mt-4 text-neutral-600 justify-center items-center flex text-2xl font-bold '>
                <AiOutlineExclamation size={26}/>
                No songs Available
            </div>
        )
    }
    return (
        <div
            className='
            grid
            grid-cols-1
            sm:grid-cols-3
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-8
            gap-4
            mt-4
            '
        >
            {songs.map((item) => (
                <SongItem
                    key={item.id}
                    onClick={() => {
                    }}
                    data={item}
                />
            ))}
        </div>
    );
};

export default PageContent;