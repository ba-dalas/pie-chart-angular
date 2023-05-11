import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ChartDataSet } from '../model/chart';

@Component({
  selector: 'app-multi-axis-line-chart-shell',
  templateUrl: './multi-axis-line-chart-shell.component.html',
  styleUrls: ['./multi-axis-line-chart-shell.component.scss']
})
export class MultiAxisLineChartShellComponent  implements OnInit {

  datasets:ChartDataSet=  {
    value: [ [ 123, 595, 594, 102, 92, 156 , 622, 487, 77],[ 507, 676, 636, 389,  217, 339 , 699, 740 , 107],],
    backgroundColor: [
      '#3F7D20',
      '#FAA916',
    ],
    labels: [ '30-Apr', '01-May', '02-May', '03-May', '04-May', '05-May', '06-May','07-May','08-May'],
    captions: [ 'Applications', 'Disposed' ],

  }

  private multiAxislineChartDataSubject = new BehaviorSubject<ChartDataSet[]>([]);

  multiAxisLineChartDataSets$: Observable<ChartDataSet[]> = this.multiAxislineChartDataSubject.asObservable();

  ngOnInit(): void {
    this.multiAxislineChartDataSubject.next([this.datasets]);
  }

  viewChart(event:any){
    console.log(event)
  }

}
