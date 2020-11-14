import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorCancionesComponent } from './buscador-canciones.component';

describe('BuscadorCancionesComponent', () => {
  let component: BuscadorCancionesComponent;
  let fixture: ComponentFixture<BuscadorCancionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscadorCancionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorCancionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
