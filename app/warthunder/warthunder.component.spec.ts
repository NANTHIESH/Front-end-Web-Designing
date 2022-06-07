import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarthunderComponent } from './warthunder.component';

describe('WarthunderComponent', () => {
  let component: WarthunderComponent;
  let fixture: ComponentFixture<WarthunderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarthunderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarthunderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
