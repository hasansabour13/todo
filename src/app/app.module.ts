import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';//routing
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { FormsModule } from '@angular/forms';


//angular material
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {provideNativeDateAdapter} from '@angular/material/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,RouterModule,AppRoutingModule,FormsModule,
    MatFormFieldModule,MatInputModule,MatDatepickerModule,BrowserAnimationsModule,

  ],


  providers: [
    provideAnimationsAsync(),provideNativeDateAdapter()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
