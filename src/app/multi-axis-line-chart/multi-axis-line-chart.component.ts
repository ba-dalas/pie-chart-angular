import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

import { Chart, ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { Location } from '@angular/common';
import { ChartDataSet } from '../model/chart';
import { BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'app-multi-axis-line-chart',
  templateUrl: './multi-axis-line-chart.component.html',
  styleUrls: ['./multi-axis-line-chart.component.scss']
})
export class MultiAxisLineChartComponent implements OnInit, OnChanges {

  @Input() multiAxisLineChartDataSets!: ChartDataSet | null;

  @Output() lineChartClicked = new EventEmitter<ChartEvent>();
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;


  constructor(private readonly location: Location) {


  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {

    if (this.multiAxisLineChartDataSets && this.multiAxisLineChartDataSets.value  && this.multiAxisLineChartDataSets.backgroundColor
      && this.multiAxisLineChartDataSets.captions){
      this.lineChartData.labels= this.multiAxisLineChartDataSets.labels
      this.lineChartData.datasets[0].data= this.multiAxisLineChartDataSets.value[0]
      this.lineChartData.datasets[1].data= this.multiAxisLineChartDataSets.value[1]
      this.lineChartData.datasets[0].backgroundColor= this.multiAxisLineChartDataSets.backgroundColor[0]+'80'
      this.lineChartData.datasets[1].backgroundColor= this.multiAxisLineChartDataSets.backgroundColor[1]+'80'
      this.lineChartData.datasets[0].label= this.multiAxisLineChartDataSets.captions[0]
      this.lineChartData.datasets[1].label= this.multiAxisLineChartDataSets.captions[1]

    }

  }


  public lineChartData: ChartConfiguration['data'] = {
    datasets: [

      {
        data: [],
        label: '',
        backgroundColor: '',
        borderColor: '#3F7D20'+ '80' ,
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
      {
        data: [ ],
        label: '',
        backgroundColor: '',
        borderColor: '#FAA916' + '80',
        pointBackgroundColor: 'red',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(77,83,96,1)',
        fill: 'origin',

      },

    ],
    labels: [ ]
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    maintainAspectRatio: false,
    elements: {
      line: {
        tension: 0.5
      }
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      y:
        {
          position: 'left',
        },

    },

    plugins: {
      legend: { display: true },

    }
  };

  public lineChartType: ChartType = 'line';


  // events
  public chartClicked(event:any): void {
    console.log(event);
    this.lineChartClicked.emit(event);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    // console.log(event, active);
  }

  goToBack(){
    this.location.back();
  }

  changeLegend(event:any){
    console.log(event.value)
    if(event.value==='left' && this.lineChartOptions?.plugins?.legend ){
      this.lineChartOptions.plugins.legend.position='left';
    }
    if(event.value==='right' && this.lineChartOptions?.plugins?.legend ){
      this.lineChartOptions.plugins.legend.position='right';
    }

    if(event.value==='top' && this.lineChartOptions?.plugins?.legend ){
      this.lineChartOptions.plugins.legend.position='top';
    }

    if(event.value==='bottom' && this.lineChartOptions?.plugins?.legend ){
      this.lineChartOptions.plugins.legend.position='bottom';
    }

    this.chart?.render();
  }

  changeBorderColor(event:any){

    if(event.value==='green' ){
      this.lineChartData.datasets[0].borderColor = '#95DEE3'
      this.lineChartData.datasets[1].borderColor = '#228B22'
    }

    if(event.value==='blue' ){
      this.lineChartData.datasets[0].borderColor = '#483D8B'
      this.lineChartData.datasets[1].borderColor = '#95DEE3'
    }

    if(event.value==='red' ){
      this.lineChartData.datasets[0].borderColor = '#DC143C'
      this.lineChartData.datasets[1].borderColor = '#00CED1'
    }

    this.chart?.render();
  }

  changeBackgroundColor(event:any){

    if(event.value==='sky' ){
      this.lineChartData.datasets[0].backgroundColor = '#95DEE3' + '80';
      this.lineChartData.datasets[1].backgroundColor = '#228B22' + '80';
    }

    if(event.value==='green' ){
      this.lineChartData.datasets[0].backgroundColor = '#228B22' + '80';
      this.lineChartData.datasets[1].backgroundColor = '#ADFF2F' + '80';
    }

    if(event.value==='violet' ){
      this.lineChartData.datasets[0].backgroundColor = '#8A2BE2' + '80';
      this.lineChartData.datasets[1].backgroundColor = '#6B8E23' + '80';
    }

    this.chart?.render();
  }



}
