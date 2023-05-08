import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent  implements OnInit, OnChanges{

  @Input() barChartDataSets!:any ;
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;


  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.barChartData.labels= this.barChartDataSets.labels
    this.barChartData.datasets[0].data=this.barChartDataSets.data
    this.barChartData.datasets[0].backgroundColor=this.barChartDataSets.backgroundColor
    console.log('this.barChartDataSets.data labels=====', this.barChartDataSets.labels)
  }

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      // this portion for showing title
      legend: {
        display: false,
      },
      // All style will be added here
      datalabels: {
        color: 'white',
        anchor: 'center',
        align: 'center',
        font: {
          weight: 'bold'
        },
      },

    }
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DataLabelsPlugin
  ];


  public barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      {
        data: [],
        // label: 'Series A',
        backgroundColor: [ ],
      },

    ],
  };

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    // console.log(event, active);
  }

}
