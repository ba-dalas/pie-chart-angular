import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

import { Chart, ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { default as Annotation } from 'chartjs-plugin-annotation';
import { Location } from '@angular/common';
import { ChartDataSet } from '../model/chart';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LineChartComponent implements OnInit, OnChanges {
  @Input() lineChartDataSets!: ChartDataSet | null;

  @Output() lineChartClicked = new EventEmitter<ChartEvent>();
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [],
        // label: 'Series A',
        backgroundColor: [],
        borderColor: '#95DEE3',
        pointBackgroundColor: 'red',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
    ],
    labels: [],
  };

  constructor(private readonly location: Location) {
    Chart.register(Annotation);
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.lineChartDataSets && this.lineChartDataSets.value) {
      this.lineChartData.labels = this.lineChartDataSets.labels;
      this.lineChartData.datasets[0].data = this.lineChartDataSets.value[0];
      this.lineChartData.datasets[0].backgroundColor =
        this.lineChartDataSets.backgroundColor + '80';
      console.log('lineChartDataSets', this.lineChartDataSets);
    }

  }

  public lineChartOptions: ChartConfiguration['options'] = {
    maintainAspectRatio: false,

    elements: {
      line: {
        tension: 0.5,
      },
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.

      y: {
        position: 'left',
      },
    },

    plugins: {
      legend: { display: false },
    },
  };

  public lineChartType: ChartType = 'line';

  // events
  public chartClicked(event: any): void {
    console.log(event);
    this.lineChartClicked.emit(event);
  }

  goToBack() {
    this.location.back();
  }

  changeBorderColor(event:any){

    if(event.value==='cyan' ){
      this.lineChartData.datasets[0].borderColor = '#95DEE3'
    }

    if(event.value==='blue' ){
      this.lineChartData.datasets[0].borderColor = '#483D8B'
    }

    if(event.value==='green' ){
      this.lineChartData.datasets[0].borderColor = '#228B22'
    }

    this.chart?.render();
  }

  changeBackgroundColor(event:any){

    if(event.value==='sky' ){
      this.lineChartData.datasets[0].backgroundColor = '#95DEE3' + '80';
    }

    if(event.value==='green' ){
      this.lineChartData.datasets[0].backgroundColor = '#228B22' + '80';
    }

    if(event.value==='violet' ){
      this.lineChartData.datasets[0].backgroundColor = ' #8A2BE2' + '80';
    }

    this.chart?.render();
  }

  changePointerColor(event:any){

    // if(event.value==='violet' && this.lineChartData.datasets){

    //   // this.lineChartData.datasets?.pointBackgroundColor
    //   // this.changePointerColor.lineChartData.data.datasets[0].pointBackgroundColor[i] = 'blue';
    // }



    // if(event.value==='sky' && this.lineChartData.datasets ){
    //   this.lineChartData.datasets[0].hoverBackgroundColor
    // }



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
