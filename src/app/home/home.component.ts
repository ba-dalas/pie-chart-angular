import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: Router ) {}

  goToPieChartPage(){
    this.router.navigate(['/pie-chart']);
  }

  goToBarChartPage(){
    this.router.navigate(['/bar-chart']);
  }

  goToMultiAxisBarChartPage(){
    this.router.navigate(['/multi-axis-bar-chart']);
  }

  goToLineChartPage(){
    this.router.navigate(['/line-chart']);
  }

  goToMultiAxisLineChartPage(){
    this.router.navigate(['/multi-axis-line-chart']);
  }

  goToDirectivePage(){
    this.router.navigate(['/directive']);
  }
}
