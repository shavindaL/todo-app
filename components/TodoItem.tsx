import { ThemeContext } from "@/context/ThemeContext";
import INote from "@/interfaces/INote";
import { useContext } from "react";

const TodoItem: React.FC<INote> = (note: INote) => {
    const context = useContext(ThemeContext);
    const { theme } = context!;


    return (
        <div className={`w-full h-20 ${theme === 'light' ? 'bg-very_light_gray text-very_dark_desaturated_blue' : 'bg-very_dark_desaturated_blue text-very_light_grayish_blue'} rounded-md text-center`}>
            <div className="w-1/12 flex justify-center py-4 px-4">
                <div className={`w-8 h-8 ${theme === 'light' ? 'bg-very_light_gray border-very_light_grayish_blue' : 'bg-very_dark_desaturated_blue border-very_dark_grayish_blue_dark_hover'} text-lg rounded-full  border-2 hover:cursor-pointer`} />
                {/* <input type="checkbox" className="w-10 h-10 bg-very_dark_desaturated_blue text-lg rounded-3xl" name="" id="" /> */}
            </div>
            {note.todoNote}
            <button className="">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                    <path fill="#494C6B" fillRule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z" />
                </svg>
            </button>
        </div>
    )
}
export default TodoItem;