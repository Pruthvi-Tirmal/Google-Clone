import React from 'react'
import { Link } from 'react-router-dom'
import googleDarkIcon from '../images/googleLogoDark.png';
import googleLightIcon from '../images/googleLogoLight.png'
import Search from './Search';
const Navbar = ({ setDarkTheme, darkTheme }) => {
    return (
        <>
            <div className="p-5 pb-1 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-btnBg border-gray-300">
                <div className="flex justify-between items-center space-x-5 w-screen">
                    <Link to='/'>
                        <div className="sm:w-32 w-28">
                            <img src={darkTheme ? googleDarkIcon : googleLightIcon} alt="Google Icon" />
                        </div>
                    </Link>
                    <button type="button" title={darkTheme ? `Dark Theme` : `Light Theme`} onClick={() => setDarkTheme(!darkTheme)} className="text-xl dark:bg-DarkBg dark:text-white bg-white px-3 py-2 rounded-lg hover:shadow-md">
                        {darkTheme ? '🌙' : '🌞'}
                    </button>
                </div>
                <Search />
            </div>
            <br />
        </>
    )
}

export default Navbar