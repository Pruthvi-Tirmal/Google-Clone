import React from 'react'

const Footer = () => {
    return (
        <div className="flex w-full text-gray-500 absolute bottom-0 h-24 flex-col dark:bg-footerBg bg-gray-100  dark:text-footerTextCol">
            <div className='w-full p-3 border-b dark:border-btnBg border-gray-200 '>
                <h2 className="sm:ml-6 sm:text-md">India</h2>
            </div>
            <div className='flex justify-between p-3 items-center '>
                <div className='flex sm:text-sm text-xs items-center md:space-x-6 sm:space-x-4 space-x-2'>
                    <a className='sm:ml-20 hover:underline' href='https://urqr.herokuapp.com/vfYu4Wlg7g'>About</a>
                    <a className='hover:underline' href='https://urqr.herokuapp.com/_uqlhYS-3g'>Adversting</a>
                    <a className='hover:underline' href='https://urqr.herokuapp.com/DKAPnFmYAK'>Business</a>
                    <a className='hover:underline' href='https://urqr.herokuapp.com/iEIg-RjpoJ'>How Search Works</a>
                </div>
                <div className='flex sm:text-sm text-xs items-center md:space-x-6 sm:space-x-4 space-x-2'>
                    <a className='hover:underline' href='https://urqr.herokuapp.com/bsaR5VZLG7'>Privacy</a>
                    <a className='hover:underline' href='https://urqr.herokuapp.com/gUHVZZycnp'>Terms</a>
                    <a className='hover:underline' href='#'>Settings</a>
                </div>
            </div>
        </div>
    )
}

export default Footer