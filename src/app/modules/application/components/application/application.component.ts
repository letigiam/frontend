import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {
  allCategories = new Array();
  comunication: any;
  constructor(
    private router: Router,
  ) { }

  ngOnInit() { }
}
