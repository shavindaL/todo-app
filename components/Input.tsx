'use client'
import { ThemeContext } from "@/context/ThemeContext";
import { useContext, useRef } from "react";

const Input: React.FC = () => {
    const context = useContext(ThemeContext);
    const { theme } = context!;

    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <div className="relative h-20 w-1/2 top-16 left-1/4 mobile:left-14 mt-10">
            <div className={`${theme === 'light' ? 'bg-very_light_gray' : 'bg-very_dark_desaturated_blue'} absolute rounded-2xl w-full flex justify-center px-4`}>
                <div className="w-1/12 flex justify-center py-4 px-4">
                    <div className={`w-8 h-8 ${theme === 'light' ? 'bg-very_light_gray border-very_light_grayish_blue' : 'bg-very_dark_desaturated_blue border-very_dark_grayish_blue_dark_hover'} text-lg rounded-full  border-2 hover:cursor-pointer`} />
                    {/* <input type="checkbox" className="w-10 h-10 bg-very_dark_desaturated_blue text-lg rounded-3xl" name="" id="" /> */}
                </div>
                <input type="text" className={` ${theme === 'light' ? 'bg-very_light_gray text-very_dark_desaturated_blue' : 'bg-very_dark_desaturated_blue text-very_light_grayish_blue'} focus:outline-none  ml-30 h-16 w-11/12 rounded-r-2xl caret-cyan-500 text-lg font-regular`} ref={inputRef} onChange={() => {
                    console.log(inputRef.current?.value);
                }}></input>
            </div>
        </div>
    )
}

export default Input;