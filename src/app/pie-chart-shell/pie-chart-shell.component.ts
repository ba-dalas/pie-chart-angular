import { Component, OnInit } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { PieChartData } from '../model/pie-chart.model';

@Component({
  selector: 'app-pie-chart-shell',
  templateUrl: './pie-chart-shell.component.html',
  styleUrls: ['./pie-chart-shell.component.scss']
})
export class PieChartShellComponent implements OnInit {

  datasets: PieChartData =
    {
      labels: ['রাজশাহী', 'রংপুর', 'ময়মনসিংহ', 'ঢাকা', 'চট্টগ্রাম', 'সিলেট', 'খুলনা', 'বরিশাল'],
      data: [300, 500, 100, 200, 400, 600, 700, 900],
      backgroundColor: [
        '#63b598',
        '#ce7d78',
        '#ea9e70',
        '#a48a9e',
        '#c6e1e8',
        '#648177',
        '#0d5ac1',
        '#f205e6'
      ],
      textColor:'#ffffff'

    }


  private pieChartDataSubject = new BehaviorSubject<PieChartData[]>([]);

  pieChartDataSets$: Observable<PieChartData[]> = this.pieChartDataSubject.asObservable();

  ngOnInit(): void {
    this.pieChartDataSubject.next([this.datasets]);

  }

  viewChart(event: any) {
    console.log(event)
  }


}


