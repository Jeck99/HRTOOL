import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    moduleId: module.id,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {

  model: any = {};
  loading = false;

  constructor(
      private router: Router) { }
}