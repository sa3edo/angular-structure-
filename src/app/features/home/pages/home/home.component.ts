import { Component, inject, signal } from '@angular/core';
import { NoteComponent } from "../../components/note/note.component";
import { INote, IGetNoteResponse } from '../../interfaces/IGetNoteResponse';
import { NoteService } from '../../services/note.service';
import { ModalComponent } from "../../../../shared/components/modal/modal.component";
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ModalService } from '../../../../core/services/modalServices/modal.service';
import { IUpdateNoteResponse } from '../../interfaces/IUpdateNoteResponse';
@Component({
  selector: 'app-home',
  imports: [NoteComponent, ModalComponent, ButtonModule, DialogModule, InputTextModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  readonly modalService = inject(ModalService)
  private readonly noteService = inject(NoteService)
  notes= signal<INote[]>([])

  ngOnInit(): void {
    this.getNotes()
  }


  getNotes() {
    this.noteService.setGetUserNotes().subscribe({
      next: (res: IGetNoteResponse) => {
        this.notes.set(res.notes)
        console.log(res);
      },
      error: (err) => {
        console.log(err.error.msg)
      },
    })
  }
  addNote(note: INote) {
    console.log(note);
    this.noteService.setAddNote(note).subscribe({
      next: (res: IGetNoteResponse) => {

        this.getNotes()
        console.log(res);
      },
      error: (err) => {
        console.log(err.error.msg)
      },
    })
  }
  updateNote(note: INote) {
    console.log("update from home");
    console.log(note);
    this.noteService.setUpdateNote(note, this.modalService.noteId()!).subscribe({
      next: (res: IUpdateNoteResponse) => {
        this.getNotes()
        console.log("updated note", res.note);
        console.log(res.msg);
      },
      error: (err) => {
        console.log(err.error.msg)
      },
    })
  }
  deleteNote(id: string) {
    this.noteService.setDeleteNote(id).subscribe({
      next: (res: any) => {
        this.getNotes()
        console.log("deleted note", res);
      },
      error: (err) => {
        console.log(err.error.msg)
      },
    })
  }
}
