'use client'
import { NoteContext } from "@/context/NoteContext";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext, useRef } from "react";

const Input: React.FC = () => {
    const themeContext = useContext(ThemeContext);
    const noteContext = useContext(NoteContext);

    const inputRef = useRef<HTMLInputElement>(null);

    const { theme } = themeContext!;
    const { addNote } = noteContext!;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addNote({
            todoId: 2,
            todoNote: inputRef.current?.value!,
            isCompleted: true
        });

        inputRef.current!.value = '';
    }


    return (
        <div className="relative h-20 w-1/2 top-16 left-1/4 mobile:left-14 mt-10">
            <div className={`${theme === 'light' ? 'bg-very_light_gray' : 'bg-very_dark_desaturated_blue'} absolute rounded-2xl w-full flex justify-center px-4`}>
                <div className="w-1/12 flex justify-center py-4 px-4">
                    <div className={`w-8 h-8 ${theme === 'light' ? 'bg-very_light_gray border-very_light_grayish_blue' : 'bg-very_dark_desaturated_blue border-very_dark_grayish_blue_dark_hover'} text-lg rounded-full  border-2 hover:cursor-pointer`} />
                    {/* <input type="checkbox" className="w-10 h-10 bg-very_dark_desaturated_blue text-lg rounded-3xl" name="" id="" /> */}
                </div>
                <form className="ml-30 h-16 w-11/12 rounded-r-2xl" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className={` ${theme === 'light' ? 'bg-very_light_gray text-very_dark_desaturated_blue' : 'bg-very_dark_desaturated_blue text-very_light_grayish_blue'} focus:outline-none caret-cyan-500 text-lg font-regular w-full h-full`}
                        ref={inputRef}
                    />
                </form>
            </div>
        </div>
    )
}

export default Input;