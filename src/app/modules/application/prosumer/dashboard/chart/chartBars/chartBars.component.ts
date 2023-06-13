import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chart, ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-chartBars',
  templateUrl: './chartBars.component.html',
  styleUrls: ['./chartBars.component.css']
})
export class ChartBarsComponent implements OnInit {
  @Input() data: any[] = [];

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
    labels: ["2022 Gen",
      "2022 Feb",
      "2022 Mar",
      "2022 Apr",
      "2022 Mag",
      "2022 Giu",
      "2022 Lug",
      "2022 Ago",
      "2022 Set",
      "2022 Ott",
      "2022 Nov",
      "2022 Dic"],
    datasets: [
      {
        data: this.data[0]?.values,
        label: 'Energia prodotta (kWh)',
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
      },
      {
        data: this.data[1]?.values,
        label: 'Energia consumata (kWh)',
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

  constructor(private route: ActivatedRoute) {
    // Chart.register(Annotation)
  }

  ngOnInit() {
    this.route.url.subscribe(value => {
      this.barChartData_.datasets[0].data = this.data[0]?.values;
      this.barChartData_.datasets[1].data = this.data[1]?.values;
      this.chart?.update();
    });
  }

}
