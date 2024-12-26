import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerEtudiantsComponent } from './lister-etudiants.component';

describe('ListerEtudiantsComponent', () => {
  let component: ListerEtudiantsComponent;
  let fixture: ComponentFixture<ListerEtudiantsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListerEtudiantsComponent]
    });
    fixture = TestBed.createComponent(ListerEtudiantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
