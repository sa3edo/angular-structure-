import { Component } from '@angular/core';
import { Navbar } from "../../../shared/components/navbar/navbar";
import { RouterOutlet } from '@angular/router';
import { Footer } from "../../../shared/components/footer/footer";
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-main-layout',
  imports: [Navbar, RouterOutlet, Footer, ButtonModule],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {

}
