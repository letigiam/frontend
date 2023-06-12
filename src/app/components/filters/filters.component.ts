import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from 'src/app/modules/application/components/base/base.component';
@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent extends BaseComponent {
  type: 'cer' | 'user' = 'cer';
  selected_entity: any = { id: null, name: null };
  url: any;

  constructor(private router: Router, private route: ActivatedRoute) {
    super();

    this.route.url.subscribe(value => {
      this.refreshData();
    });
  }

  resertToken() {
    localStorage.removeItem('Authorization');
    this.router.navigate(['/auth/login']);
  }

  refreshData() {
    this.url = this.route.snapshot.url.map(fragment => fragment.path)[0];
    this.type = this.route.snapshot.url.map(fragment => fragment.path).includes('cer') ? 'cer' : 'user';
    if (this.type == 'cer') this.selected_entity = this.locations.find((location: any) => location.id == this.route.snapshot.params['cer']);
    else this.selected_entity = this.users.find((user: any) => user.id == this.route.snapshot.params['utente']);
  }
}
