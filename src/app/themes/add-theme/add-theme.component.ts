import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-theme',
  templateUrl: './add-theme.component.html',
  styleUrls: ['./add-theme.component.css']
})
export class AddThemeComponent {

  constructor (private router: Router, private apiService: ApiService) {}

  goHome() {
    this.router.navigate(["/themes"]);
  }

  submitHandler (form: NgForm): void {
    if (form.invalid) {
      return;
    }

    const {themeName, postText} = form.value;

    this.apiService.postTheme(themeName, postText).subscribe(() => {
      this.goHome();
    })
  }
}
