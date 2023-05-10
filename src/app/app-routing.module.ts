import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PieChartShellComponent } from './pie-chart-shell/pie-chart-shell.component';
import { BarChartShellComponent } from './bar-chart-shell/bar-chart-shell.component';
import { MultiAxisBarChartShellComponent } from './multi-axis-bar-chart-shell/multi-axis-bar-chart-shell.component';
import { LineChartShellComponent } from './line-chart-shell/line-chart-shell.component';
import { HomeComponent } from './home/home.component';
import { MultiAxisLineChartShellComponent } from './multi-axis-line-chart-shell/multi-axis-line-chart-shell.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    },
    {
      path: 'pie-chart',
      component: PieChartShellComponent,
    },
    {
      path: 'bar-chart',
      component: BarChartShellComponent,
    },
    {
      path: 'multi-axis-bar-chart',
      component: MultiAxisBarChartShellComponent,
    },
    {
      path: 'line-chart',
      component: LineChartShellComponent,
    },
    {
      path: 'multi-axis-line-chart',
      component: MultiAxisLineChartShellComponent,
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
