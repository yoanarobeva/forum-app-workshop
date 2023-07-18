import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeDetailsComponent } from './theme-details/theme-details.component';
import { ThemesRoutingModule } from './themes-routing.module';
import { AllThemesComponent } from './all-themes/all-themes.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { ThemesListComponent } from './themes-list/themes-list.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ThemeCardComponent } from './theme-card/theme-card.component';
import { CommentComponent } from './comment/comment.component';
import { FormsModule } from '@angular/forms';
import { AddThemeComponent } from './add-theme/add-theme.component';



@NgModule({
  declarations: [
    ThemeDetailsComponent,
    AllThemesComponent,
    PostsListComponent,
    ThemesListComponent,
    ThemeCardComponent,
    CommentComponent,
    AddThemeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ThemesRoutingModule,
    SharedModule,
    FormsModule,
  ]
})
export class ThemesModule { }
