import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavItemnavItemComponent } from './nav-itemnav-item.component';

describe('NavItemnavItemComponent', () => {
  let component: NavItemnavItemComponent;
  let fixture: ComponentFixture<NavItemnavItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavItemnavItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavItemnavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
