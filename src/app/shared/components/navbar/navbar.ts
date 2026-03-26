import { Component, inject } from '@angular/core';
import { ModalService } from '../../../core/services/modalServices/modal.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  private readonly modalService = inject(ModalService)

  addNote(){
    this.modalService.handleAddNote()
  }
}
