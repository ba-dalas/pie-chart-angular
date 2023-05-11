import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

import { Chart, ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { Location } from '@angular/common';
import { MultiChartData } from '../model/multi-chart.model';


@Component({
  selector: 'app-multi-axis-line-chart',
  templateUrl: './multi-axis-line-chart.component.html',
  styleUrls: ['./multi-axis-line-chart.component.scss']
})
export class MultiAxisLineChartComponent implements OnInit, OnChanges {

  @Input() multiAxisLineChartDataSets!: MultiChartData[] | null;

  @Output() lineChartClicked = new EventEmitter<ChartEvent>();


  constructor(private readonly location: Location) {


  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {

    if (this.multiAxisLineChartDataSets && this.multiAxisLineChartDataSets.length > 0 && this.multiAxisLineChartDataSets[0].backgroundColor &&this.multiAxisLineChartDataSets[0].captions){
      this.lineChartData.labels= this.multiAxisLineChartDataSets[0].labels
      this.lineChartData.datasets[0].data= this.multiAxisLineChartDataSets[0].value1!
      this.lineChartData.datasets[1].data= this.multiAxisLineChartDataSets[0].value2!
      this.lineChartData.datasets[0].backgroundColor= this.multiAxisLineChartDataSets[0].backgroundColor[0]+'80'
      this.lineChartData.datasets[1].backgroundColor= this.multiAxisLineChartDataSets[0].backgroundColor[1]+'80'
      this.lineChartData.datasets[0].label= this.multiAxisLineChartDataSets[0].captions[0]
      this.lineChartData.datasets[1].label= this.multiAxisLineChartDataSets[0].captions[1]

    }

  }


  public lineChartData: ChartConfiguration['data'] = {
    datasets: [

      {
        data: [],
        label: 'Application',
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
        label: 'Disposed',
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

}
