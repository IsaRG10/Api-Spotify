import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorArtistasComponent } from './buscador-artistas.component';

describe('BuscadorArtistasComponent', () => {
  let component: BuscadorArtistasComponent;
  let fixture: ComponentFixture<BuscadorArtistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscadorArtistasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorArtistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
