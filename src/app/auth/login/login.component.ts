import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { emailDomains } from 'src/app/shared/constants';
import { appEmailValidator } from 'src/app/shared/validators/email-validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  form = this.fb.group({
    email: ['', [Validators.required, appEmailValidator(emailDomains)]],
    password: ['', [Validators.required, Validators.minLength(5)]],
  })

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
  ) {}

  login(): void {
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value);
    
    this.authService.login();
    this.router.navigate(['/']);
  }
}
