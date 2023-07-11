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



@NgModule({
  declarations: [
    ThemeDetailsComponent,
    AllThemesComponent,
    PostsListComponent,
    ThemesListComponent,
    ThemeCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ThemesRoutingModule,
    SharedModule,
  ]
})
export class ThemesModule { }
