import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { Location } from '@angular/common';
import { ChartDataSet } from '../model/chart';
import { BaseChartDirective } from 'ng2-charts';





@Component({
  selector: 'app-multi-axis-bart-chart',
  templateUrl: './multi-axis-bart-chart.component.html',
  styleUrls: ['./multi-axis-bart-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiAxisBartChartComponent implements OnInit, OnChanges{

  @Input() barChartDataSets!: ChartDataSet | null;

  @Output() barChartClicked = new EventEmitter<ChartEvent>();
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

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

  changeLegend(event:any){
    console.log(event.value)
    if(event.value==='left' && this.barChartOptions?.plugins?.legend ){
      this.barChartOptions.plugins.legend.position='left';
    }
    if(event.value==='right' && this.barChartOptions?.plugins?.legend ){
      this.barChartOptions.plugins.legend.position='right';
    }

    if(event.value==='top' && this.barChartOptions?.plugins?.legend ){
      this.barChartOptions.plugins.legend.position='top';
    }

    if(event.value==='bottom' && this.barChartOptions?.plugins?.legend ){
      this.barChartOptions.plugins.legend.position='bottom';
    }

    this.chart?.render();
  }

  changeLabelPosition(event:any){
    console.log(event.value)
    if(event.value==='outside' &&  this.barChartOptions?.plugins?.datalabels ){
      this.barChartOptions.plugins.datalabels.anchor = 'end'
      this.barChartOptions.plugins.datalabels.align = 'end'
    }
    if(event.value==='start' &&  this.barChartOptions?.plugins?.datalabels ){
      this.barChartOptions.plugins.datalabels.anchor = 'end'
      this.barChartOptions.plugins.datalabels.align = 'start'
    }
    if(event.value==='center' && this.barChartOptions?.plugins?.datalabels ){
      this.barChartOptions.plugins.datalabels.anchor = 'center'
      this.barChartOptions.plugins.datalabels.align = 'center'
    }


    this.chart?.render();
  }

  changeBackgroundColor(event:any){

    if(event.value==='blue'  ){
      this.barChartData.datasets[0].backgroundColor='#544BE9'
      this.barChartData.datasets[1].backgroundColor='#6AD880'
    }

    if(event.value==='coral'  ){
      this.barChartData.datasets[0].backgroundColor='#DB7093'
      this.barChartData.datasets[1].backgroundColor='#ADFF2F'
    }

    if(event.value==='orange'  ){
      this.barChartData.datasets[0].backgroundColor='#708090'
      this.barChartData.datasets[1].backgroundColor='#6B8E23'
    }


    this.chart?.render();
  }

  changeTextColor(event:any){

    if(event.value==='white' && this.barChartOptions?.plugins?.datalabels ){
      this.barChartOptions.plugins.datalabels.color = '#ffffff'
    }

    if(event.value==='black' && this.barChartOptions?.plugins?.datalabels ){
      this.barChartOptions.plugins.datalabels.color = '#000000'
    }

    if(event.value==='green' && this.barChartOptions?.plugins?.datalabels ){
      this.barChartOptions.plugins.datalabels.color = '#2E8B57'
    }



    this.chart?.render();
  }

  changeGridLine(event:any){
    // scales: {
    //   x: {
    //     grid: {
    //       display: true,
    //     },
    //   },
    // if( this.barChartOptions?.scales ){
    //   this.barChartOptions.scales=true ;
    // }

    this.chart?.render();
  }

  }
