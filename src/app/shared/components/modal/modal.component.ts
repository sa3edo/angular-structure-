import { Component, effect, inject, output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ModalService } from '../../../core/services/modalServices/modal.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { INote } from '../../../features/home/interfaces/IGetNoteResponse';
import { NoteService } from '../../../features/home/services/note.service';
@Component({
  selector: 'app-modal',
  imports: [ButtonModule, DialogModule, InputTextModule, ReactiveFormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  readonly modalService = inject(ModalService)
  readonly noteService = inject(NoteService)
  readonly fb = inject(FormBuilder)
  saveNote = output<INote>()
  updateNote = output<INote>()
  readonly noteForm: FormGroup = this.fb.group({
    title: ["", Validators.required],
    content: ["", Validators.required],
  })

  update = effect(() => {
    const selected = this.modalService.selectedNote()
    if (selected) {
      this.noteForm.patchValue(selected)
    }
  })

  onSubmit() {

    if (this.noteForm.invalid) {
      this.noteForm.markAllAsTouched()
      return
    }
    if (this.modalService.moadalMode() == "Add New Note") {
      this.saveNote.emit(this.noteForm.value)
    }
    else {
      console.log("update from modal");
      console.log(this.noteForm.value);
      this.updateNote.emit(this.noteForm.value)
    }
    this.modalService.closeModal()
    this.noteForm.reset()

  }
}
