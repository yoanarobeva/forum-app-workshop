import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllThemesComponent } from './all-themes/all-themes.component';
import { ThemeDetailsComponent } from './theme-details/theme-details.component';
import { AddThemeComponent } from './add-theme/add-theme.component';

const routes: Routes = [
    {
        path: 'themes',
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: AllThemesComponent,
            },
            {
                path: ':themeId',
                component: ThemeDetailsComponent,
            }
        ]
    },
    {
        path: 'add-theme',
        component: AddThemeComponent,
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemesRoutingModule { }
