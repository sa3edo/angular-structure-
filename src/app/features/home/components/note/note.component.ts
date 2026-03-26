import { Component, inject, Input, OnInit } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { IGetNoteResponse, INote } from '../../interfaces/IGetNoteResponse';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-note',
  imports: [DatePipe],
  templateUrl: './note.component.html',
  styleUrl: './note.component.css',
})
export class NoteComponent {

  @Input() note!: INote;

}
