'use client';

import qs from "query-string"

import React, {useEffect, useState} from 'react';
import {useRouter} from "next/navigation";
import useDebounce from "@/hooks/useDebounce";
import Input from "@/app/components/Input";
import {BiSearch} from "react-icons/bi";

const SearchInput = () => {

    const router = useRouter();
    const [value, setValue] = useState<string>("")
    const debouncedValue = useDebounce<string>(value, 500);

    useEffect(() => {
        const query = {
            title: debouncedValue,
        };

        const url = qs.stringifyUrl({
            url: "/search",
            query: query,
        });

        router.push(url);

    }, [debouncedValue, router]);

    return (
        <div className='flex items-center'>
            <Input
                placeholder="Search a Song"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className='rounded-full w-full'
            />
            <BiSearch className=' m-2 text-neutral-400' size={26} />
        </div>
    );
};

export default SearchInput;