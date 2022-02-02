import React, { createContext, useContext, useState } from 'react'
import axios from 'axios'
const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';
export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const cleanUp = () => {
        setResults([]);
    }
    // /videos /search /news / images
    const getResults = async (type) => {
        setIsLoading(true);
        if (type.includes('/Youtube/')) {
            cleanUp();
            const query = type.substring(9);
            const options = {
                method: 'GET',
                url: 'https://youtube-v31.p.rapidapi.com/search',
                params: {
                    q: query,
                    part: 'snippet,id',
                    regionCode: 'US',
                    maxResults: '20',
                    order: 'date'
                },
                headers: {
                    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
                    'x-rapidapi-key': process.env.REACT_APP_API_KEY,
                }
            };
            try {
                const response = await axios.request(options)
                const result = await response.data;
                setResults(result.items);

            } catch (err) {
                console.log(err);

            }
        } else {
            cleanUp();
            try {
                const response = await fetch(`${baseUrl}${type}`, {
                    method: 'GET',
                    headers: {
                        'x-user-agent': 'desktop',
                        'x-proxy-location': 'US',
                        'x-rapidapi-host': 'google-search3.p.rapidapi.com',
                        'x-rapidapi-key': process.env.REACT_APP_API_KEY
                    }
                });
                const data = await response.json();
                if (type.includes('/news')) {
                    setResults(data.entries);
                } else if (type.includes('/images')) {
                    setResults(data.image_results);
                }
                else if (type.includes('/search')) {
                    setResults(data.results);
                }
            }
            catch (err) {
                console.log(err);
            }
        }
        setIsLoading(false);
    }
    return (
        <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading, setResults }} >
            {children}
        </ResultContext.Provider>
    )
}

export const useResultContext = () => useContext(ResultContext);
