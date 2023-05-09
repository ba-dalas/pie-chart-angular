import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';



@Component({
  selector: 'app-multi-axis-bart-chart',
  templateUrl: './multi-axis-bart-chart.component.html',
  styleUrls: ['./multi-axis-bart-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiAxisBartChartComponent implements OnInit, OnChanges{

  @Input() barChartDataSets!:any ;

  @Output() barChartClicked = new EventEmitter<ChartEvent>();


  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {

    console.log('this.barChartDataSets.data labels=====', this.barChartDataSets.labels)
  }


  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [ 8000, 1100, 9000, 5000 ],
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
        data:  [ 4000, 2000, 1000, 3000],
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
    labels: [ 'Dhaka', 'Rajshahi', 'Rangpur', 'Sylhet' ]
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
  public chartClicked(event:any): void {
    console.log(event);
  }

  public chartHovered(event:any): void {

  }
  }
