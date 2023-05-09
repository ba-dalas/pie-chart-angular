import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PieChartData } from '../model/pie-chart.model';

@Component({
  selector: 'app-multi-axis-bar-chart-shell',
  templateUrl: './multi-axis-bar-chart-shell.component.html',
  styleUrls: ['./multi-axis-bar-chart-shell.component.scss']
})
export class MultiAxisBarChartShellComponent implements OnInit {

  datasets:any=  {
    data1: [ 123, 595, 594, 102, 92, 156 , 622, 487, 77],
    data2: [ 507, 676, 636, 389,  217, 339 , 699, 740 , 107],
    labels: [ '30-Apr', '01-May', '02-May', '03-May', '04-May', '05-May', '06-May','07-May','08-May'],
    color1: "#3F7D20",
    color2: "#FAA916",

  }

  private barChartDataSubject = new BehaviorSubject<PieChartData[]>([]);

  barChartDataSets$: Observable<PieChartData[]> = this.barChartDataSubject.asObservable();

  ngOnInit(): void {
    this.barChartDataSubject.next(this.datasets);
  }

  viewChart(event:any){
    console.log(event)
  }

}
