import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { ChartEvent, ChartType } from 'chart.js';
import { ChartConfiguration, ChartData } from 'chart.js';
import { Location } from '@angular/common';
import { PieChartData } from '../model/pie-chart.model';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PieChartComponent implements OnInit, OnChanges {
  @Input() pieChartDataSets!: PieChartData[] | null;

  @Output() pieChartClicked = new EventEmitter<ChartEvent>();

  public pieChartType: ChartType = 'pie';
  public pieChartPlugins = [DatalabelsPlugin];

  constructor(private readonly location: Location) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {

    if (this.pieChartDataSets && this.pieChartDataSets.length > 0) {
      this.pieChartData.labels = this.pieChartDataSets[0].labels;
      this.pieChartData.datasets[0].data = this.pieChartDataSets[0].data!;
      this.pieChartData.datasets[0].backgroundColor =
        this.pieChartDataSets[0].backgroundColor;
      // console.log('this.pieChartDataSets.data=====', this.pieChartDataSets);
    }

  }

  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    // this portion for showing title and its styling
    plugins: {
      legend: {
        display: true,
        position: 'right',
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
          weight: 'bold',
        },
      },
    },
  };

  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [],
      },
    ],
  };

  chartClicked(event: any) {
    console.log(event);
    this.pieChartClicked.emit(event);
  }

  goToBack() {
    this.location.back();
  }
}
