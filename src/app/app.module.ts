import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgChartsModule } from 'ng2-charts';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { PieChartShellComponent } from './pie-chart-shell/pie-chart-shell.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { MultiAxisBartChartComponent } from './multi-axis-bart-chart/multi-axis-bart-chart.component';
import { BarChartShellComponent } from './bar-chart-shell/bar-chart-shell.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { MultiAxisLineChartComponent } from './multi-axis-line-chart/multi-axis-line-chart.component';
import { LineChartShellComponent } from './line-chart-shell/line-chart-shell.component';
import { MultiAxisLineChartShellComponent } from './multi-axis-line-chart-shell/multi-axis-line-chart-shell.component';
import { MultiAxisBarChartShellComponent } from './multi-axis-bar-chart-shell/multi-axis-bar-chart-shell.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import {MatSelectModule} from '@angular/material/select';
import { HighlightDirectiveComponent } from './highlight-directive/highlight-directive.component';
import { HighlightDirective } from './hover.directive';


@NgModule({
  declarations: [
    AppComponent,
    PieChartComponent,
    PieChartShellComponent,
    BarChartComponent,
    MultiAxisBartChartComponent,
    BarChartShellComponent,
    LineChartComponent,
    MultiAxisLineChartComponent,
    LineChartShellComponent,
    MultiAxisLineChartShellComponent,
    MultiAxisBarChartShellComponent,
    HomeComponent,
    HighlightDirectiveComponent,
    HighlightDirective

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
