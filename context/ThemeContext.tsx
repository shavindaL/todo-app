'use client'

import { createContext, useState } from "react";
import { ChildComponents } from "@/interfaces/ChildComponents";

interface ThemeCon {
    theme: string;
    changeTheme: () => void;
}

export const ThemeContext = createContext<ThemeCon | null>(null);

const ThemeContextProvider = ({ children }: ChildComponents) => {

    const [theme, setTheme] = useState('light');

    const changeTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
        console.log(theme);

    }

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;