import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {  ChartDataSet } from '../model/chart';

@Component({
  selector: 'app-multi-axis-bar-chart-shell',
  templateUrl: './multi-axis-bar-chart-shell.component.html',
  styleUrls: ['./multi-axis-bar-chart-shell.component.scss']
})
export class MultiAxisBarChartShellComponent implements OnInit {

  datasets:ChartDataSet=  {
    value: [[ 8000, 1100, 9000, 5000 ], [ 4000, 2000, 1000, 3000]],
    labels: [ 'Dhaka', 'Rajshahi', 'Rangpur', 'Sylhet' ],
    captions: [ 'Applications', 'Disposed' ],
    backgroundColor: [
      '#544BE9',
      '#6AD880',

    ],
    textColor:'#000000'

  }

  private barChartDataSubject = new BehaviorSubject<ChartDataSet[]>([]);

  barChartDataSets$: Observable<ChartDataSet[]> = this.barChartDataSubject.asObservable();

  ngOnInit(): void {
    this.barChartDataSubject.next([this.datasets]);
  }

  viewChart(event:any){
    console.log(event)
  }

}
