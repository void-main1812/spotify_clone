import getSongsByTitle from "@/actions/getSongsByTitle";
import Header from "@/app/components/Header";
import SearchInput from "@/app/components/SearchInput";
import SearchContent from "@/app/search/components/SearchContent";

interface searchProps {
    searchParams: {
        title: string;
    }
};

export const revalidate = 0;

const Search = async ({searchParams}: searchProps) => {
    const songs = await getSongsByTitle(searchParams.title);

    return (
        <div
            className='
        bg-neutral-900
        rounded-lg
        h-full
        w-full
        overflow-hidden
        overflow-y-auto
        '
        >
            <Header
                className='
            from-gray-500/50
            '
            >
                <div
                    className='
                mb-2
                flex
                flex-col
                gap-y-6
                '
                >
                    <h1 className='text-white text-3xl font-semibold'>Search</h1>
                    <SearchInput/>
                </div>
            </Header>
            <SearchContent songs={songs} />
        </div>
    )
}

export default Search;