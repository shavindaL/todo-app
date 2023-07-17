import { ThemeContext } from '@/context/ThemeContext';
import TodoItem from './TodoItem'
import ThemeCon from '@/interfaces/ThemeCon';
import { useContext, useEffect, useState } from 'react';
import { NoteContext } from '@/context/NoteContext';
import INoteContext from '@/interfaces/INoteContext';
import INote from '@/interfaces/INote';



const TodoList: React.FC = () => {

    const themeContext = useContext<ThemeCon | null>(ThemeContext);
    const noteContext = useContext<INoteContext | null>(NoteContext);

    const { theme } = themeContext!;
    const { notes, activeNotes, completedNotes, remainingNotesCount, clearCompleted } = noteContext!;

    const [notesToRender, setNotesToRender] = useState<[] | INote[]>(notes);

    const [all, setAll] = useState<boolean>(true);
    const [active, setActive] = useState<boolean>(false);
    const [complete, setComplete] = useState<boolean>(false);

    useEffect(() => {
        setNotesToRender(notes);

    }, [notes])

    //View active notes
    const viewActive = () => {
        setNotesToRender([...notes.filter(note => note.isCompleted === false)])

        setAll(false)
        setActive(true)
        setComplete(false)
    }

    //View completed notes
    const viewCompleted = () => {
        setNotesToRender([...notes.filter(note => note.isCompleted === true)])

        setAll(false)
        setActive(false)
        setComplete(true)
    }

    //View all notes
    const viewAll = () => {
        setNotesToRender(notes)

        setAll(true)
        setActive(false)
        setComplete(false)
    }



    return (
        <div className={`absolute left-1/4 mt-20 rounded-xl ${theme === 'light' ? 'bg-very_light_gray text-very_dark_desaturated_blue' : 'bg-very_dark_desaturated_blue text-very_light_grayish_blue'} drop-shadow-xl w-1/2`}>
            {
                notesToRender?.map(note => <TodoItem key={note.todoId} {...note} />)
            }
            <div className={`w-full flex h-20`}>
                <div className={`px-7 w-fit flex items-center`}>
                    <button>{remainingNotesCount} Remaining</button>
                </div>
                <div className={`flex items-center w-fit mx-auto`}>
                    <button className={`px-2 ${all ? 'text-bright_blue' : null}`} onClick={viewAll}>All</button>
                    <button className={`px-2 ${active ? 'text-bright_blue' : null}`} onClick={viewActive}>Active</button>
                    <button className={`px-2 ${complete ? 'text-bright_blue' : null}`} onClick={viewCompleted}>Completed</button>
                </div>
                <div className={`px-7 mr-0 flex items-center`}>
                    <button className='hover:text-bright_blue hover:drop-shadow-xl' onClick={clearCompleted}> Clear Completed</button>
                </div>
            </div>
        </div>
    )
}

export default TodoList;