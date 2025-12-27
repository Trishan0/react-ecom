import React from 'react'
import { createContext, useState } from 'react'

export const ThemeContext = createContext('light')

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        setTheme((previousTheme) => previousTheme === 'light' ? 'dark' : 'light')
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

