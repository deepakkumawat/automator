import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Register } from '../models/register';

@Injectable()
export class RegisterService {
  constructor(private http: HttpClient) { }
  register(registerDetails: Register) {
    console.log('Register Called..', registerDetails);
  }
}
