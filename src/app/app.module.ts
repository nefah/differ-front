import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InvoiceService } from './invoice.service';


import { AppComponent }  from './app.component';
import { InvoiceFormComponent } from './form/invoice-form.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    InvoiceFormComponent
  ],
  providers: [
    InvoiceService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
