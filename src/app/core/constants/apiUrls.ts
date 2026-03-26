import { environment } from "../../../environments/environment.development";

export const appUrls = {

    // Auth

    signUp: `${environment.baseUrl}users/signUp`,
    signIn: `${environment.baseUrl}users/signIn`,




    // Notes
    getUserNotes: `${environment.baseUrl}notes`,
    // updateNote: `${environment.baseUrl}notes`,
    addNote: `${environment.baseUrl}notes`,
    // deleteNote: `${environment.baseUrl}notes`,
    // updateNote: `${environment.baseUrl}notes`,
    updateNote: (id: string) => `${environment.baseUrl}notes/${id}`,
    deleteNote: (id: string) => `${environment.baseUrl}notes/${id}`,
} 