'use client'

import { ChildComponents } from "@/interfaces/ChildComponents";
import INote from "@/interfaces/INote";
import { createContext, useState } from "react"

interface INoteCon {
    notes: INote[];
    addNote: (note: INote) => void;

}

export const NoteContext = createContext<INoteCon | null>(null);

const NoteContextProvider = ({ children }: ChildComponents) => {
    const note: INote = {
        todoId: 1,
        todoNote: "First Note",
        isCompleted: false
    }
    const [notes, setNotes] = useState<INote[]>([note]);

    const addNote: (note: INote) => void = (note: INote) => {
        setNotes([...notes, note])
    }

    return (
        <NoteContext.Provider value={{ notes, addNote }}>
            {children}
        </NoteContext.Provider>
    )
}

export default NoteContextProvider;
