import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-in',
  imports: [ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent {
  private readonly authService = inject(AuthService)
  private readonly fb = inject(FormBuilder)
  private readonly router = inject(Router)

  loginform: FormGroup = this.fb.group({
    email: [null, Validators.required,],
    password: [null, Validators.required,],
  })


  onSubmit() {
    if (this.loginform.invalid) {
      this.loginform.markAllAsTouched()
    } else {
      this.authService.signIn(this.loginform.value).subscribe({
        next: (res) => {
          console.log("login");
          console.log(res)
          localStorage.setItem("token", res.token)
          this.router.navigate(["/home"])
        },
        error: (err) => {
          console.log(err)
        },

      })
    }
  }

}
