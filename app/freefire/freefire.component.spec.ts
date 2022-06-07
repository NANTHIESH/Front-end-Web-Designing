import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreefireComponent } from './freefire.component';

describe('FreefireComponent', () => {
  let component: FreefireComponent;
  let fixture: ComponentFixture<FreefireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreefireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreefireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
