import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { appUrls } from '../../../core/constants/apiUrls';
import { IGetNoteResponse, INote } from '../interfaces/IGetNoteResponse';

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
}
