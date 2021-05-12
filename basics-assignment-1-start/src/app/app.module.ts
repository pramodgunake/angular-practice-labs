import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Success } from './alerts/success/success.component';
import { Warning } from './alerts/warning/warning.component';



import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    Success,
    Warning
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
