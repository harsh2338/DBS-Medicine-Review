import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './modules/user/sign-in/sign-in.component';
import { UserComponent } from './modules/user/user.component';
import { SignUpComponent } from './modules/user/sign-up/sign-up.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    UserComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
