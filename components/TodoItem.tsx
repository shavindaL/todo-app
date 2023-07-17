import { NoteContext } from "@/context/NoteContext";
import { ThemeContext } from "@/context/ThemeContext";
import INote from "@/interfaces/INote";
import { useContext, useState } from "react";

const TodoItem: React.FC<INote> = (note: INote) => {
    const themeContext = useContext(ThemeContext);
    const noteContext = useContext(NoteContext);

    const [showClsBtn, setShowClsBtn] = useState<boolean>(false)

    const { theme } = themeContext!;
    const { changeNoteStatus, deleteNote } = noteContext!;


    //Change note's state
    const checkBoxHandler = () => {
        changeNoteStatus(note.todoId);
    }

    //delete note
    const deleteHandler = () => {
        deleteNote(note.todoId)
    }


    return (
        <div className={`w-full h-20 flex items-center text-center border-b-2 border-b-light_gray`} onMouseOver={() => { setShowClsBtn(true) }} onMouseLeave={() => { setShowClsBtn(false) }}>
            <div className="w-1/12 py-4 px-7">
                {/* Status Button */}
                <button className={`w-8 h-8  text-lg rounded-full  border-2 hover:cursor-pointer flex align-middle items-center
                ${theme === 'light' ? 'bg-very_light_gray border-very_light_grayish_blue' : 'bg-very_dark_desaturated_blue border-very_dark_grayish_blue_dark_hover'}
                ${note.isCompleted ? 'bg-gradient-to-r from-gradient-left to-gradient_right line-through' : null}`}
                    onClick={checkBoxHandler}>
                    {note.isCompleted ? <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="11" height="9">
                        <path fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6" />
                    </svg> : null}
                </button>
            </div>
            {/* Todo Note */}
            <p className={`mx-auto ${note.isCompleted ? 'line-through text-light_grayish_blue_dark' : null} inline`}>{note.todoNote}</p>
            {/* Delete Buttom */}
            {showClsBtn ?
                <button className="px-7" onClick={deleteHandler}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                        <path fill={theme === 'light' ? '"#494C6B"' : '#FFF'} fillRule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z" />
                    </svg>
                </button>
                : null}
        </div>
    )
}
export default TodoItem;