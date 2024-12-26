import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerEtablissementsComponent } from './lister-etablissements.component';

describe('ListerEtablissementsComponent', () => {
  let component: ListerEtablissementsComponent;
  let fixture: ComponentFixture<ListerEtablissementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListerEtablissementsComponent]
    });
    fixture = TestBed.createComponent(ListerEtablissementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
