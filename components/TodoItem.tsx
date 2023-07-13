import { ThemeContext } from "@/context/ThemeContext";
import INote from "@/interfaces/INote";
import { useContext } from "react";

const TodoItem: React.FC<INote> = (note: INote) => {
    const context = useContext(ThemeContext);
    const { theme } = context!;


    return (
        <div className={`w-full h-20 ${theme === 'light' ? 'bg-very_light_gray text-very_dark_desaturated_blue' : 'bg-very_dark_desaturated_blue text-very_light_grayish_blue'} rounded-md border-b-2 border-dark_grayish_blue text-center`}>
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