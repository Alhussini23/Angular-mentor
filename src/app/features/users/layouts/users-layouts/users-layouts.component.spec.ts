import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersLayoutsComponent } from './users-layouts.component';

describe('UsersLayoutsComponent', () => {
  let component: UsersLayoutsComponent;
  let fixture: ComponentFixture<UsersLayoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersLayoutsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
