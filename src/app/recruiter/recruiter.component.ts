import { Component, OnInit } from '@angular/core';
import { DbService } from "app/DbService/DbService";
import { Router } from "@angular/router";
import { AuthService } from "app/AuthService/Auth.Service";
import { Manager } from '../ModelService/Manager';

@Component({
  selector: 'app-recruiter',
  templateUrl: './recruiter.component.html',
  styleUrls: ['./recruiter.component.css']
})
export class RecruiterComponent implements OnInit {
  p: number = 1;
  Recruiters: Manager[];

  constructor(private Service: DbService, private router: Router, public AuthService: AuthService) { }
  ngOnInit() {
    let req = this.Service.Get("Managers")
    req.subscribe(rsp => {
      this.Recruiters = rsp.json();
    });
  }
  settings = {
    mode: 'inline',
    selectMode: 'single',
    hideHeader: false,
    hideSubHeader: false,
    actions: {
      edit: {
        confirmSave: true
      },
    },
    pager: {
      display: true,
      perPage: 3,
    },
    columns: {
      UserName: {
        title: 'Name',
        filter: true
      },
      Email: {
        title: 'Email',
        filter: true
      },
    }
  };
}