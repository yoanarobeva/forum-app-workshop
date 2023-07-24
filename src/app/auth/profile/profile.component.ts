import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  editModeActivated: boolean = false;

  toggleModes() {
    this.editModeActivated = !this.editModeActivated;
  }

  submitHandler(form: NgForm) {
    if(form.invalid) {
      return;
    }

    this.toggleModes();

    
  }
}
