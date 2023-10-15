import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GauseChartComponent } from './gause-chart.component';

describe('GauseChartComponent', () => {
  let component: GauseChartComponent;
  let fixture: ComponentFixture<GauseChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GauseChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GauseChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
