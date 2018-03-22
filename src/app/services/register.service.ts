import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Register } from '../models/register';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'accept': 'application/json'
  })
};

@Injectable()
export class RegisterService {
  constructor(private http: HttpClient) { }
  register(registerDetails: Register) {
    console.log('Register Called..', registerDetails);
    registerDetails.appName = environment.appName;
    this.http.post(`${environment.apiBase}register`, registerDetails, httpOptions)
      .subscribe(
        res => {
          console.log('Register Service Called Response..', res);
        },
        err => {
          console.log('Register Service Called Error Response..', err);
        });
  }
}
