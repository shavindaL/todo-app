import INote from "@/interfaces/INote";

export default interface INoteContext {
    notes: INote[];
    addNote: (note: string) => void;
    changeNoteStatus: (noteId: number) => void;
    deleteNote: (noteId: number) => void;

}