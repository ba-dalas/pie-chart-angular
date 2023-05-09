import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';

import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';



@Component({
  selector: 'app-multi-axis-bart-chart',
  templateUrl: './multi-axis-bart-chart.component.html',
  styleUrls: ['./multi-axis-bart-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiAxisBartChartComponent {
  constructor() {

  }

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [ 65, 59, 80, 81, 56, 55, 40 ],
        label: 'Applications',
        backgroundColor: '#544BE9',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },

      {
        data: [ 180, 480, 770, 90, 1000, 270, 400 ],
        label: 'Disposed',
        yAxisID: 'y1',
        backgroundColor: '#6AD880',
        borderColor: 'red',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      }
    ],
    labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July' ]
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {

    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      y:
        {
          position: 'left',
        },
      y1: {
        position: 'right',
        grid: {
          display:false
          // color: 'rgba(255,0,0,0.3)',
        },
        // ticks: {
        //   color: 'red'
        // }
      }
    },

    plugins: {
      legend: { display: true },
      datalabels: {
        color: 'white',
        anchor: 'end',
        align: 'start'
      },

    }
  };

  public lineChartType: ChartType = 'bar';
  public barChartPlugins = [
    DataLabelsPlugin
  ];



  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }
  }
