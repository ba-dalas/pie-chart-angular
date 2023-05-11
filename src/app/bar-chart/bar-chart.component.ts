import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { Location } from '@angular/common';
import { PieChartData } from '../model/pie-chart.model';


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BarChartComponent implements OnInit, OnChanges {

  @Input() barChartDataSets!: PieChartData[] | null;

  @Output() barChartClicked = new EventEmitter<ChartEvent>();
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  constructor(
    private readonly location: Location
  ) { }


  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.barChartDataSets && this.barChartDataSets.length > 0) {
      this.barChartData.labels = this.barChartDataSets[0].labels
      this.barChartData.datasets[0].data = this.barChartDataSets[0].data!;
      this.barChartData.datasets[0].backgroundColor = this.barChartDataSets[0].backgroundColor

      if (
        this.barChartOptions &&
        this.barChartOptions.plugins &&
        this.barChartOptions.plugins.datalabels
      ) {
        this.barChartOptions.plugins.datalabels.color = this.barChartDataSets[0].textColor;
      }
    }


  }

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      // this portion for showing title
      legend: {
        display: false,
      },
      // All style will be added here
      datalabels: {
        color: '',
        // color: 'white',
        anchor: 'center',
        align: 'center',
        font: {
          weight: 'bold'
        },
      },

    }
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DataLabelsPlugin
  ];


  public barChartData: ChartData<'bar', number[], string | string[]> = {
    labels: [],
    datasets: [
      {
        data: [],
        // label: 'Series A',
        backgroundColor: [],
      },

    ],
  };

  // events
  public chartClicked(event: any): void {
    console.log(event);
    this.barChartClicked.emit(event);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    // console.log(event, active);
  }

  goToBack() {
    this.location.back();
  }

}


