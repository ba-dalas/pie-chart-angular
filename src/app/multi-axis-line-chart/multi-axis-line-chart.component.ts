import { Component } from '@angular/core';

import { Chart, ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { default as Annotation } from 'chartjs-plugin-annotation';

@Component({
  selector: 'app-multi-axis-line-chart',
  templateUrl: './multi-axis-line-chart.component.html',
  styleUrls: ['./multi-axis-line-chart.component.scss']
})
export class MultiAxisLineChartComponent {
   // private newLabel? = 'New label';

   constructor() {
    // Chart.register(Annotation)
  }

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [

      {
        data: [ 123, 595, 594, 102, 92, 156 , 622, 487, 77],
        label: 'Application',
        backgroundColor: '#3F7D20'+ '80',
        borderColor: '#3F7D20'+ '80' ,
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
      {
        data: [ 507, 676, 636, 389,  217, 339 , 699, 740 , 107],
        label: 'Disposed',
        backgroundColor: '#FAA916'+ '80',
        borderColor: '#FAA916' + '80',
        pointBackgroundColor: 'red',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(77,83,96,1)',
        fill: 'origin',

      },

    ],
    labels: [ '30-Apr', '01-May', '02-May', '03-May', '04-May', '05-May', '06-May','07-May','08-May'  ]
  };

  public lineChartOptions: ChartConfiguration['options'] = {
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
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    // console.log(event, active);
  }

}
