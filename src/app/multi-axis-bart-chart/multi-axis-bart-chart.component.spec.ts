import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiAxisBartChartComponent } from './multi-axis-bart-chart.component';

describe('MultiAxisBartChartComponent', () => {
  let component: MultiAxisBartChartComponent;
  let fixture: ComponentFixture<MultiAxisBartChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiAxisBartChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiAxisBartChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
