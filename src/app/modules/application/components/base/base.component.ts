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
    {
      id: 1,
      name: 'Alessandria',
      data:
      {
        economici: [
          {
            label: 'Investimento totale',
            value: 65000,
            unit: '€',
          },
          {
            label: 'Risparmio autoconsumo annuo',
            value: 5979,
            unit: '€',
          },
          {
            label: 'Tariffa incentivante',
            value: 1484,
            unit: '€',
          },
          {
            label: 'Vendita energia',
            value: 1452,
            unit: '€',
          },
          {
            label: 'Totale ricavo annuo',
            value: 8916,
            unit: '€',
          },
          {
            label: 'Tempo di ritorno dell\'investimento',
            value: 7.7,
            unit: 'anni',
          }
        ],
        energetici: [
          {
            label: 'Emissioni CO2 evitate',
            value: 14.04,
            unit: 'tonnellate',
          },
          {
            label: 'Energia prodotta',
            value: 52726.9,
            unit: 'kWh',
          },
          {
            label: 'Autoconsumo fisico',
            value: 60,
            unit: '%',
          },
          {
            label: 'Autoconsumo diretto',
            value: 160892,
            unit: 'kWh',
          },
          {
            label: 'Consumo fotovoltaico annuo',
            value: 3,
            unit: '%',
          },
          {
            label: 'Producibilità',
            value: 24000,
            unit: 'kwH',
          }
        ],
        tails: [
          {
            icon: 'fa-area-chart',
            label: 'CO2 risparmiata',
            value: 14.04,
            unit: 'tonnellate',
          },
          {
            icon: 'fa-battery',
            label: 'Autoconsumo fisico',
            value: 60,
            unit: '%',
          },
          {
            icon: 'fa-certificate',
            label: 'Autoconsumo diretto',
            value: 160892,
            unit: 'kWh',
          },
          {
            icon: 'fa-bolt',
            label: 'Cessione rete',
            value: 79108,
            unit: 'kWh',
          },
          {
            icon: 'fa-sun',
            label: 'Energia prodotta',
            value: 52726.9,
            unit: 'kWh',
          },
        ]
      },
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45211.60338882542!2d8.556058419943199!3d44.90858568301426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47877431ed416505%3A0xd647f5990f0c62d9!2sAlessandria%20AL!5e0!3m2!1sit!2sit!4v1686561010953!5m2!1sit!2sit'
    },
    {
      id: 2,
      name: 'Asti',
      data:
      {
        economici: [
          {
            label: 'Investimento totale',
            value: 58250,
            unit: '€',
          },
          {
            label: 'Risparmio autoconsumo annuo',
            value: 5379,
            unit: '€',
          },
          {
            label: 'Tariffa incentivante',
            value: 1462,
            unit: '€',
          },
          {
            label: 'Vendita energia',
            value: 1318,
            unit: '€',
          },
          {
            label: 'Totale ricavo annuo',
            value: 8777,
            unit: '€',
          },
          {
            label: 'Tempo di ritorno dell\'investimento',
            value: 8.4,
            unit: 'anni',
          }
        ],
        energetici: [
          {
            label: 'Emissioni CO2 evitate',
            value: 12.04,
            unit: 'tonnellate',
          },
          {
            label: 'Energia prodotta',
            value: 48726.9,
            unit: 'kWh',
          },
          {
            label: 'Autoconsumo fisico',
            value: 58,
            unit: '%',
          },
          {
            label: 'Autoconsumo diretto',
            value: 158892,
            unit: 'kWh',
          },
          {
            label: 'Consumo fotovoltaico annuo',
            value: 2.9,
            unit: '%',
          },
          {
            label: 'Producibilità',
            value: 23654,
            unit: 'kwH',
          }
        ],
        tails: [
          {
            icon: 'fa-area-chart',
            label: 'CO2 risparmiata',
            value: 12.04,
            unit: 'tonnellate',
          },
          {
            icon: 'fa-battery',
            label: 'Autoconsumo fisico',
            value: 58,
            unit: '%',
          },
          {
            icon: 'fa-certificate',
            label: 'Autoconsumo diretto',
            value: 158892,
            unit: 'kWh',
          },
          {
            icon: 'fa-bolt',
            label: 'Cessione rete',
            value: 64106,
            unit: 'kWh',
          },
          {
            icon: 'fa-sun',
            label: 'Energia prodotta',
            value: 48726.9,
            unit: 'kWh',
          },
        ]
      },
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1458448.9531610203!2d8.68674181063658!3d44.40332029475741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4787933cd27f8277%3A0xe7347bb67fb9d561!2s14100%20Asti%20AT!5e0!3m2!1sit!2sit!4v1686561203041!5m2!1sit!2sit'
    },
    {
      id: 3,
      name: 'Matera',
      data:
      {
        economici: [
          {
            label: 'Investimento totale',
            value: 65000,
            unit: '€',
          },
          {
            label: 'Risparmio autoconsumo annuo',
            value: 5979,
            unit: '€',
          },
          {
            label: 'Tariffa incentivante',
            value: 1484,
            unit: '€',
          },
          {
            label: 'Vendita energia',
            value: 1452,
            unit: '€',
          },
          {
            label: 'Totale ricavo annuo',
            value: 8916,
            unit: '€',
          },
          {
            label: 'Tempo di ritorno dell\'investimento',
            value: 7.7,
            unit: 'anni',
          }
        ],
        energetici: [
          {
            label: 'Emissioni CO2 evitate',
            value: 14.04,
            unit: 'tonnellate',
          },
          {
            label: 'Energia prodotta',
            value: 52726.9,
            unit: 'kWh',
          },
          {
            label: 'Autoconsumo fisico',
            value: 60,
            unit: '%',
          },
          {
            label: 'Autoconsumo diretto',
            value: 160892,
            unit: 'kWh',
          },
          {
            label: 'Consumo fotovoltaico annuo',
            value: 3,
            unit: '%',
          },
          {
            label: 'Producibilità',
            value: 24000,
            unit: 'kwH',
          }
        ],
        tails: [
          {
            icon: 'fa-area-chart',
            label: 'CO2 risparmiata',
            value: 14.04,
            unit: 'tonnellate',
          },
          {
            icon: 'fa-battery',
            label: 'Autoconsumo fisico',
            value: 60,
            unit: '%',
          },
          {
            icon: 'fa-certificate',
            label: 'Autoconsumo diretto',
            value: 160892,
            unit: 'kWh',
          },
          {
            icon: 'fa-bolt',
            label: 'Cessione rete',
            value: 79108,
            unit: 'kWh',
          },
          {
            icon: 'fa-sun',
            label: 'Energia prodotta',
            value: 52726.9,
            unit: 'kWh',
          },
        ]
      },
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24211.387857632533!2d16.579529348712352!3d40.6646372227786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13477ee2482b152b%3A0x8f6a4ae10da9360!2s75100%20Matera%20MT!5e0!3m2!1sit!2sit!4v1686561044713!5m2!1sit!2sit'
    },
    {
      id: 4,
      name: 'Valdarno',
      data:
      {
        economici: [
          {
            label: 'Investimento totale',
            value: 65000,
            unit: '€',
          },
          {
            label: 'Risparmio autoconsumo annuo',
            value: 5979,
            unit: '€',
          },
          {
            label: 'Tariffa incentivante',
            value: 1484,
            unit: '€',
          },
          {
            label: 'Vendita energia',
            value: 1452,
            unit: '€',
          },
          {
            label: 'Totale ricavo annuo',
            value: 8916,
            unit: '€',
          },
          {
            label: 'Tempo di ritorno dell\'investimento',
            value: 7.7,
            unit: 'anni',
          }
        ],
        energetici: [
          {
            label: 'Emissioni CO2 evitate',
            value: 14.04,
            unit: 'tonnellate',
          },
          {
            label: 'Energia prodotta',
            value: 52726.9,
            unit: 'kWh',
          },
          {
            label: 'Autoconsumo fisico',
            value: 60,
            unit: '%',
          },
          {
            label: 'Autoconsumo diretto',
            value: 160892,
            unit: 'kWh',
          },
          {
            label: 'Consumo fotovoltaico annuo',
            value: 3,
            unit: '%',
          },
          {
            label: 'Producibilità',
            value: 24000,
            unit: 'kwH',
          }
        ],
        tails: [
          {
            icon: 'fa-area-chart',
            label: 'CO2 risparmiata',
            value: 14.04,
            unit: 'tonnellate',
          },
          {
            icon: 'fa-battery',
            label: 'Autoconsumo fisico',
            value: 60,
            unit: '%',
          },
          {
            icon: 'fa-certificate',
            label: 'Autoconsumo diretto',
            value: 160892,
            unit: 'kWh',
          },
          {
            icon: 'fa-bolt',
            label: 'Cessione rete',
            value: 79108,
            unit: 'kWh',
          },
          {
            icon: 'fa-sun',
            label: 'Energia prodotta',
            value: 52726.9,
            unit: 'kWh',
          },
        ]
      },
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11528.401088539897!2d11.239700272809472!3d43.750014487872534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a515fcef39c49%3A0xf6465df1bbd074b7!2sValdarno!5e0!3m2!1sit!2sit!4v1686560296406!5m2!1sit!2sit'
    }
  ];

  users: any = [
    { id: null, name: 'Tutti' },
    {
      id: 1,
      name: 'Mario Rossi',
      data:
      {
        economici: [
          {
            label: 'Investimento totale',
            value: 65000,
            unit: '€',
          },
          {
            label: 'Risparmio autoconsumo annuo',
            value: 5979,
            unit: '€',
          },
          {
            label: 'Tariffa incentivante',
            value: 1484,
            unit: '€',
          },
          {
            label: 'Vendita energia',
            value: 1452,
            unit: '€',
          },
          {
            label: 'Totale ricavo annuo',
            value: 8916,
            unit: '€',
          },
          {
            label: 'Tempo di ritorno dell\'investimento',
            value: 7.7,
            unit: 'anni',
          }
        ],
        energetici: [
          {
            label: 'Emissioni CO2 evitate',
            value: 14.04,
            unit: 'tonnellate',
          },
          {
            label: 'Energia prodotta',
            value: 52726.9,
            unit: 'kWh',
          },
          {
            label: 'Autoconsumo fisico',
            value: 60,
            unit: '%',
          },
          {
            label: 'Autoconsumo diretto',
            value: 160892,
            unit: 'kWh',
          },
          {
            label: 'Consumo fotovoltaico annuo',
            value: 3,
            unit: '%',
          },
          {
            label: 'Producibilità',
            value: 24000,
            unit: 'kwH',
          }
        ],
        tails: [
          {
            label: 'Cessione rete',
            value: 79108,
            unit: 'kWh',
          }
        ]
      }
    },
    {
      id: 2,
      name: 'Filippo Verdi',
      data:
      {
        economici: [
          {
            label: 'Investimento totale',
            value: 65000,
            unit: '€',
          },
          {
            label: 'Risparmio autoconsumo annuo',
            value: 5979,
            unit: '€',
          },
          {
            label: 'Tariffa incentivante',
            value: 1484,
            unit: '€',
          },
          {
            label: 'Vendita energia',
            value: 1452,
            unit: '€',
          },
          {
            label: 'Totale ricavo annuo',
            value: 8916,
            unit: '€',
          },
          {
            label: 'Tempo di ritorno dell\'investimento',
            value: 7.7,
            unit: 'anni',
          }
        ],
        energetici: [
          {
            label: 'Emissioni CO2 evitate',
            value: 14.04,
            unit: 'tonnellate',
          },
          {
            label: 'Energia prodotta',
            value: 52726.9,
            unit: 'kWh',
          },
          {
            label: 'Autoconsumo fisico',
            value: 60,
            unit: '%',
          },
          {
            label: 'Autoconsumo diretto',
            value: 160892,
            unit: 'kWh',
          },
          {
            label: 'Consumo fotovoltaico annuo',
            value: 3,
            unit: '%',
          },
          {
            label: 'Producibilità',
            value: 24000,
            unit: 'kwH',
          }
        ],
        tails: [
          {
            label: 'Cessione rete',
            value: 79108,
            unit: 'kWh',
          }
        ]
      }
    },
    {
      id: 3,
      name: 'Andrea Bianchi',
      data:
      {
        economici: [
          {
            label: 'Investimento totale',
            value: 65000,
            unit: '€',
          },
          {
            label: 'Risparmio autoconsumo annuo',
            value: 5979,
            unit: '€',
          },
          {
            label: 'Tariffa incentivante',
            value: 1484,
            unit: '€',
          },
          {
            label: 'Vendita energia',
            value: 1452,
            unit: '€',
          },
          {
            label: 'Totale ricavo annuo',
            value: 8916,
            unit: '€',
          },
          {
            label: 'Tempo di ritorno dell\'investimento',
            value: 7.7,
            unit: 'anni',
          }
        ],
        energetici: [
          {
            label: 'Emissioni CO2 evitate',
            value: 14.04,
            unit: 'tonnellate',
          },
          {
            label: 'Energia prodotta',
            value: 52726.9,
            unit: 'kWh',
          },
          {
            label: 'Autoconsumo fisico',
            value: 60,
            unit: '%',
          },
          {
            label: 'Autoconsumo diretto',
            value: 160892,
            unit: 'kWh',
          },
          {
            label: 'Consumo fotovoltaico annuo',
            value: 3,
            unit: '%',
          },
          {
            label: 'Producibilità',
            value: 24000,
            unit: 'kwH',
          }
        ],
        tails: [
          {
            label: 'Cessione rete',
            value: 79108,
            unit: 'kWh',
          }
        ]
      }
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
