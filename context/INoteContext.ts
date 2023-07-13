import INote from "@/interfaces/INote";

export default interface INoteContext {
    notes: INote[];
    addNote: (note: INote) => void;
}