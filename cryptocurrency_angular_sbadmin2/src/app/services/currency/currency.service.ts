import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Bithumb, Upbit } from './currency';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor() { }
}
