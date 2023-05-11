import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ChartDataSet } from '../model/chart';

@Component({
  selector: 'app-bar-chart-shell',
  templateUrl: './bar-chart-shell.component.html',
  styleUrls: ['./bar-chart-shell.component.scss']
})
export class BarChartShellComponent implements OnInit {

  datasets:ChartDataSet=  {
    labels:[ 'Disposed' , 'In-Process' ],
    value: [[ 10300, 15000]],
    backgroundColor: [
      '#63b598',
      '#ce7d78',
    ],
    textColor:'#ffffff'
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
