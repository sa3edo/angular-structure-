import { Component, inject, Input, OnInit, output } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { IGetNoteResponse, INote } from '../../interfaces/IGetNoteResponse';
import { DatePipe } from '@angular/common';
import { ModalService } from '../../../../core/services/modalServices/modal.service';

@Component({
  selector: 'app-note',
  imports: [DatePipe,],
  templateUrl: './note.component.html',
  styleUrl: './note.component.css',
})
export class NoteComponent {

  @Input() note!: INote;

  private readonly noteService = inject(NoteService)

  private readonly modalService = inject(ModalService)


  delete = output<string>()
  editNote() {
    this.modalService.handleEditNote(this.note)
  }
  deleteNote(id: string) {
    this.delete.emit(id)
  }
}
