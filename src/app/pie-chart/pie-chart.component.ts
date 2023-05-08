import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { ChartEvent, ChartType,  } from 'chart.js';
import { ChartConfiguration, ChartData, } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PieChartComponent implements OnInit, OnChanges {

  @Input() pieChartDataSets!:any ;

  @Output() pieChartClicked = new EventEmitter<ChartEvent>();

  public pieChartType: ChartType = 'pie';
  public pieChartPlugins = [ DatalabelsPlugin ];

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.pieChartData.labels= this.pieChartDataSets.labels
    this.pieChartData.datasets[0].data=this.pieChartDataSets.data
    this.pieChartData.datasets[0].backgroundColor=this.pieChartDataSets.backgroundColor
    console.log('this.pieChartDataSets.data=====', this.pieChartDataSets.data)
  }

  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    // this portion for showing title and its styling
    plugins: {
      legend: {
        display: true,
        position: 'left',
      },
      // All style will be added here and commented portion for showing title instead of value
      datalabels: {
        // formatter: (value, ctx) => {
        //   if (ctx.chart.data.labels) {
        //     return ctx.chart.data.labels[ctx.dataIndex];
        //   }
        // },
        color: 'white',
        anchor: 'end',
        align: 'start',
         font: {
              weight: 'bold'
            },
      },
    }

  };

  public pieChartData: ChartData<any> = {
    labels: [],
    datasets: [ {
      data:[],
      backgroundColor: [],

    } ],

  };

  chartClicked(event:any){
    console.log(event);
    this.pieChartClicked.emit(event);

  }

}


// public pieChartData: ChartData<any> = {
//   labels: [ 'রাজশাহী' , 'রংপুর', 'ময়মনসিংহ' , 'ঢাকা','চট্টগ্রাম','সিলেট','খুলনা', 'বরিশাল' ],
//   datasets: [ {
//     data:[ 300, 500, 100 ,200,400,600,700, 900],
//     backgroundColor: [
//       '#63b598',
//       '#ce7d78',
//       '#ea9e70',
//       '#a48a9e',
//       '#c6e1e8',
//       '#648177',
//       '#0d5ac1',
//       '#f205e6'
//     ],

//   } ],

// };
