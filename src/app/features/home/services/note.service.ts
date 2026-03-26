import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { appUrls } from '../../../core/constants/apiUrls';
import { IGetNoteResponse, INote } from '../interfaces/IGetNoteResponse';
import { IUpdateNoteResponse } from '../interfaces/IUpdateNoteResponse';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private readonly _HttpClient = inject(HttpClient)

  setGetUserNotes() {
    return this._HttpClient.get<IGetNoteResponse>(`${appUrls.getUserNotes}`, {
      headers: {
        token: `3b8ny__${localStorage.getItem("token")}`
      }
    })
  }
  setAddNote(note: INote) {
    return this._HttpClient.post<IGetNoteResponse>(`${appUrls.addNote}`, note, {
      headers: {
        token: `3b8ny__${localStorage.getItem("token")}`
      }
    })
  }
  setUpdateNote(note: INote, id: string) {
    return this._HttpClient.put<IUpdateNoteResponse>(`${appUrls.updateNote(id)}`, note, {
      headers: {
        token: `3b8ny__${localStorage.getItem("token")}`
      }
    })
  }
  setDeleteNote(id: string) {
    return this._HttpClient.delete<IUpdateNoteResponse>(`${appUrls.deleteNote(id)}`, {
      headers: {
        token: `3b8ny__${localStorage.getItem("token")}`
      }
    })
  }
}
