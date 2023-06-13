import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
  Math = Math;

  currencyOptions = {
    align: "right",
    allowNegative: false,
    decimal: ",",
    precision: 2,
    prefix: "",
    thousands: "."
  };

  locations: any = [
    // { id: null, name: 'Tutti' },
    {
      id: 1,
      name: 'Alessandria',
      data:
      {
        users: {
          min: 1,
          max: 4
        },
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
            label: 'Autoconsumo virtuale',
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
        valori_annuali: [
          {
            label: 'Immesso in rete',
            value: 37051.57,
            unit: 'kWh',
            ricavi_spese: 7780
          },
          {
            label: 'Autoconsumo diretto',
            value: 3610.70,
            unit: 'kWh',
            ricavi_spese: 1444
          },
          {
            label: 'Autoconsumo diffuso',
            value: 17088.85,
            unit: 'kWh',
            ricavi_spese: 2033
          },
          {
            label: 'Consumo annuale',
            value: 36920.38,
            unit: 'kWh',
            ricavi_spese: 14788
          }
        ],
        proiezione: [
          {
            label: 'Manutenzione e SW',
            unit: '€',
            value: 4200,
          },
          {
            label: 'Ricavo in 20 anni',
            unit: '€',
            value: 120000,

          },
          {
            label: 'Guadagno in 20 anni',
            unit: '€',
            value: 110000,
          },
          {
            label: 'Recupero in anni',
            unit: 'anni',
            value: 3.97,

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
            label: 'Autoconsumo virtuale',
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
        ],
        charts: [
          {
            values: [8518.390672884574, 11941.336335085494, 16477.816687180904, 22356.74421265277, 3150.4338877199, 28563.13030972426, 29921.680381390004, 27564.394887272043, 19897.159183827967, 16551.172855382327, 11866.926297344533, 80966.814289535674]
          },
          {
            values: [7981.782942076948, 9793.174557132972, 13893.808491555767, 16136.894716135968, 18711.300865012417, 17623.057577372063, 18317.328242035743, 11006.632055532391, 16204.982631529636, 13747.70193847012, 11096.335334405723, 7573.583754783867]
          }
        ],
        parameters: {
          incentivo_immissione_f1: 0.21,
          incentivo_immissione_f2: 0.21,
          incentivo_immissione_f3: 0.21,
          incentivo_autoconsumo_virtuale: 0.12,
          incentivo_autoconsumo_virtuale_produttori: 70,
          degrado_pannelli: 0.9,
          manutenzione_tasse: 15,
          co2_kwh: 0.53,
          costo_pannelli: 1400
        }
      },
      png: './assets/img/Alessandria.jpg',
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45211.60338882542!2d8.556058419943199!3d44.90858568301426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47877431ed416505%3A0xd647f5990f0c62d9!2sAlessandria%20AL!5e0!3m2!1sit!2sit!4v1686561010953!5m2!1sit!2sit'
    },
    {
      id: 2,
      name: 'Asti',
      data:
      {
        users: {
          min: 4,
          max: 7
        },
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
            label: 'Autoconsumo virtuale',
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
        valori_annuali: [
          {
            label: 'Immesso in rete',
            value: 37051.57,
            unit: 'kWh',
            ricavi_spese: 7780
          },
          {
            label: 'Autoconsumo diretto',
            value: 3610.70,
            unit: 'kWh',
            ricavi_spese: 1444
          },
          {
            label: 'Autoconsumo diffuso',
            value: 17088.85,
            unit: 'kWh',
            ricavi_spese: 2033
          },
          {
            label: 'Consumo annuale',
            value: 36920.38,
            unit: 'kWh',
            ricavi_spese: 14788
          }
        ],
        proiezione: [
          {
            label: 'Manutenzione e SW',
            unit: '€',
            value: 4200,
          },
          {
            label: 'Ricavo in 20 anni',
            unit: '€',
            value: 120000,

          },
          {
            label: 'Guadagno in 20 anni',
            unit: '€',
            value: 110000,
          },
          {
            label: 'Recupero in anni',
            unit: 'anni',
            value: 3.97,

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
            label: 'Autoconsumo virtuale',
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
        ],
        charts: [
          {
            values: [8718.390672884574, 10941.336335085494, 15477.816687180904, 21356.74421265277, 29180.4338877199, 27563.13030972426, 28921.680381390004, 26564.394887272043, 18897.159183827967, 15551.172855382327, 10866.926297344533, 7966.814289535674]
          },
          {
            values: [7881.782942076948, 9693.174557132972, 12893.808491555767, 15136.894716135968, 17711.300865012417, 16623.057577372063, 17317.328242035743, 10006.632055532391, 15204.982631529636, 12747.70193847012, 10096.335334405723, 7473.583754783867]
          }
        ],
        parameters: {
          incentivo_immissione_f1: 0.23,
          incentivo_immissione_f2: 0.24,
          incentivo_immissione_f3: 0.25,
          incentivo_autoconsumo_virtuale: 0.17,
          incentivo_autoconsumo_virtuale_produttori: 68,
          degrado_pannelli: 0.75,
          manutenzione_tasse: 13.4,
          co2_kwh: 0.50,
          costo_pannelli: 1513
        }
      },
      png: './assets/img/Asti.jpg',
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1458448.9531610203!2d8.68674181063658!3d44.40332029475741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4787933cd27f8277%3A0xe7347bb67fb9d561!2s14100%20Asti%20AT!5e0!3m2!1sit!2sit!4v1686561203041!5m2!1sit!2sit'
    },
    {
      id: 3,
      name: 'Matera',
      data:
      {
        users: {
          min: 7,
          max: 8
        },
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
            label: 'Autoconsumo virtuale',
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
        valori_annuali: [
          {
            label: 'Immesso in rete',
            value: 37051.57,
            unit: 'kWh',
            ricavi_spese: 7780
          },
          {
            label: 'Autoconsumo diretto',
            value: 3610.70,
            unit: 'kWh',
            ricavi_spese: 1444
          },
          {
            label: 'Autoconsumo diffuso',
            value: 17088.85,
            unit: 'kWh',
            ricavi_spese: 2033
          },
          {
            label: 'Consumo annuale',
            value: 36920.38,
            unit: 'kWh',
            ricavi_spese: 14788
          }
        ],
        proiezione: [
          {
            label: 'Manutenzione e SW',
            unit: '€',
            value: 4200,
          },
          {
            label: 'Ricavo in 20 anni',
            unit: '€',
            value: 120000,

          },
          {
            label: 'Guadagno in 20 anni',
            unit: '€',
            value: 110000,
          },
          {
            label: 'Recupero in anni',
            unit: 'anni',
            value: 3.97,

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
            label: 'Autoconsumo virtuale',
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
        ],
        charts: [
          {
            values: [8718.390672884574, 10941.336335085494, 15477.816687180904, 21356.74421265277, 29180.4338877199, 27563.13030972426, 28921.680381390004, 26564.394887272043, 18897.159183827967, 15551.172855382327, 10866.926297344533, 7966.814289535674]
          },
          {
            values: [7881.782942076948, 9693.174557132972, 12893.808491555767, 15136.894716135968, 17711.300865012417, 16623.057577372063, 17317.328242035743, 10006.632055532391, 15204.982631529636, 12747.70193847012, 10096.335334405723, 7473.583754783867]
          }
        ],
        parameters: {
          incentivo_immissione_f1: 0.20,
          incentivo_immissione_f2: 0.22,
          incentivo_immissione_f3: 0.24,
          incentivo_autoconsumo_virtuale: 0.12,
          incentivo_autoconsumo_virtuale_produttori: 70,
          degrado_pannelli: 0.9,
          manutenzione_tasse: 15,
          co2_kwh: 0.53,
          costo_pannelli: 1380
        }
      },
      png: './assets/img/Matera.jpg',
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24211.387857632533!2d16.579529348712352!3d40.6646372227786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13477ee2482b152b%3A0x8f6a4ae10da9360!2s75100%20Matera%20MT!5e0!3m2!1sit!2sit!4v1686561044713!5m2!1sit!2sit'
    },
    {
      id: 4,
      name: 'Valdarno',
      data:
      {
        users: {
          min: 8,
          max: 11
        },
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
            label: 'Autoconsumo virtuale',
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
        valori_annuali: [
          {
            label: 'Immesso in rete',
            value: 37051.57,
            unit: 'kWh',
            ricavi_spese: 7780
          },
          {
            label: 'Autoconsumo diretto',
            value: 3610.70,
            unit: 'kWh',
            ricavi_spese: 1444
          },
          {
            label: 'Autoconsumo diffuso',
            value: 17088.85,
            unit: 'kWh',
            ricavi_spese: 2033
          },
          {
            label: 'Consumo annuale',
            value: 36920.38,
            unit: 'kWh',
            ricavi_spese: 14788
          }
        ],
        proiezione: [
          {
            label: 'Manutenzione e SW',
            unit: '€',
            value: 4200,
          },
          {
            label: 'Ricavo in 20 anni',
            unit: '€',
            value: 120000,

          },
          {
            label: 'Guadagno in 20 anni',
            unit: '€',
            value: 110000,
          },
          {
            label: 'Recupero in anni',
            unit: 'anni',
            value: 3.97,

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
            label: 'Autoconsumo virtuale',
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
        ],
        charts: [
          {
            values: [8718.390672884574, 10941.336335085494, 15477.816687180904, 21356.74421265277, 29180.4338877199, 27563.13030972426, 28921.680381390004, 26564.394887272043, 18897.159183827967, 15551.172855382327, 10866.926297344533, 7966.814289535674]
          },
          {
            values: [7881.782942076948, 9693.174557132972, 12893.808491555767, 15136.894716135968, 17711.300865012417, 16623.057577372063, 17317.328242035743, 10006.632055532391, 15204.982631529636, 12747.70193847012, 10096.335334405723, 7473.583754783867]
          }
        ],
        parameters: {
          incentivo_immissione_f1: 0.20,
          incentivo_immissione_f2: 0.22,
          incentivo_immissione_f3: 0.24,
          incentivo_autoconsumo_virtuale: 0.12,
          incentivo_autoconsumo_virtuale_produttori: 70,
          degrado_pannelli: 0.9,
          manutenzione_tasse: 15,
          co2_kwh: 0.53,
          costo_pannelli: 1380
        }
      },
      png: './assets/img/Valdarno.jpg',
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
            value: 15000,
            unit: '€',
          },
          {
            label: 'Risparmio autoconsumo annuo',
            value: 1500,
            unit: '€',
          },
          {
            label: 'Tariffa incentivante',
            value: 560,
            unit: '€',
          },
          {
            label: 'Vendita energia',
            value: 400,
            unit: '€',
          },
          {
            label: 'Totale ricavo annuo',
            value: 3500,
            unit: '€',
          },
          {
            label: 'Tempo di ritorno dell\'investimento',
            value: 9.3,
            unit: 'anni',
          }
        ],
        energetici: [
          {
            label: 'Emissioni CO2 evitate',
            value: 100,
            unit: 'Kg',
          },
          {
            label: 'Energia prodotta',
            value: 1245.2,
            unit: 'kWh',
          },
          {
            label: 'Autoconsumo virtuale',
            value: 2,
            unit: '%',
          },
          {
            label: 'Autoconsumo diretto',
            value: 2150,
            unit: 'kWh',
          },
          {
            label: 'Consumo fotovoltaico annuo',
            value: 0.1,
            unit: '%',
          },
          {
            label: 'Producibilità',
            value: 540,
            unit: 'kwH',
          }
        ],
        tails: [
          {
            icon: 'fa-area-chart',
            label: 'CO2 risparmiata',
            value: 0.12,
            unit: 'tonnellate',
          },
          {
            icon: 'fa-battery',
            label: 'Autoconsumo virtuale',
            value: 0.4,
            unit: '%',
          },
          {
            icon: 'fa-certificate',
            label: 'Autoconsumo diretto',
            value: 1060,
            unit: 'kWh',
          },
          {
            icon: 'fa-bolt',
            label: 'Cessione rete',
            value: 520,
            unit: 'kWh',
          },
          {
            icon: 'fa-sun',
            label: 'Energia prodotta',
            value: 362.1,
            unit: 'kWh',
          },
        ],
        charts: [
          {
            values: [8518.390672884574, 11941.336335085494, 16477.816687180904, 22356.74421265277, 3150.4338877199, 28563.13030972426, 29921.680381390004, 27564.394887272043, 19897.159183827967, 16551.172855382327, 11866.926297344533, 80966.814289535674]
          },
          {
            values: [7981.782942076948, 9793.174557132972, 13893.808491555767, 16136.894716135968, 18711.300865012417, 17623.057577372063, 18317.328242035743, 11006.632055532391, 16204.982631529636, 13747.70193847012, 11096.335334405723, 7573.583754783867]
          }
        ],
        parameters: {
          incentivo_autoconsumo_virtuale: 0.12,
          incentivo_autoconsumo_virtuale_produttori: 70,
          degrado_pannelli: 0.9,
          manutenzione_tasse: 15,
          co2_kwh: 0.53,
          co2_albero: 167,
          energia_consumata: 235.01,
          energia_generata: 1827.72
        },
        prosumer: {
          pod: 'IT001E000156741',
          acd: 6.85,
          acv: 0
        }
      },
    },
    {
      id: 2,
      name: 'Filippo Verdi',
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
            label: 'Autoconsumo virtuale',
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
            label: 'Autoconsumo virtuale',
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
        ],
        charts: [
          {
            values: [8718.390672884574, 10941.336335085494, 15477.816687180904, 21356.74421265277, 29180.4338877199, 27563.13030972426, 28921.680381390004, 26564.394887272043, 18897.159183827967, 15551.172855382327, 10866.926297344533, 7966.814289535674]
          },
          {
            values: [7881.782942076948, 9693.174557132972, 12893.808491555767, 15136.894716135968, 17711.300865012417, 16623.057577372063, 17317.328242035743, 10006.632055532391, 15204.982631529636, 12747.70193847012, 10096.335334405723, 7473.583754783867]
          }
        ],
        parameters: {
          incentivo_autoconsumo_virtuale: 0.12,
          incentivo_autoconsumo_virtuale_produttori: 70,
          degrado_pannelli: 0.9,
          manutenzione_tasse: 15,
          co2_kwh: 0.53,
          co2_albero: 167,
          energia_consumata: 235.01,
          energia_generata: 1827.72
        },
        prosumer: {
          pod: 'IT001E00088596',
          acd: 10.16,
          acv: 0
        }
      },
    },
    {
      id: 3,
      name: 'Andrea Bianchi',
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
            label: 'Autoconsumo virtuale',
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
            label: 'Autoconsumo virtuale',
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
        ],
        charts: [
          {
            values: [8718.390672884574, 10941.336335085494, 15477.816687180904, 21356.74421265277, 29180.4338877199, 27563.13030972426, 28921.680381390004, 26564.394887272043, 18897.159183827967, 15551.172855382327, 10866.926297344533, 7966.814289535674]
          },
          {
            values: [7881.782942076948, 9693.174557132972, 12893.808491555767, 15136.894716135968, 17711.300865012417, 16623.057577372063, 17317.328242035743, 10006.632055532391, 15204.982631529636, 12747.70193847012, 10096.335334405723, 7473.583754783867]
          }
        ],
        parameters: {
          incentivo_autoconsumo_virtuale: 0.12,
          incentivo_autoconsumo_virtuale_produttori: 70,
          degrado_pannelli: 0.9,
          manutenzione_tasse: 15,
          co2_kwh: 0.53,
          co2_albero: 167,
          energia_consumata: 235.01,
          energia_generata: 1827.72
        },
        prosumer: {
          pod: 'IT001E00007856',
          acd: 4.78,
          acv: 0
        }
      },
    },
    {
      id: 4,
      name: 'Michele Tomaselli',
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
            label: 'Autoconsumo virtuale',
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
            label: 'Autoconsumo virtuale',
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
        ],
        charts: [
          {
            values: [8718.390672884574, 10941.336335085494, 15477.816687180904, 21356.74421265277, 29180.4338877199, 27563.13030972426, 28921.680381390004, 26564.394887272043, 18897.159183827967, 15551.172855382327, 10866.926297344533, 7966.814289535674]
          },
          {
            values: [7881.782942076948, 9693.174557132972, 12893.808491555767, 15136.894716135968, 17711.300865012417, 16623.057577372063, 17317.328242035743, 10006.632055532391, 15204.982631529636, 12747.70193847012, 10096.335334405723, 7473.583754783867]
          }
        ],
        parameters: {
          incentivo_autoconsumo_virtuale: 0.12,
          incentivo_autoconsumo_virtuale_produttori: 70,
          degrado_pannelli: 0.9,
          manutenzione_tasse: 15,
          co2_kwh: 0.53,
          co2_albero: 167,
          energia_consumata: 235.01,
          energia_generata: 1827.72
        },
        prosumer: {
          pod: 'IT001E00045872',
          acd: 7.99,
          acv: 0
        }
      },
    },
    {
      id: 5,
      name: 'Ettore Casalini',
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
            label: 'Autoconsumo virtuale',
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
            label: 'Autoconsumo virtuale',
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
        ],
        charts: [
          {
            values: [8718.390672884574, 10941.336335085494, 15477.816687180904, 21356.74421265277, 29180.4338877199, 27563.13030972426, 28921.680381390004, 26564.394887272043, 18897.159183827967, 15551.172855382327, 10866.926297344533, 7966.814289535674]
          },
          {
            values: [7881.782942076948, 9693.174557132972, 12893.808491555767, 15136.894716135968, 17711.300865012417, 16623.057577372063, 17317.328242035743, 10006.632055532391, 15204.982631529636, 12747.70193847012, 10096.335334405723, 7473.583754783867]
          }
        ],
        parameters: {
          incentivo_autoconsumo_virtuale: 0.12,
          incentivo_autoconsumo_virtuale_produttori: 70,
          degrado_pannelli: 0.9,
          manutenzione_tasse: 15,
          co2_kwh: 0.53,
          co2_albero: 167,
          energia_consumata: 235.01,
          energia_generata: 1827.72
        },
        prosumer: {
          pod: 'IT001E00096541',
          acd: 3.89,
          acv: 0
        }
      },
    },
    {
      id: 6,
      name: 'Giovanni Vicini',
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
            label: 'Autoconsumo virtuale',
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
            label: 'Autoconsumo virtuale',
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
        ],
        charts: [
          {
            values: [8718.390672884574, 10941.336335085494, 15477.816687180904, 21356.74421265277, 29180.4338877199, 27563.13030972426, 28921.680381390004, 26564.394887272043, 18897.159183827967, 15551.172855382327, 10866.926297344533, 7966.814289535674]
          },
          {
            values: [7881.782942076948, 9693.174557132972, 12893.808491555767, 15136.894716135968, 17711.300865012417, 16623.057577372063, 17317.328242035743, 10006.632055532391, 15204.982631529636, 12747.70193847012, 10096.335334405723, 7473.583754783867]
          }
        ],
        parameters: {
          incentivo_autoconsumo_virtuale: 0.12,
          incentivo_autoconsumo_virtuale_produttori: 70,
          degrado_pannelli: 0.9,
          manutenzione_tasse: 15,
          co2_kwh: 0.53,
          co2_albero: 167,
          energia_consumata: 235.01,
          energia_generata: 1827.72
        },
        prosumer: {
          pod: 'IT001E00095123',
          acd: 5.66,
          acv: 0
        }
      },
    },
    {
      id: 7,
      name: 'Carmelo Caserta',
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
            label: 'Autoconsumo virtuale',
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
            label: 'Autoconsumo virtuale',
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
        ],
        charts: [
          {
            values: [8718.390672884574, 10941.336335085494, 15477.816687180904, 21356.74421265277, 29180.4338877199, 27563.13030972426, 28921.680381390004, 26564.394887272043, 18897.159183827967, 15551.172855382327, 10866.926297344533, 7966.814289535674]
          },
          {
            values: [7881.782942076948, 9693.174557132972, 12893.808491555767, 15136.894716135968, 17711.300865012417, 16623.057577372063, 17317.328242035743, 10006.632055532391, 15204.982631529636, 12747.70193847012, 10096.335334405723, 7473.583754783867]
          }
        ],
        parameters: {
          incentivo_autoconsumo_virtuale: 0.12,
          incentivo_autoconsumo_virtuale_produttori: 70,
          degrado_pannelli: 0.9,
          manutenzione_tasse: 15,
          co2_kwh: 0.53,
          co2_albero: 167,
          energia_consumata: 235.01,
          energia_generata: 1827.72
        },
        prosumer: {
          pod: 'IT001E00074127',
          acd: 14.97,
          acv: 0
        }
      },
    },
    {
      id: 8,
      name: 'Vincenzo Leotta',
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
            label: 'Autoconsumo virtuale',
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
            label: 'Autoconsumo virtuale',
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
        ],
        charts: [
          {
            values: [8718.390672884574, 10941.336335085494, 15477.816687180904, 21356.74421265277, 29180.4338877199, 27563.13030972426, 28921.680381390004, 26564.394887272043, 18897.159183827967, 15551.172855382327, 10866.926297344533, 7966.814289535674]
          },
          {
            values: [7881.782942076948, 9693.174557132972, 12893.808491555767, 15136.894716135968, 17711.300865012417, 16623.057577372063, 17317.328242035743, 10006.632055532391, 15204.982631529636, 12747.70193847012, 10096.335334405723, 7473.583754783867]
          }
        ],
        parameters: {
          incentivo_autoconsumo_virtuale: 0.12,
          incentivo_autoconsumo_virtuale_produttori: 70,
          degrado_pannelli: 0.9,
          manutenzione_tasse: 15,
          co2_kwh: 0.53,
          co2_albero: 167,
          energia_consumata: 235.01,
          energia_generata: 1827.72
        },
        prosumer: {
          pod: 'IT001E00015008',
          acd: 6.77,
          acv: 0
        }
      },
    },
    {
      id: 9,
      name: 'Gaetano Agnesi',
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
            label: 'Autoconsumo virtuale',
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
            label: 'Autoconsumo virtuale',
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
        ],
        charts: [
          {
            values: [8718.390672884574, 10941.336335085494, 15477.816687180904, 21356.74421265277, 29180.4338877199, 27563.13030972426, 28921.680381390004, 26564.394887272043, 18897.159183827967, 15551.172855382327, 10866.926297344533, 7966.814289535674]
          },
          {
            values: [7881.782942076948, 9693.174557132972, 12893.808491555767, 15136.894716135968, 17711.300865012417, 16623.057577372063, 17317.328242035743, 10006.632055532391, 15204.982631529636, 12747.70193847012, 10096.335334405723, 7473.583754783867]
          }
        ],
        parameters: {
          incentivo_autoconsumo_virtuale: 0.12,
          incentivo_autoconsumo_virtuale_produttori: 70,
          degrado_pannelli: 0.9,
          manutenzione_tasse: 15,
          co2_kwh: 0.53,
          co2_albero: 167,
          energia_consumata: 235.01,
          energia_generata: 1827.72
        },
        prosumer: {
          pod: 'IT001E07800078',
          acd: 6.85,
          acv: 0
        }
      },
    },
    {
      id: 10,
      name: 'Gabriele Giuffrida',
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
            label: 'Autoconsumo virtuale',
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
            label: 'Autoconsumo virtuale',
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
        ],
        charts: [
          {
            values: [8718.390672884574, 10941.336335085494, 15477.816687180904, 21356.74421265277, 29180.4338877199, 27563.13030972426, 28921.680381390004, 26564.394887272043, 18897.159183827967, 15551.172855382327, 10866.926297344533, 7966.814289535674]
          },
          {
            values: [7881.782942076948, 9693.174557132972, 12893.808491555767, 15136.894716135968, 17711.300865012417, 16623.057577372063, 17317.328242035743, 10006.632055532391, 15204.982631529636, 12747.70193847012, 10096.335334405723, 7473.583754783867]
          }
        ],
        parameters: {
          incentivo_autoconsumo_virtuale: 0.12,
          incentivo_autoconsumo_virtuale_produttori: 70,
          degrado_pannelli: 0.9,
          manutenzione_tasse: 15,
          co2_kwh: 0.53,
          co2_albero: 167,
          energia_consumata: 235.01,
          energia_generata: 1827.72
        },
        prosumer: {
          pod: 'IT001E00456010',
          acd: 4.74,
          acv: 0
        }
      },
    },
    {
      id: 11,
      name: 'Emanuele Costa',
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
            label: 'Autoconsumo virtuale',
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
            label: 'Autoconsumo virtuale',
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
        ],
        charts: [
          {
            values: [8718.390672884574, 10941.336335085494, 15477.816687180904, 21356.74421265277, 29180.4338877199, 27563.13030972426, 28921.680381390004, 26564.394887272043, 18897.159183827967, 15551.172855382327, 10866.926297344533, 7966.814289535674]
          },
          {
            values: [7881.782942076948, 9693.174557132972, 12893.808491555767, 15136.894716135968, 17711.300865012417, 16623.057577372063, 17317.328242035743, 10006.632055532391, 15204.982631529636, 12747.70193847012, 10096.335334405723, 7473.583754783867]
          }
        ],
        parameters: {
          incentivo_autoconsumo_virtuale: 0.12,
          incentivo_autoconsumo_virtuale_produttori: 70,
          degrado_pannelli: 0.9,
          manutenzione_tasse: 15,
          co2_kwh: 0.53,
          co2_albero: 167,
          energia_consumata: 235.01,
          energia_generata: 1827.72
        },
        prosumer: {
          pod: 'IT001E00080011',
          acd: 9.45,
          acv: 0
        }
      },
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
