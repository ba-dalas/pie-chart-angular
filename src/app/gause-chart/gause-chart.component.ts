import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { ChartEvent, ChartType, ChartConfiguration, ChartData  } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Location } from '@angular/common';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';


@Component({
  selector: 'app-gause-chart',
  templateUrl: './gause-chart.component.html',
  styleUrls: ['./gause-chart.component.scss']
})
export class GauseChartComponent implements OnInit, OnChanges {


  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public pieChartType: ChartType = 'bar';
  public pieChartPlugins = [DatalabelsPlugin];


  constructor(private readonly location: Location) {

  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {}


  // Pie
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'right',
      },
      datalabels: {
        formatter: (value: any, ctx: any) => {
          if (ctx.chart.data.labels) {
            return ctx.chart.data.labels[ctx.dataIndex];
          }
        },
      },
    },
  };
  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'],
    datasets: [
      {
        data: [300, 500, 100],
      },
    ],
  };



  goToBack() {
    this.location.back();
  }

}







