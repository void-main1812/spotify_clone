'use client'

import React from 'react';
import {Song} from "@/types";
import MediaItem from "@/app/components/MediaItem";
import LikedButton from "@/app/components/LikedButton";
import {BsPauseFill, BsPlayFill} from "react-icons/bs";
import {AiFillStepBackward, AiFillStepForward} from "react-icons/ai";
import {HiSpeakerWave, HiSpeakerXMark} from "react-icons/hi2";
import Slider from "@/app/components/Slider";

interface PlayerContentProps {
    song: Song;
    songUrl: string;
}

const PlayerContent: React.FC<PlayerContentProps> = ({song, songUrl}) => {

    const Icon = true ? BsPauseFill : BsPlayFill;
    const VolumeIcon = true ? HiSpeakerXMark : HiSpeakerWave;

    return (
        <div className='
        grid
        grid-cols-2
        md:grid-cols-3
        h-full
        '>
            <div className='
            flex
            w-full
            justify-start
            '>
                <div className='
                flex
                items-center
                gap-x-4
                '>
                    <MediaItem data={song}/>
                    <LikedButton songId={song.id}/>
                </div>
            </div>
            <div
                className='
            flex
            md:hidden
            col-auto
            w-full
            justify-end
            items-center
            '
            >
                <div
                    onClick={() => {
                    }}
                    className='
                h-10
                w-10
                flex
                items-center
                justify-center
                rounded-full
                bg-white
                p-1
                cursor-pointer
                '
                >
                    <Icon size={30} className='text-black'/>
                </div>
            </div>
            <div
                className='
            hidden
            h-full
            md:flex
            juctify-center
            items-center
            w-full
            max-w-[772px]
            gap-x-6
            '
            >
                <AiFillStepBackward
                    onClick={() => {
                    }}
                    size={30}
                    className='
                   text-neutral-400
                   cursor-pointer
                   hover:text-white
                   transtion
                   '
                />
                <div
                    onClick={() => {
                    }}
                    className='
                    flex
                    items-center
                    justify-center
                    h-10
                    w-10
                    rounded-full
                    bg-white
                    p-1
                    cursor-pointer
                    '
                >
                    <Icon size={30} className='text-black'/>
                </div>
                <AiFillStepForward
                size={30}
                onClick={() => {}}
                className='text-neutral-400 cursor-pointer hover:text-white transtion'
                />
            </div>
            <div
            className='
            hidden
            md:flex
            w-full
            justify-end
            pr-2
            '
            >
                <div
                className='
                flex
                items-center
                gap-x-2
                w-[120px]
                '
                >
                    <VolumeIcon
                    onClick={() => {}}
                    size={34}
                    className='cursor-pointer'
                    />
                    <Slider/>
                </div>
            </div>
        </div>
    );
};

export default PlayerContent;