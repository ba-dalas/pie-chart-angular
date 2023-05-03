import { Component, } from '@angular/core';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { ChartType,  } from 'chart.js';
import { ChartConfiguration, ChartData, } from 'chart.js';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'ng2-charts-demo';
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: true,
        position: 'left',
      },
      datalabels: {
        // formatter: (value, ctx) => {
        //   if (ctx.chart.data.labels) {
        //     return ctx.chart.data.labels[ctx.dataIndex];
        //   }
        // },
        color: 'black',
        anchor: 'end',
        align: 'end',
      },


      // datalabels: {
      //   formatter: (value, ctx) => {
      //     if (ctx.chart.data.labels) {
      //       return ctx.chart.data.labels[ctx.dataIndex];
      //     }
      //   },
      // },
    }


  };
  public pieChartData: ChartData<any> = {
    labels: [ 'রাজশাহী' , 'রংপুর', 'ময়মনসিংহ' , 'ঢাকা','চট্টগ্রাম','সিলেট','খুলনা', 'বরিশাল' ],
    datasets: [ {
      data:[ 300, 500, 100 ,200,400,600,700, 900],
      backgroundColor: [
        '#63b598',
        '#ce7d78',
        '#ea9e70',
        '#a48a9e',
        '#c6e1e8',
        '#648177',
        '#0d5ac1',
        '#f205e6'
      ],


    } ],





  };


  public pieChartType: ChartType = 'pie';
  public pieChartPlugins = [ DatalabelsPlugin ];







}





