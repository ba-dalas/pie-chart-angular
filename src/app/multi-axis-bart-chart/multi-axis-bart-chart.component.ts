import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { Location } from '@angular/common';
import { MultiChartData } from '../model/multi-chart.model';



@Component({
  selector: 'app-multi-axis-bart-chart',
  templateUrl: './multi-axis-bart-chart.component.html',
  styleUrls: ['./multi-axis-bart-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiAxisBartChartComponent implements OnInit, OnChanges{

  @Input() barChartDataSets!: MultiChartData[] | null;

  @Output() barChartClicked = new EventEmitter<ChartEvent>();

  constructor(private readonly location: Location) {


  }


  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.barChartDataSets && this.barChartDataSets.length > 0  && this.barChartDataSets[0].backgroundColor&&this.barChartDataSets[0].captions){
    this.barChartData.labels= this.barChartDataSets[0].labels
    this.barChartData.datasets[0].data=this.barChartDataSets[0].value1!
    this.barChartData.datasets[1].data=this.barChartDataSets[0].value1!
    this.barChartData.datasets[0].backgroundColor=this.barChartDataSets[0].backgroundColor[0]
    this.barChartData.datasets[1].backgroundColor=this.barChartDataSets[0].backgroundColor[1]
    this.barChartData.datasets[0].label=this.barChartDataSets[0].captions[0]
    this.barChartData.datasets[1].label=this.barChartDataSets[0].captions[1]

    if (
      this.barChartOptions &&
      this.barChartOptions.plugins &&
      this.barChartOptions.plugins.datalabels
    ) {
      this.barChartOptions.plugins.datalabels.color = this.barChartDataSets[0].textColor;
    }

    console.log('this.barChartDataSets.data labels=====', this.barChartDataSets[0].labels)

    }

  }


  public barChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [ ],
        label: '',
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
