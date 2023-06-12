import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss']
})
export class HeadersComponent {

  constructor(private router: Router) { }

  resetToken() {
    localStorage.removeItem('Authorization');
    this.router.navigate(['/login']);
  }
}
