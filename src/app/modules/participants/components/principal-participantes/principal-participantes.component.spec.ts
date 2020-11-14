import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalParticipantesComponent } from './principal-participantes.component';

describe('PrincipalParticipantesComponent', () => {
  let component: PrincipalParticipantesComponent;
  let fixture: ComponentFixture<PrincipalParticipantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalParticipantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalParticipantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
