import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateralTableComponent } from './material-table.component';

describe('MateralTableComponent', () => {
  let component: MateralTableComponent;
  let fixture: ComponentFixture<MateralTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MateralTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MateralTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
