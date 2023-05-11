import { Component, OnInit } from '@angular/core';
import { PieChartData } from '../model/pie-chart.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { MultiChartData } from '../model/multi-chart.model';

@Component({
  selector: 'app-multi-axis-line-chart-shell',
  templateUrl: './multi-axis-line-chart-shell.component.html',
  styleUrls: ['./multi-axis-line-chart-shell.component.scss']
})
export class MultiAxisLineChartShellComponent  implements OnInit {

  datasets:MultiChartData=  {
    value1: [ 123, 595, 594, 102, 92, 156 , 622, 487, 77],
    value2: [ 507, 676, 636, 389,  217, 339 , 699, 740 , 107],
    backgroundColor: [
      '#3F7D20',
      '#FAA916',
    ],
    labels: [ '30-Apr', '01-May', '02-May', '03-May', '04-May', '05-May', '06-May','07-May','08-May'],
    // color1: "#3F7D20",
    // color2: "#FAA916",

  }

  private multiAxislineChartDataSubject = new BehaviorSubject<PieChartData[]>([]);

  multiAxisLineChartDataSets$: Observable<PieChartData[]> = this.multiAxislineChartDataSubject.asObservable();

  ngOnInit(): void {
    this.multiAxislineChartDataSubject.next([this.datasets]);
  }

  viewChart(event:any){
    console.log(event)
  }

}
