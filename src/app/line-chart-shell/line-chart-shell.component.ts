import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ChartDataSet } from '../model/chart';

@Component({
  selector: 'app-line-chart-shell',
  templateUrl: './line-chart-shell.component.html',
  styleUrls: ['./line-chart-shell.component.scss']
})
export class LineChartShellComponent  implements OnInit {

  datasets:ChartDataSet=  {
    value: [[ 18, 54, 24, 5]],
    backgroundColor: [ '#95DEE3'],
    // borderColor: '#95DEE3',
    labels: [ 'Feb-23', 'Mar-23', 'Apr-23', 'May-23' ]

  }

  private lineChartDataSubject = new BehaviorSubject<ChartDataSet | null>(null);

  lineChartDataSets$: Observable<ChartDataSet | null> = this.lineChartDataSubject.asObservable();

  ngOnInit(): void {
    this.lineChartDataSubject.next(this.datasets);
  }

  viewChart(event:any){
    console.log(event)
  }

}
