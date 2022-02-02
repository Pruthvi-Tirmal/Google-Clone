import React from 'react';
import gridDark from '../images/gridDark.svg'
import gridLight from '../images/gridLight.svg'
const Header = ({ darkTheme }) => {
    return (
        <div className='flex justify-end p-3 items-center'>
            <a className='hover:underline dark:text-current' href="https://urqr.herokuapp.com/WPXCZqxENm">Gmail</a>
            <a className='dark:text-current hover:underline mx-2 ml-4' href="https://urqr.herokuapp.com/gmKvara8Ue">Images</a>
            <div className='w-10 h-10 ml-1  rounded-full dark:hover:bg-gray-700 hover:bg-gray-200 transition cursor-pointer flex justify-center items-center'>
                <img className='h-8' src={darkTheme ? gridLight : gridDark} alt="Apps" />
            </div>
            <div className='ml-1 w-10 h-10 rounded-full dark:hover:bg-gray-700 hover:bg-gray-300 transition cursor-pointer flex justify-center items-center p-1'>
                <img className='h-8 mx-2 rounded-full' src="https://urqr.herokuapp.com/OmOfg7dDaA" alt='user Icon' />
            </div>
        </div>
    );
};

export default Header;
