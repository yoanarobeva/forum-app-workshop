import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { User } from 'src/app/types';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  editModeActivated: boolean = false;

  profileDetails: User = {
    username: '',
    email: '',
    tel: '',
  }

  constructor(private authService: AuthService) {};

  ngOnInit(): void {
    const {username, email, tel} = this.authService.user!;

    this.profileDetails = {username, email, tel};
    
  }


  toggleModes() {
    this.editModeActivated = !this.editModeActivated;
  }

  submitHandler(form: NgForm) {
    if(form.invalid) {
      return;
    }

    this.profileDetails = {...form.value} as User;
    const {username, email, tel} = this.profileDetails;

    this.authService.updateProfile(username, email, tel).subscribe(() => {
      this.toggleModes();
    });    
  }
}
