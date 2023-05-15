import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightDirectiveComponent } from './highlight-directive.component';

describe('HighlightDirectiveComponent', () => {
  let component: HighlightDirectiveComponent;
  let fixture: ComponentFixture<HighlightDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighlightDirectiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighlightDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
