import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistasFavoritosComponent } from './artistas-favoritos.component';

describe('ArtistasFavoritosComponent', () => {
  let component: ArtistasFavoritosComponent;
  let fixture: ComponentFixture<ArtistasFavoritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistasFavoritosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistasFavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
