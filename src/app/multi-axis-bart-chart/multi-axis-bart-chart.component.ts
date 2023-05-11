import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { Location } from '@angular/common';
import { ChartDataSet } from '../model/chart';





@Component({
  selector: 'app-multi-axis-bart-chart',
  templateUrl: './multi-axis-bart-chart.component.html',
  styleUrls: ['./multi-axis-bart-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiAxisBartChartComponent implements OnInit, OnChanges{

  @Input() barChartDataSets!: ChartDataSet | null;

  @Output() barChartClicked = new EventEmitter<ChartEvent>();

  constructor(private readonly location: Location) {


  }


  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {


    if(this.barChartDataSets && this.barChartDataSets.value &&
      this.barChartDataSets.backgroundColor && this.barChartDataSets.captions ){
    this.barChartData.labels= this.barChartDataSets.labels
    this.barChartData.datasets[0].data= this.barChartDataSets.value[0]
    this.barChartData.datasets[1].data= this.barChartDataSets.value[1]
    this.barChartData.datasets[0].backgroundColor=this.barChartDataSets.backgroundColor[0]
    this.barChartData.datasets[1].backgroundColor=this.barChartDataSets.backgroundColor[1]
    this.barChartData.datasets[0].label=this.barChartDataSets.captions[0]
    this.barChartData.datasets[1].label=this.barChartDataSets.captions[1]

    console.log('value check', this.barChartDataSets.value[0])

    if (
      this.barChartOptions &&
      this.barChartOptions.plugins &&
      this.barChartOptions.plugins.datalabels
    ) {
      this.barChartOptions.plugins.datalabels.color = this.barChartDataSets.textColor;
    }

    console.log('this.barChartDataSets.data labels=====', this.barChartDataSets.labels)

    }

  }

  legend = 'Approved'

  public barChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [ ],
        label: this.legend,
        backgroundColor: '',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },

      {
        data:  [ ],
        label: '',
        yAxisID: 'y1',
        backgroundColor: '',
        borderColor: 'red',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      }
    ],
    labels: []
  };

  public barChartOptions: ChartConfiguration['options'] = {
    maintainAspectRatio: false,
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
        color: '',
        anchor: 'end',
        align: 'start'
      },

    }
  };

  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DataLabelsPlugin
  ];



  // events
  public chartClicked(event:any): void {
    console.log(event);
    this.barChartClicked.emit(event);
  }

  public chartHovered(event:any): void {}

  goToBack(){
    this.location.back();
  }

  }
