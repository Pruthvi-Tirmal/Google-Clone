import React, { useState } from 'react';
import googleDarkIcon from '../images/googleLogoDark.png';
import googleLightIcon from '../images/googleLogoLight.png'
import { useResultContext } from '../contexts/ResultContextProvider'
import { useNavigate } from "react-router-dom";
const PrimarySearch = ({ darkTheme }) => {
    const navigate = useNavigate();
    const [text, setText] = useState('');
    const { setSearchTerm } = useResultContext();
    const handleSubmit = (e) => {
        if (text && e.key === 'Enter') {
            setSearchTerm(text);
            navigate('/search');
        }
    }
    return (
        <div className=' mt-20 flex justify-center items-center flex-col '>
            <img className='md:h-24 h-20 ' src={darkTheme ? googleDarkIcon : googleLightIcon} alt="Google Icon" />
            {/* search */}
            <div className='flex justify-center items-center w-full flex-col mb-8 mt-8 relative'>
                <div className='p-2 dark:hover:bg-btnBg lg:w-2/5 md:w-1/2 shadow-md dark:shadow-google w-90 h-30
                border-gray-300 hover:border-transparent  rounded-full border dark:border-gray-500 flex items-center justify-between  text-xl outline-none relative dark:bg-DarkBg dark:text-white dark:hover:border-transparent'>
                    <input type="text" name="text" id="" autoComplete='off' value={text} className="w-10/12  ml-3 outline-none bg-transparent " onKeyUp={handleSubmit} onChange={(e) => setText(e.target.value)}
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
                <div className='flex justify-between items-center mt-5'>
                    <button className='dark:bg-btnBg px-3 py-2 bg-gray-100 rounded border border-transparent dark:hover:border-gray-500 
                    hover:border-gray-300'>Google Search</button>
                    <button className='dark:bg-btnBg px-3 bg-gray-100 py-2 rounded border border-transparent ml-3  dark:hover:border-gray-500 
                    hover:border-gray-300'>I'm Feeling Lucky</button>
                </div>
                <div className='mt-5 flex justify-center items-center'>
                    <a className='text-sm p-3 text-blue-400 hover:underline' href="https://urqr.herokuapp.com/CnpD4mx6kH">Explore the history of vaccines - from discovery to the latest research</a>
                </div>
            </div>
        </div>);
};

export default PrimarySearch;
