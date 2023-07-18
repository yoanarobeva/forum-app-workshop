import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { appEmailValidator } from 'src/app/shared/validators/email-validator';
import { matchPasswordValidator } from 'src/app/shared/validators/match-password-validator';
import { emailDomains } from 'src/app/shared/constants';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {

  form = this.fb.group({
    username: ["", [Validators.required, Validators.minLength(5)]],
    email: ["", [Validators.required, appEmailValidator(emailDomains)]],
    tel: ["", [Validators.required]],
    passGroup: this.fb.group(
      {
        password: ["", [Validators.required, Validators.minLength(5)]],
        rePassword: ["", [Validators.required]],
      },
      {
        validators: [matchPasswordValidator("password", "rePassword")]
      }
    ),
  });

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
  ) {}

  register() {
    if(this.form.invalid) {
      return;
    }

    console.log(this.form.value);

    this.authService.login();
    this.router.navigate(['/']);
  }
}
