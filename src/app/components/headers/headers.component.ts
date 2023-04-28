import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss']
})
export class HeadersComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit() {

  }

  home() {
    this.router.navigate(['/home']);
  }
  prosumer() {
    this.router.navigate(['/prosumer/dashboard']);
  }

  producter() {
    this.router.navigate(['/producter/dashboard']);
  }

  resertToken() {
    localStorage.removeItem('Authorization');
    this.router.navigate(['/auth/login']);
  }
}
