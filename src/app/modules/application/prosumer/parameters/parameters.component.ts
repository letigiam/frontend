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
      this.selected_entity = this.locations.find((location: any) => location.id == this.route.snapshot.params['cer']);

      this.form = this.fb.group({
        incentivo_immissione_f1: this.selected_entity.data.parameters.incentivo_immissione_f1,
        incentivo_immissione_f2: this.selected_entity.data.parameters.incentivo_immissione_f2,
        incentivo_immissione_f3: this.selected_entity.data.parameters.incentivo_immissione_f3,
        costo_pannelli: this.selected_entity.data.parameters.costo_pannelli
      });
    } else {
      this.selected_entity = this.users.find((user: any) => user.id == this.route.snapshot.params['utente']);

      this.form = this.fb.group({
        incentivo_autoconsumo_virtuale: this.selected_entity.data.parameters.incentivo_autoconsumo_virtuale,
        incentivo_autoconsumo_virtuale_produttori: this.selected_entity.data.parameters.incentivo_autoconsumo_virtuale_produttori,
        degrado_pannelli: this.selected_entity.data.parameters.degrado_pannelli,
        manutenzione_tasse: this.selected_entity.data.parameters.manutenzione_tasse,
        co2_kwh: this.selected_entity.data.parameters.co2_kwh,
        co2_albero: this.selected_entity.data.parameters.co2_albero,
      });
    }
  }
}
