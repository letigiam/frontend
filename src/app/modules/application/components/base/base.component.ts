import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
  currencyOptions = {
    align: "right",
    allowNegative: false,
    decimal: ",",
    precision: 2,
    prefix: "",
    thousands: "."
  };

  locations: any = [
    { id: null, name: 'Tutti' },
    { id: 1, name: 'Alessandria' },
    { id: 2, name: 'Asti' },
    { id: 3, name: 'Matera' },
    { id: 4, name: 'Valdarno' }
  ];

  users: any = [
    { id: null, name: 'Tutti' },
    { id: 1, name: 'Mario Rossi' },
    { id: 2, name: 'Filippo Verdi' },
    { id: 3, name: 'Andrea Bianchi' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
