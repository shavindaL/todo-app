import { ThemeContext } from '@/context/ThemeContext';
import TodoItem from './TodoItem'
import ThemeCon from '@/interfaces/ThemeCon';
import { useContext } from 'react';
import INote from '@/interfaces/INote';
import { NoteContext } from '@/context/NoteContext';
import INoteContext from '@/context/INoteContext';



const TodoList: React.FC = () => {

    const themeContext = useContext<ThemeCon | null>(ThemeContext);
    const noteContext = useContext<INoteContext | null>(NoteContext);
    
    const { theme } = themeContext!;
    const { notes } = noteContext!;

    return (
        <div className={`absolute left-1/4 mt-20 rounded-2xl ${theme === 'light' ? 'bg-very_light_gray' : 'bg-very_dark_desaturated_blue'} drop-shadow-xl w-1/2`}>
            {
                notes?.map(note => <TodoItem key={note.todoId} {...note} />)
            }
        </div>
    )
}

export default TodoList;