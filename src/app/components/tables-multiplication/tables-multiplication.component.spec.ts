import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesMultiplicationComponent } from './tables-multiplication.component';

describe('TablesMultiplicationComponent', () => {
  let component: TablesMultiplicationComponent;
  let fixture: ComponentFixture<TablesMultiplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablesMultiplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesMultiplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
