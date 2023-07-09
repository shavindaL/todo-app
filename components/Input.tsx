'use client'
import { useRef } from "react";

const Input: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <div className="relative h-20 w-1/2 top-16 left-1/4 mt-10">
            <div className="bg-very_dark_desaturated_blue absolute rounded-2xl w-full flex justify-center">
                <div className="w-1/12 flex justify-center py-4">
                    <div className="w-8 h-8 bg-very_dark_desaturated_blue text-lg rounded-3xl border-very_dark_grayish_blue_dark_hover border-2 hover:cursor-pointer"></div>
                    {/* <input type="checkbox" className="w-10 h-10 bg-very_dark_desaturated_blue text-lg rounded-3xl" name="" id="" /> */}
                </div>
                <input type="text" className=" bg-very_dark_desaturated_blue focus:outline-none text-very_light_grayish_blue ml-30 h-16 w-11/12 rounded-r-2xl caret-cyan-500 text-lg" ref={inputRef} onChange={() => {
                    console.log(inputRef.current?.value);
                }}></input>
            </div>
        </div>
    )
}

export default Input;