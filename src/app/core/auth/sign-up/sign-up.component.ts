import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {

  private readonly authService = inject(AuthService)
  private readonly fb = inject(FormBuilder)
  private readonly router = inject(Router)

  registerform: FormGroup = this.fb.group({
    name: ["", [Validators.required, Validators.minLength(3)]],
    email: ["", [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
    password: ["", [Validators.required]],
    age: ["", Validators.required],
    phone: ["", Validators.required],
  })


  onSubmit() {
    if (this.registerform.invalid) {
      this.registerform.markAllAsDirty()
    } else {
      this.authService.signUp(this.registerform.value).subscribe({
        next: (res) => {
          console.log(res)
          this.router.navigate(["/signIn"])
        },
        error: (err) => {
          console.log(err)
        },

      })
    }
  }

}

