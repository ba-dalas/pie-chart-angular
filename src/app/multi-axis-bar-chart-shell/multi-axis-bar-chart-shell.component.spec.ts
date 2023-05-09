import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiAxisBarChartShellComponent } from './multi-axis-bar-chart-shell.component';

describe('MultiAxisBarChartShellComponent', () => {
  let component: MultiAxisBarChartShellComponent;
  let fixture: ComponentFixture<MultiAxisBarChartShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiAxisBarChartShellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiAxisBarChartShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
