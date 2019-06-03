import { Component } from '@angular/core';

import { Invoice }    from '../models/invoice';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.css']
})
export class InvoiceFormComponent {
  
  model = new Invoice(0.0,'sample words');

  submitted = false;

  onSubmit() { this.submitted = true; }

  newInvoice() {
    this.model = new Invoice(0.0, '');
  }
}

