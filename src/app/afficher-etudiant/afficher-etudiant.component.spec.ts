import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherEtudiantComponent } from './afficher-etudiant.component';

describe('AfficherEtudiantComponent', () => {
  let component: AfficherEtudiantComponent;
  let fixture: ComponentFixture<AfficherEtudiantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfficherEtudiantComponent]
    });
    fixture = TestBed.createComponent(AfficherEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
