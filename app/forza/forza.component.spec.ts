import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForzaComponent } from './forza.component';

describe('ForzaComponent', () => {
  let component: ForzaComponent;
  let fixture: ComponentFixture<ForzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
