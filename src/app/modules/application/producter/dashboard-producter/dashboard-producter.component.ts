import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard-producter',
  templateUrl: './dashboard-producter.component.html',
  styleUrls: ['./dashboard-producter.component.scss']
})
export class DashboardProducterComponent implements OnInit {

  go = 0;
  id = 0;
  modify = false;
  form_type_of_Producter: FormGroup | any;
  type_of_Producter: string[] = ['Fotovoltaico'];
  type_of_Prosumer: FormGroup | any;
  producterArray = new Array();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
  ) {
    this.form_type_of_Producter = this.fb.group({
      id: '',
      name_prod: ['', Validators.required],
      type_of_Producter: 'Fotovoltaico',
      prod_energy: ['', Validators.required],
      date: moment().format('YYYY-MM-DD'),
    });

    this.producterArray = [{
      id: 0,
      name_prod: 'Produttore 1',
      type_of_Producter: 'Fotovoltaico',
      prod_energy: 10,
      date: '2017/02/05'
    }];
  }

  ngOnInit() {
  }


  goStep(index: number) {
    this.go = index;
  }

  nextGo() {
    this.go++;
  }

  prevGo() {
    this.go--;
  }

  getProducer(element: any) {
    this.modify = true;
    this.form_type_of_Producter.patchValue({
      id: element.id,
      name_prod: element.name_prod,
      type_of_Producter: element.type_of_Producter,
      prod_energy: element.prod_energy,
      date: moment(element.date).format('YYYY-MM-DD'),
    });
    this.go = 0 ? 0 : 1;
  }

  saveProd() {
    this.id++;
    this.form_type_of_Producter.patchValue({ id: this.id });
    Swal.fire({
      icon: 'success',
      title: '<div style="font-size:18px;">Produttore aggiunto</div>',
      showConfirmButton: false,
      timer: 1000,
    });
    setTimeout(() => {

      this.producterArray.push(this.form_type_of_Producter.value);
      console.log('presumer', this.form_type_of_Producter.value);

      this.form_type_of_Producter.reset();
    },
      2000);
  }

  // ripulisce il form
  clearForm() {
    this.modify = false;
    this.form_type_of_Producter.reset();
  }

  // modifica il form precedente
  modifyProd() {
    this.modify = true;
    this.producterArray.forEach((element, index) => {
      if (element.id == this.form_type_of_Producter.value.id) this.producterArray.splice(index, 1);
    });
    this.producterArray.push(this.form_type_of_Producter.value);
  }

  /**
 * passo l'id del produttore per poterlo eliminare
 * @param id del produttore
 */
  deleteProd(id: any) {
    setTimeout(() => {
      this.producterArray.forEach((element, index) => {
        if (element.id == id) this.producterArray.splice(index, 1);
      });

      Swal.fire({
        icon: 'error',
        title: '<div style="font-size:18px;">Produttore eliminato</div>',
        showConfirmButton: false,
        timer: 2000,
      });

      this.form_type_of_Producter.reset();
    },
      1000);
  }

  getFormattedDate(date: moment.MomentInput, format: string | undefined) {
    return moment(date).locale('it').format(format);
  }

}
