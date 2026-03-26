import { Component, inject } from '@angular/core';
import { NoteComponent } from "../../components/note/note.component";
import { INote, IGetNoteResponse } from '../../interfaces/IGetNoteResponse';
import { NoteService } from '../../services/note.service';
import { ModalComponent } from "../../../../shared/components/modal/modal.component";
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
@Component({
  selector: 'app-home',
  imports: [NoteComponent, ModalComponent, ButtonModule, DialogModule, InputTextModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

  private readonly noteService = inject(NoteService)
  notes: INote[] = []

  ngOnInit(): void {
    this.getNotes()
  }

  
  getNotes() {
    this.noteService.setGetUserNotes().subscribe({
      next: (res: IGetNoteResponse) => {
        this.notes = res.notes
        console.log(res);
      },
      error: (err) => {
        console.log(err.error.msg)
      },
    })
  }
  addNote(note: INote) {
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
}
