import { Injectable, signal } from '@angular/core';
import { INote } from '../../../features/home/interfaces/IGetNoteResponse';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  readonly visible = signal<boolean>(false)
  readonly moadalMode = signal<"Add New Note" | "Edit Note">("Add New Note")
  readonly selectedNote = signal<INote | null>(null)
  readonly noteId = signal<string | null>(null)

  handleAddNote() {
    this.visible.set(true);
    this.moadalMode.set("Add New Note")
    this.noteId.set(null)
    this.selectedNote.set({} as INote)

  }
  handleEditNote(note: INote) {
    this.visible.set(true);
    this.moadalMode.set("Edit Note")
    this.noteId.set(note._id)
    this.selectedNote.set(note)
  }

  closeModal() {

    this.visible.set(false)
  }


}
