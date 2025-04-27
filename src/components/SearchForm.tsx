import React from 'react';
import SearchFormReset from './SearchFormReset';
import {Search} from "lucide-react";
import Form from "next/form";

const SearchForm = ({query}:{query?:string}) => {
    return (
        <div>
            <Form action='/public' scroll={false}
                  className='max-w-2xl w-full min-h-[80px] bg-white border-[5px] border-black rounded-[80px] text-[24px] mt-8 px-5 search-form flex py-4 '>
                <input name='query' defaultValue={query}
                       className='flex-1 font-bold placeholder:font-semibold placeholder:text-black w-full h-auto outline-none text-black'
                       placeholder='Search Startups'/>
                <div className='flex gap-2'>
                    {query && <SearchFormReset/>}
                    <button type='submit'
                            className='size-[30px] rounded-full bg-black flex justify-center items-center !important text-white'>
                        <Search className='size-5'/>
                    </button>
                </div>
            </Form>

        </div>
    );
};

export default SearchForm;