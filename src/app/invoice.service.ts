import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Invoice } from './models/invoice';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class InvoiceService {
url = "http://localhost:7000/countwords";
    constructor(private http: HttpClient) { }

    postInvoice(invoice: Invoice): Observable<HttpResponse<any>> {
        let httpHeaders = new HttpHeaders({
             'Content-Type' : 'application/json'
        });    
        return this.http.post<any>(this.url, invoice,
            {
              headers: httpHeaders,
              observe: 'response'
            }
	    )
	    .map(response => {
		return response;
    	    });
    	 };             
} 
