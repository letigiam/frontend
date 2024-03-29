import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { BaseComponent } from '../../components/base/base.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends BaseComponent implements OnInit {
  override locations: any = this.locations;
  type: 'cer' | 'user' = 'cer';
  selected_entity: any;

  modify = false;
  step = 0;
  id = 0;
  show = false;
  type_of_Prosumer: FormGroup | any;
  type_of_consume = new FormControl('');
  energy_rating = new FormControl('');
  type_of_ProsumerList: string[] = ['Residenziale', 'Utenza condominiale residenziale', 'Ufficio', 'Scuola', 'Ristorante', 'Negozio'];
  type_of_consumeList: string[] = ['Consumo totale annuo in kWh', 'Consumo mensile per fasce'];
  energy_ratingList: string[] = ['Classe 1', 'Classe 2', 'Classe 3', 'Classe 4', 'Classe 5', 'Classe 6', 'Classe 7', 'Classe 8'];
  type_of_Producter: string[] = ['Fotovoltaico'];
  zone: string[] = ['Nord', 'Centro', 'Sud'];
  chooseVisually: string[] = ['Anno', 'mese'];
  choose: string | any;
  date = moment().format('YYYY-MM-DD');
  prosumerArray = new Array();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
  ) {
    super();

    this.type_of_Prosumer = this.fb.group({
      id: '',
      name: ['', Validators.required],
      type_of_ProsumerList: 'Residenziale',
      type_of_Producter: 'Fotovoltaico',
      type_of_energy: ['', Validators.required],
      zone: ['', Validators.required],
      prezzo_z_orario: ['', Validators.required],
      // trase_bt: ['', Validators.required],
      // date_prosumer: moment().format('YYYY-MM-DD'),
      // number_of_panels: ['', Validators.required],
      // available_surface: ['', Validators.required],
      type_of_consumeList: ['', Validators.required],
      energy_ratingList: ['', Validators.required],
    });

    this.prosumerArray = [{
      id: 0,
      name: 'Comune di Catania',
      type_of_ProsumerList: 'Residenziale',
      type_of_Producter: 'Fotovoltaico',
      type_of_energy: 25,
      zone: 'Sud',
      prezzo_z_orario: 100,
      // date_prosumer: '2017/02/05',
      // number_of_panels: 2,
      // available_surface: 80,
      type_of_consumeList: 'Consumo totale annuo in kWh',
      energy_ratingList: 'Classe 2',
    }];
  }

  override ngOnInit() {
    this.route.url.subscribe(value => {
      this.refreshData();
    });
    this.locations = this.locations.filter((location: any) => location.id != null)
  }

  refreshData() {
    this.type = this.route.snapshot.url.map(fragment => fragment.path).includes('cer') ? 'cer' : 'user';

    if (this.type == 'cer') {
      this.selected_entity = this.locations.find((location: any) => location.id == this.route.snapshot.params['cer']);
    } else {
      this.selected_entity = this.users.find((user: any) => user.id == this.route.snapshot.params['utente']);
    }
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }


  saveProsumer() {
    this.id++;
    this.type_of_Prosumer.patchValue({ id: this.id });
    Swal.fire({
      icon: 'success',
      title: '<div style="font-size:18px;">Prosumer aggiunto</div>',
      showConfirmButton: false,
      timer: 1000,
    });
    setTimeout(() => {
      this.prosumerArray.push(this.type_of_Prosumer.value);
      this.type_of_Prosumer.reset();
    },
      2000);
  }

  updateStep() {
    console.log('id', this.type_of_Prosumer.get('id').value);
  }

  getProsumer(element: any) {
    this.modify = true;
    this.type_of_Prosumer.patchValue({
      id: element.id,
      name: element.name,
      type_of_ProsumerList: element.type_of_ProsumerList,
      type_of_Producter: element.type_of_Producter,
      type_of_energy: element.type_of_energy,
      zone: element.zone,
      prezzo_z_orario: element.prezzo_z_orario,
      // trase_bt: element.trase_bt,
      // date_prosumer: moment(element.date_prosumer).format('YYYY-MM-DD'),
      // number_of_panels: element.number_of_panels,
      // available_surface: element.available_surface,
      type_of_consumeList: element.type_of_consumeList,
      energy_ratingList: element.energy_ratingList,
    });
    this.step = 0 ? 0 : 1;
  }

  // ripulisce il form
  clearForm() {
    this.modify = false;
    this.type_of_Prosumer.reset();
  }

  // modifica il form precedente
  modifyProd() {
    this.modify = true;
    // this.prosumerArray.forEach((element, index) => {
    //   if (element.id == this.type_of_Prosumer.value.id) this.prosumerArray.splice(index, 1);
    // });
    let array: any;
    array = this.prosumerArray.findIndex(obj => {
      if (obj.id == this.type_of_Prosumer.value.id) {
        obj.name = this.type_of_Prosumer.value.name,
          obj.type_of_ProsumerList = this.type_of_Prosumer.value.type_of_ProsumerList,
          obj.type_of_Producter = this.type_of_Prosumer.value.type_of_Producter,
          obj.type_of_energy = this.type_of_Prosumer.value.type_of_energy,
          obj.zone = this.type_of_Prosumer.value.zone,
          obj.prezzo_z_orario = this.type_of_Prosumer.value.prezzo_z_orario,
          // obj.trase_bt = this.type_of_Prosumer.value.trase_bt,
          // obj.number_of_panels = this.type_of_Prosumer.value.number_of_panels,
          // obj.available_surface = this.type_of_Prosumer.value.available_surface,
          obj.type_of_consumeList = this.type_of_Prosumer.value.type_of_consumeList,
          obj.energy_ratingList = this.type_of_Prosumer.value.energy_ratingList;
      }
      Swal.fire({
        icon: 'success',
        title: '<div style="font-size:18px;">Prosumer Modificato</div>',
        showConfirmButton: false,
        timer: 2000,
      });
      return array;
    })
  }

  /**
   * passo l'id del prosumer per poterlo eliminare
   * @param id del prosumer
   */
  deleteProsumer(id: any) {
    setTimeout(() => {
      this.prosumerArray.forEach((element, index) => {
        if (element.id == id) this.prosumerArray.splice(index, 1);
      });

      Swal.fire({
        icon: 'error',
        title: '<div style="font-size:18px;">Prosumer eliminato</div>',
        showConfirmButton: false,
        timer: 2000,
      });

      this.type_of_Prosumer.reset();
    },
      1000);
  }

  getFormattedDate(date: moment.MomentInput, format: string | undefined) {
    return moment(date).locale('it').format(format);
  }
}
