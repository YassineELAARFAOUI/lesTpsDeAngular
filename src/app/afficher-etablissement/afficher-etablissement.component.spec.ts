import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherEtablissementComponent } from './afficher-etablissement.component';

describe('AfficherEtablissementComponent', () => {
  let component: AfficherEtablissementComponent;
  let fixture: ComponentFixture<AfficherEtablissementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfficherEtablissementComponent]
    });
    fixture = TestBed.createComponent(AfficherEtablissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
