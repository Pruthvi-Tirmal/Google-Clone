import React from 'react';
import gridDark from '../images/gridDark.svg'
import gridLight from '../images/gridLight.svg'
const Header = ({ darkTheme }) => {
    return (
        <div className='flex justify-end p-3 items-center'>
            <a className='hover:underline dark:text-current' href="https://mail.google.com/mail/u/0/#inbox">Gmail</a>
            <a className='dark:text-current hover:underline mx-2 ml-4' href="https://www.google.co.in/imghp?hl=en&authuser=0&ogbl">Images</a>
            <div className='w-10 h-10 ml-1  rounded-full dark:hover:bg-gray-700 hover:bg-gray-200 transition cursor-pointer flex justify-center items-center'>
                <img className='h-8' src={darkTheme ? gridLight : gridDark} alt="Apps" />
            </div>
            <div className='ml-1 w-10 h-10 rounded-full dark:hover:bg-gray-700 hover:bg-gray-300 transition cursor-pointer flex justify-center items-center p-1'>
                <img className='h-8 mx-2 rounded-full' src="https://www.gravatar.com/avatar/00000000000000000000000000000000" alt='user Icon' />
            </div>
        </div>
    );
};

export default Header;
