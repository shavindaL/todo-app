'use client'

import { ChildComponents } from "@/interfaces/ChildComponents";
import INote from "@/interfaces/INote";
import { createContext, useState } from "react"
import INoteContext from "../interfaces/INoteContext";



export const NoteContext = createContext<INoteContext | null>(null);

const NoteContextProvider = ({ children }: ChildComponents) => {
    const [lastTodoId, setLastTodoId] = useState<number>(0)
    const [notes, setNotes] = useState<INote[]>([]);
    const [activeNotes, setActiveNotes] = useState<INote[]>([]);
    const [completedNotes, setCompletedNotes] = useState<INote[]>([]);
    const [remainingNotesCount, setRemainingNotesCount] = useState<number>(0);

    //Add a new note
    const addNote = (todoNote: string) => {
        const note: INote = {
            todoId: lastTodoId + 1,
            todoNote: todoNote,
            isCompleted: false
        }
        setNotes([...notes, note]);
        setLastTodoId(prevTodoId => prevTodoId + 1);
        setActiveNotes([...activeNotes, note]);
        setRemainingNotesCount(prevNoteCount => prevNoteCount + 1)
    }

    // Change notes active / completed status
    const changeNoteStatus = (todoId: number) => {
        setNotes([...notes.filter(note => note.todoId !== todoId),
        ...notes.filter(note => {
            if (note.todoId === todoId) {
                if (note.isCompleted === false) {

                    //Increment Completed Notes Count
                    setRemainingNotesCount(prevNoteCount => prevNoteCount - 1)

                    //Change Note Status
                    note.isCompleted = true;

                    //Add note to completed list
                    setCompletedNotes([...completedNotes, note]);

                    setActiveNotes([...activeNotes.filter(note => note.todoId !== todoId)])

                }
                else {

                    //Decrement Completed Notes Count
                    setRemainingNotesCount(prevNote => prevNote + 1);

                    //Change Note Status
                    note.isCompleted = false;

                    //Add note activated list
                    setActiveNotes([...activeNotes, note]);

                    //Remove reactivated note
                    setCompletedNotes([...notes.filter(note => note.todoId !== todoId)]);

                }

                return note;
            }
        })])
    }

    const deleteNote = (todoId: number) => {
        setNotes([...notes.filter(note => note.todoId !== todoId)]);
        console.log(notes.length);

        setRemainingNotesCount(prevCount => prevCount - 1);
    }

    const clearCompleted = () => {
        setNotes([...notes.filter(note => note.isCompleted !== true)])
    }


    return (
        <NoteContext.Provider value={{ notes, activeNotes, completedNotes, remainingNotesCount, addNote, changeNoteStatus, deleteNote, clearCompleted }}>
            {children}
        </NoteContext.Provider>
    )
}

export default NoteContextProvider;
