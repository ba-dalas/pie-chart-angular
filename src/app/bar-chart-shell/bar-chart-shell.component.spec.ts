import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartShellComponent } from './bar-chart-shell.component';

describe('BarChartShellComponent', () => {
  let component: BarChartShellComponent;
  let fixture: ComponentFixture<BarChartShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarChartShellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarChartShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
