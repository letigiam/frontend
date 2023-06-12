import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-chartBars',
  templateUrl: './chartBars.component.html',
  styleUrls: ['./chartBars.component.css']
})
export class ChartBarsComponent implements OnInit {


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
      {
        data: [65, 59, 80, 81, 56, 55, 40, 28, 48, 40, 19, 36, 27, 60,],
        label: 'Energia prodotta',
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
      },
      {
        data: [28, 48, 40, 19, 86, 27, 90, 80, 48, 50, 45, 10, 50, 40],
        label: 'Energia consumata',
        backgroundColor: 'rgba(77,83,96,0.2)',
        borderColor: 'rgba(77,83,96,1)',
      }
    ],
  };

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    // console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    // console.log(event, active);
  }

  constructor() {
    // Chart.register(Annotation)
  }

  ngOnInit() {
  }

}
