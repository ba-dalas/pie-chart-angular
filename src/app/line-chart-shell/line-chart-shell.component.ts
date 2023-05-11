import { Component, OnInit } from '@angular/core';
import { PieChartData } from '../model/pie-chart.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-line-chart-shell',
  templateUrl: './line-chart-shell.component.html',
  styleUrls: ['./line-chart-shell.component.scss']
})
export class LineChartShellComponent  implements OnInit {

  datasets:PieChartData=  {
    data: [ 18, 54, 24, 5],
    backgroundColor: [ '#95DEE3'],
    // borderColor: '#95DEE3',
    labels: [ 'Feb-23', 'Mar-23', 'Apr-23', 'May-23' ]

  }

  private lineChartDataSubject = new BehaviorSubject<PieChartData[]>([]);

  lineChartDataSets$: Observable<PieChartData[]> = this.lineChartDataSubject.asObservable();

  ngOnInit(): void {
    this.lineChartDataSubject.next([this.datasets]);
  }

  viewChart(event:any){
    console.log(event)
  }

}
