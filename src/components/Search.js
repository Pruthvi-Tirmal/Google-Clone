import React, { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'
import { useResultContext } from '../contexts/ResultContextProvider';
import Links from './Links'
const Search = () => {
    const { setSearchTerm, searchTerm } = useResultContext();
    const [text, setText] = useState(searchTerm);
    const [debouncedValue] = useDebounce(text, 300);
    useEffect(() => {
        if (debouncedValue) setSearchTerm(debouncedValue);
    }, [debouncedValue])
    return (
        <div className='flex justify-center items-center w-full flex-col mb-8 mt-5 relative'>
            <div className='p-4 sm:w-10/12 w-90 h-30 rounded-full shadow-md flex items-center justify-between dark:shadow-google text-xl outline-none relative dark:bg-DarkBg dark:text-white'>
                <input type="text" name="text" id="" autoComplete='off' value={text} className="w-75 outline-none bg-transparent " placeholder='Enter Anything' onChange={(e) => setText(e.target.value)}
                />
                {text && (
                    <button type="button" className="text-2xl absolute text-gray-800 dark:text-white right-14 flex items-center" onClick={() => setText("")}>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                )}
                <div className='w-8 dark:text-white text-gray-800'>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
            </div>
            <Links />
        </div>
    )
}

export default Search
