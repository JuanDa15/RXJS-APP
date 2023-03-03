import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistincComponent } from './distinc.component';

describe('DistincComponent', () => {
  let component: DistincComponent;
  let fixture: ComponentFixture<DistincComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistincComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistincComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
