import React, { useState } from 'react'
import { useResultContext } from './contexts/ResultContextProvider';
import { useLocation } from 'react-router-dom';
import Home from './layout/Home';
import Page from './layout/Page';
const App = () => {
  const location = useLocation();
  const [darkTheme, setDarkTheme] = useState(true)
  const { searchTerm } = useResultContext();
  const uri = location.pathname;
  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className="bg-white  dark:bg-DarkBg overflow-hidden dark:text-white transition-colors min-h-screen relative">
        {searchTerm && uri !== '/' ? (
          <>
            <Page setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
          </>
        ) : (
          <Home darkTheme={darkTheme} />
        )
        }

      </div>
    </div>
  )
}

export default App
