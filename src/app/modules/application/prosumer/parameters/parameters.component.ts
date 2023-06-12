import { Component, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { BaseComponent } from '../../components/base/base.component';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.scss']
})
export class ParametersComponent extends BaseComponent implements OnInit {
  type: 'cer' | 'user' = 'cer';
  selected_entity: any;

  form!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {
    super();
  }

  override ngOnInit(): void {
    this.route.url.subscribe(value => {
      this.refreshData();
    });
  }

  refreshData() {
    this.type = this.route.snapshot.url.map(fragment => fragment.path).includes('cer') ? 'cer' : 'user';

    if (this.type == 'cer') {
      this.form = this.fb.group({
        incentivo_immissione_f1: 0.21,
        incentivo_immissione_f2: 0.21,
        incentivo_immissione_f3: 0.21,
        costo_pannelli: 1400
      });

      this.selected_entity = this.locations.find((location: any) => location.id == this.route.snapshot.params['cer']);

    } else {
      this.form = this.fb.group({
        incentivo_autoconsumo_virtuale: 0.12,
        incentivo_autoconsumo_virtuale_produttori: 70,
        degrado_pannelli: 0.9,
        manutenzione_tasse: 15,
        co2_kwh: 0.53,
        co2_albero: 167,
      });

      this.selected_entity = this.users.find((user: any) => user.id == this.route.snapshot.params['utente']);
    }
  }
}
