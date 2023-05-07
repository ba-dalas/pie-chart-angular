import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartShellComponent } from './pie-chart-shell.component';

describe('PieChartShellComponent', () => {
  let component: PieChartShellComponent;
  let fixture: ComponentFixture<PieChartShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieChartShellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieChartShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
