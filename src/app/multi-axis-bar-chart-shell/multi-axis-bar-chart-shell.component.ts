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
    data: [ 8000, 1100, 9000, 5000 ],
    data2: [ 4000, 2000, 1000, 3000],
    labels: [ 'Dhaka', 'Rajshahi', 'Rangpur', 'Sylhet' ],
    color1:'#544BE9',
    color2: '#6AD880',

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
