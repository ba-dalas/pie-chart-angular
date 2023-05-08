import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartShellComponent } from './line-chart-shell.component';

describe('LineChartShellComponent', () => {
  let component: LineChartShellComponent;
  let fixture: ComponentFixture<LineChartShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineChartShellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineChartShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
