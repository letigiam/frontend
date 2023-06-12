import { DatePipe, DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent } from '../components/base/base.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent extends BaseComponent implements OnInit {
  override locations: any = this.locations;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    @Inject(DOCUMENT) private document: Document
  ) {
    super();
  }

  override ngOnInit() {
    this.locations = this.locations.filter((location: any) => location.id != null)
  }

  dashboard() {
    this.router.navigate(['/dashboard']);
  }

  producter() {
    this.router.navigate(['/producter/dashboard']);
  }


}
