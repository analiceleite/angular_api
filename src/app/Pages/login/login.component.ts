import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../Services/login/login.service';
import { LoginResponse } from '../../Interfaces/login-response';
import { Router } from '@angular/router';
import { FooterComponent } from '../../Components/footer/footer.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FooterComponent],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  _fb = inject(FormBuilder);
  loginService = inject(LoginService);
  router = inject(Router);

  response!: LoginResponse;
  errorMessage: string = '';
  isLoading: boolean = false;
  showPassword: boolean = false;

  form = this._fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  login() {
    this.isLoading = true;
    this.errorMessage = '';

    this.loginService.login(this.form.controls.username.value!, this.form.controls.password.value!).subscribe({
      next: (val: LoginResponse) => {
        this.isLoading = false;
        this.response = val;
        this.router.navigate(['/products']);
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = 'Invalid credentials. Try again';
      }
    });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
