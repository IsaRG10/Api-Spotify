import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaCancionesComponent } from './tarjeta-canciones.component';

describe('TarjetaCancionesComponent', () => {
  let component: TarjetaCancionesComponent;
  let fixture: ComponentFixture<TarjetaCancionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaCancionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaCancionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
