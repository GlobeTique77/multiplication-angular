import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMultiplicationComponent } from './table-multiplication.component';

describe('TableMultiplicationComponent', () => {
  let component: TableMultiplicationComponent;
  let fixture: ComponentFixture<TableMultiplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableMultiplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableMultiplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
