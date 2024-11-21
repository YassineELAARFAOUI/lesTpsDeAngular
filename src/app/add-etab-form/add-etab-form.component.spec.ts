import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddETabFormComponent } from './add-etab-form.component';

describe('AddETabFormComponent', () => {
  let component: AddETabFormComponent;
  let fixture: ComponentFixture<AddETabFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddETabFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddETabFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
