import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { ThemesModule } from './themes/themes.module';
import { HomeComponent } from './home/home.component';
import { appInterceptorProvider } from './app.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, HttpClientModule, CoreModule, SharedModule, AuthModule, ThemesModule, AppRoutingModule],
  providers: [appInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
