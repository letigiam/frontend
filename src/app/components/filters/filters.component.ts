import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {
  @Input() route = 'dashboard';

  constructor(private router: Router,) { }

  resertToken() {
    localStorage.removeItem('Authorization');
    this.router.navigate(['/auth/login']);
  }

  locations: any = [
    { id: 1, name: 'Alessandria' },
    { id: 2, name: 'Asti' },
    { id: 3, name: 'Matera' },
    { id: 4, name: 'Valdarno' }
  ];

  users: any = [
    { id: 1, name: 'Mario Rossi' },
    { id: 2, name: 'Filippo Verdi' },
    { id: 3, name: 'Andrea Bianchi' }
  ]
}
