import INote from "@/interfaces/INote";

export default interface INoteContext {
    notes: INote[];
    completedNotes: INote[];
    activeNotes: INote[];
    remainingNotesCount: number;
    addNote: (note: string) => void;
    changeNoteStatus: (noteId: number) => void;
    deleteNote: (noteId: number) => void;
    clearCompleted:()=>void
}