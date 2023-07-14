'use client'

import { ChildComponents } from "@/interfaces/ChildComponents";
import INote from "@/interfaces/INote";
import { createContext, useState } from "react"
import INoteContext from "../interfaces/INoteContext";



export const NoteContext = createContext<INoteContext | null>(null);

const NoteContextProvider = ({ children }: ChildComponents) => {
    
    const [notes, setNotes] = useState<INote[]>([]);

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
