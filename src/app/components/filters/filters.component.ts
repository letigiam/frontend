import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {

  constructor(private router: Router,) { }

  resertToken() {
    localStorage.removeItem('Authorization');
    this.router.navigate(['/auth/login']);
  }
}
