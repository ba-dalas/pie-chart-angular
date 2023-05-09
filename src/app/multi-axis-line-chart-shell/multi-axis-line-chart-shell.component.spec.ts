import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiAxisLineChartShellComponent } from './multi-axis-line-chart-shell.component';

describe('MultiAxisLineChartShellComponent', () => {
  let component: MultiAxisLineChartShellComponent;
  let fixture: ComponentFixture<MultiAxisLineChartShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiAxisLineChartShellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiAxisLineChartShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
