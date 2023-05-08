import { Component , EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild  } from '@angular/core';

import { Chart, ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts'
import { default as Annotation } from 'chartjs-plugin-annotation';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit, OnChanges {

  @Input() lineChartDataSets!:any ;

  @Output() lineChartClicked = new EventEmitter<ChartEvent>();
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data:[],
        // label: 'Series A',
        backgroundColor: '',
        borderColor: '',
        pointBackgroundColor: 'red',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },

    ],
    labels: [ ]
  };


  constructor() {
    Chart.register(Annotation)
  }


  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.lineChartData.labels= this.lineChartDataSets.labels
    this.lineChartData.datasets[0].data=this.lineChartDataSets.data
    this.lineChartData.datasets[0].backgroundColor=this.lineChartDataSets.backgroundColor+'80'
    this.lineChartData.datasets[0].borderColor=this.lineChartDataSets.borderColor+'80'
    // this.lineChartData.datasets[0].
    console.log('lineChartDataSets', this.lineChartDataSets)
  }



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
      legend: { display: false },
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

}



// public lineChartData: ChartConfiguration['data'] = {
//   datasets: [
//     {
//       data: [ 18, 54, 24,5],
//       // label: 'Series A',
//       backgroundColor: '#95DEE3'+ '80',
//       borderColor: '#95DEE3',
//       pointBackgroundColor: 'red',
//       pointBorderColor: '#fff',
//       pointHoverBackgroundColor: '#fff',
//       pointHoverBorderColor: 'rgba(148,159,177,0.8)',
//       fill: 'origin',
//     },

//   ],
//   labels: [ 'Feb-23', 'Mar-23', 'Apr-23', 'May-23' ]
// };
