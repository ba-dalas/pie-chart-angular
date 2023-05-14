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

import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { ChartEvent, ChartType } from 'chart.js';
import { ChartConfiguration, ChartData } from 'chart.js';
import { Location } from '@angular/common';
import { ChartDataSet } from '../model/chart';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PieChartComponent implements OnInit, OnChanges {

  @Input() pieChartDataSets!: ChartDataSet | null;

  @Output() pieChartClicked = new EventEmitter<ChartEvent>();
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public pieChartType: ChartType = 'pie';
  public pieChartPlugins = [DatalabelsPlugin];


  constructor(private readonly location: Location) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {

    if (
      this.pieChartDataSets &&
      this.pieChartDataSets.value
    ) {
      this.pieChartData.labels = this.pieChartDataSets.labels;
      this.pieChartData.datasets[0].data = this.pieChartDataSets.value[0]
      this.pieChartData.datasets[0].backgroundColor =
        this.pieChartDataSets.backgroundColor;

      if (
        this.pieChartOptions &&
        this.pieChartOptions.plugins &&
        this.pieChartOptions.plugins.datalabels
      ) {
        this.pieChartOptions.plugins.datalabels.color = this.pieChartDataSets.textColor;

      }
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
        color: '',
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

  onLabelChange(event:any){
    console.log(event.value)
    if(event.value==='left' && this.pieChartOptions?.plugins?.legend ){
      this.pieChartOptions.plugins.legend.position='left';
    }
    if(event.value==='right' && this.pieChartOptions?.plugins?.legend ){
      this.pieChartOptions.plugins.legend.position='right';
    }

    if(event.value==='top' && this.pieChartOptions?.plugins?.legend ){
      this.pieChartOptions.plugins.legend.position='top';
    }

    if(event.value==='bottom' && this.pieChartOptions?.plugins?.legend ){
      this.pieChartOptions.plugins.legend.position='bottom';
    }

    this.chart?.render();

  }
}
