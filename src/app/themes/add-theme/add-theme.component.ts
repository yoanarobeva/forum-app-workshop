import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-theme',
  templateUrl: './add-theme.component.html',
  styleUrls: ['./add-theme.component.css']
})
export class AddThemeComponent {

  constructor (private router: Router) {}

  goHome() {
    this.router.navigate(["/"]);
  }

  submitHandler (form: NgForm) {
    if (form.invalid) {
      return;
    }

    console.log(form.value);
    
    this.goHome();
  }
}
