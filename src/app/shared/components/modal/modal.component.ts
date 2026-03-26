import { Component, inject, output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ModalService } from '../../../core/services/modalServices/modal.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { INote } from '../../../features/home/interfaces/IGetNoteResponse';
@Component({
  selector: 'app-modal',
  imports: [ButtonModule, DialogModule, InputTextModule, ReactiveFormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  readonly modalService = inject(ModalService)

  readonly fb = inject(FormBuilder)
  saveNote = output<INote>()
  readonly noteForm: FormGroup = this.fb.group({
    title: [null, Validators.required],
    content: [null, Validators.required],
  })

  onSubmit() {
    console.log();
    if (this.noteForm.invalid) {
      this.noteForm.markAllAsTouched()
      return
    }
    console.log("submittt");
    this.saveNote.emit(this.noteForm.value)
    this.modalService.closeModal()
    this.noteForm.reset()

  }
}
