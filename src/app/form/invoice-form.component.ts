import { Component } from '@angular/core';
import { InvoiceService } from '../invoice.service';

import { Invoice }    from '../models/invoice';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.css']
})
export class InvoiceFormComponent {
  
  model = new Invoice(0.0,'sample words');

  submitted = false;

  constructor(private invoiceService: InvoiceService) {}

  onSubmit(form) { 
    console.log(form);
    this.submitted = true; 
    this.invoiceService.postInvoice(form);
    this.newInvoice();
    
  }

  newInvoice() {
    this.model = new Invoice(0.0, '');
  }
}

