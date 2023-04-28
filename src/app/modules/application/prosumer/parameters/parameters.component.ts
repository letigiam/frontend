import { Component, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.scss']
})
export class ParametersComponent implements OnInit {
  @ViewChildren('allCanvas') allCanvas: QueryList<any> | undefined;
  @Input() prosumerArray: any;
  show = false;

  // chart: any;
  choose = ['Anno', 'Mese'];
  period = 'Anno';

  public barChartOptions = {
    backgroundColor: "#194d6f",
    borderColor: "#194d6f",
    color: "#194d6f",
    elements: {
      line: {
        backgroundColor: "rgba(57, 79, 89, 0.304)",
        borderColor: "#194d6f"
      },
      arc: {
        backgroundColor: "rgba(57, 79, 89, 0.304)",
        borderColor: "#194d6f"
      }
    },
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = [
    "Gen",
    "Feb",
    "Mar",
    "Apr",
    "Mag",
    "Giu",
    "Lug",
    "Ago",
    "Set",
    "Ott",
    "Nov",
    "Dic"
  ];
  public barChartType = "line";
  public barChartLegend = true;
  public barChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40, 20, 10, 90, 45, 38], label: "Annuale" },
    // { data: [28, 48, 40, 19, 86, 27, 90], label: "Series B" }
  ];
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions_: ChartConfiguration['options'] = {
    backgroundColor: "#194d6f",
    borderColor: "#194d6f",
    color: "#194d6f",
    elements: {
      line: {
        backgroundColor: "rgba(57, 79, 89, 0.304)",
        borderColor: "#194d6f"
      },
      arc: {
        backgroundColor: "rgba(57, 79, 89, 0.304)",
        borderColor: "#194d6f"
      }
    },
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      },
      // datalabels: {
      //   anchor: 'end',
      //   align: 'end'
      // }
    }
  };
  public barChartType_: ChartType = 'line';
  public barChartPlugins = [
    // DataLabelsPlugin
  ];

  public barChartData_: ChartData<'bar'> = {
    labels: ["Gen",
      "Feb",
      "Mar",
      "Apr",
      "Mag",
      "Giu",
      "Lug",
      "Ago",
      "Set",
      "Ott",
      "Nov",
      "Dic"],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40, 20, 10, 90, 45, 38], label: 'Mensile' },
    ]
  };

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    // console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    // console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData_.datasets[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40];

    this.chart?.update();

  }


  constructor() { }

  ngOnInit() { }

  showChart() {

    this.show = true;
    this.allCanvas?.changes.subscribe(t => {
      window.scrollTo(0, document.body.scrollHeight);

    })

  }

}
