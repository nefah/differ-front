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
  private result;
  constructor(private invoiceService: InvoiceService) { 
  
  }

  createInvoice(form) { 
    this.invoiceService.postInvoice(form).subscribe( response => {
      this.submitted = true;
      let words = response.body.words;
      words = Object.keys(words).map(key => ({word: key, count: words[key]}));
      this.result = {totalPrice: response.body.totalPrice, words:words}; 
      return response.body;
    });
  }
  newInvoice() {
    this.model = new Invoice(0.0, '');
  }
}

