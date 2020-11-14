import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalMusicaComponent } from './principal-musica.component';

describe('PrincipalMusicaComponent', () => {
  let component: PrincipalMusicaComponent;
  let fixture: ComponentFixture<PrincipalMusicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalMusicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalMusicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
