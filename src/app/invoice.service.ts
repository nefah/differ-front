import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Invoice } from './models/invoice';

@Injectable()
export class InvoiceService {
url = "http://localhost:7000/api/countwords";
    constructor(private http: HttpClient) { }

    postInvoice(invoice: Invoice): Observable<HttpResponse<Invoice>> {
	console.log(invoice);	    
        let httpHeaders = new HttpHeaders({
             'Content-Type' : 'application/json'
        });    
        return this.http.post<Invoice>(this.url, invoice,
            {
              headers: httpHeaders,
              observe: 'response'
            }
        );
    }             
} 
