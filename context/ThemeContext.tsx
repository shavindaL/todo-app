'use client'

import { createContext, useState } from "react";
import { ChildComponents } from "@/interfaces/ChildComponents";

export const ThemeContext = createContext<[string, () => void] | null>(null);

const ThemeContextProvider = ({ children }: ChildComponents) => {

    const [theme, setTheme] = useState('light');

    const changeTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
        console.log(theme);

    }

    return (
        <ThemeContext.Provider value={[theme, changeTheme]}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;