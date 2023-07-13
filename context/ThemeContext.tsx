'use client'

import { createContext, useState } from "react";
import { ChildComponents } from "@/interfaces/ChildComponents";
import ThemeCon from "@/interfaces/ThemeCon";

export const ThemeContext = createContext<ThemeCon | null>(null);

const ThemeContextProvider = ({ children }: ChildComponents) => {

    const [theme, setTheme] = useState('light');

    const changeTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    }

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;