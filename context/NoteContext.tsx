'use client'

import { ChildComponents } from "@/interfaces/ChildComponents";
import INote from "@/interfaces/INote";
import { createContext, useState } from "react"
import INoteContext from "../interfaces/INoteContext";



export const NoteContext = createContext<INoteContext | null>(null);

const NoteContextProvider = ({ children }: ChildComponents) => {
    const [lastTodoId, setLastTodoId] = useState<number>(0)
    const [notes, setNotes] = useState<INote[]>([]);

    const addNote = (todoNote: string) => {
        const note: INote = {
            todoId: lastTodoId + 1,
            todoNote: todoNote,
            isCompleted: false
        }
        setNotes([...notes, note])
        setLastTodoId(prevTodoId => prevTodoId + 1)
    }

    // Change notes active / completed status
    const changeNoteStatus = (todoId: number) => {
        setNotes([...notes.filter(note => note.todoId !== todoId),
        ...notes.filter(note => {
            if (note.todoId === todoId) {
                if (note.isCompleted===false)
                    note.isCompleted = true;
                else
                    note.isCompleted = false;
                console.log(note.isCompleted);
                
                return note;
            }
        })])
    }

    const deleteNote = (todoId: number)=>{
        setNotes([...notes.filter(note=>note.todoId!==todoId)]);
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, changeNoteStatus, deleteNote }}>
            {children}
        </NoteContext.Provider>
    )
}

export default NoteContextProvider;
