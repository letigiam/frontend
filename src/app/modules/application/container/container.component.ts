import { DatePipe, DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit() { }

  prosumer() {
    this.router.navigate(['/prosumer/dashboard']);
  }

  producter() {
    this.router.navigate(['/producter/dashboard']);
  }


}
