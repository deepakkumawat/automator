import { Component, OnInit } from '@angular/core';
import { Register } from '../models/register';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registerModel = new Register('', '', '', undefined, '', '');

  constructor(private registerService: RegisterService) { }

  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log('On Submit Called..');
    this.registerService.register(this.registerModel);
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.registerModel); }

  ngOnInit() {
  }

}
