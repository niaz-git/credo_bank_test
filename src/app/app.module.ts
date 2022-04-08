import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StrengthMeterModule } from 'ngx-strength-meter';
import { AppComponent } from './app.component';
import { PasswordStrengthBarComponent } from './components/password-strength-bar/password-strength-bar.component';



@NgModule({
  declarations: [
    AppComponent,
    PasswordStrengthBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, NgbModule,
    ReactiveFormsModule,
    StrengthMeterModule,
    

    
  ],
  providers: [],
  bootstrap: [AppComponent],
    exports: [AppComponent],
})
export class AppModule {
  
  }
 
