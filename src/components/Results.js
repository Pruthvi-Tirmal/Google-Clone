import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { useResultContext } from '../contexts/ResultContextProvider';
import { Loading } from './Loading';
const Results = () => {
    const { results, isLoading, getResults, searchTerm, setResults } = useResultContext();
    const location = useLocation();
    useEffect(() => {
        if (searchTerm) {
            if (location.pathname === '/videos') {
                getResults(`/Youtube/${searchTerm}`);
            } else {
                getResults(`${location.pathname}/q=${searchTerm}&num=50`)
            }
        }
        return () => {
            setResults([]);  //cleanUp function 
        }

    }, [searchTerm, location.pathname])


    if (isLoading) return <Loading />
    // switch statement for sending the results like news image or video
    // location.pathname will be the condition in switch 
    switch (location.pathname) {
        case '/search':
            return (
                <div className="flex flex-col space-y-6 sm:px-20 sm:pl-24">
                    {/* ?. ==> is call as optional chaining for more read mozilla docs */}
                    {results?.map(({ link, title, description }, index) => {
                        return (
                            <div key={index} className="w-full">
                                <a href={link} target="_blank" rel="noreferrer">
                                    <p className="text-sm">
                                        {link && link.length > 30 ? link.substring(0, 30) : link}
                                    </p>
                                    <p className="text-lg hover:underline  dark:text-blue-400 text-blue-700">
                                        {title}
                                    </p>
                                </a>
                                <p className="text-lg text-gray-800 dark:text-white w-75 font-sans">
                                    {description && description.length > 150 ? description.substring(0, 147) + "..." : description}
                                </p>
                            </div>)
                    })}
                </div>
            )
        case '/images':
            return (
                <div className='flex flex-wrap justify-center items-center'>
                    {
                        results?.map(({ image, link }, index) => (
                            <a className='sm:p-3 p-5' href={link && link.href} key={index} target="_blank" rel="noreferrer">
                                <img src={image?.src} alt={link && link.title} loading='lazy' />
                                <p className='w-40 break-words text-sm mt-2 '>
                                    {link && link.title}
                                </p>
                            </a>
                        ))
                    }
                </div>
            )
        case '/news':
            return (
                <div className="flex flex-col space-y-6 sm:px-36">
                    {results?.map(({ links, source, title }, index) => {
                        return (
                            <div key={index} className="w-full">
                                <a href={links?.[0] && links?.[0].href} target="_blank" rel="noreferrer" className='hover:underline'>
                                    <p className="text-lg hover:underline  dark:text-blue-400 text-blue-700">
                                        {title}
                                    </p>
                                </a>
                                <div className='grid gap-4'>
                                    <a href={source?.href} target="_blank" rel='noreferrer' className='hover:underline' >
                                        {source?.href}
                                    </a>
                                </div>
                            </div>)
                    })}
                </div>
            )
        case '/videos':
            return (
                <div className='flex flex-wrap justify-center items-center'>
                    {
                        results?.map((video, index) => (
                            <div key={index} className='p-3'>
                                <ReactPlayer url={`https://www.youtube.com/watch?v=${video.id && video.id.videoId}`} controls width="300px" height="250px" />
                            </div>
                        ))
                    }
                </div>

            )
        default:
            return (
                <div className='p-3 mx-auto text-center mt-10 shadow-md'>
                    <h1 className='font-bold text-2xl'>ERROR 404</h1>
                </div>
            )

    }

}

export default Results
