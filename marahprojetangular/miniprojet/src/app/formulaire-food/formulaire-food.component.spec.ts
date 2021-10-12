import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireFoodComponent } from './formulaire-food.component';

describe('FormulaireFoodComponent', () => {
  let component: FormulaireFoodComponent;
  let fixture: ComponentFixture<FormulaireFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaireFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
