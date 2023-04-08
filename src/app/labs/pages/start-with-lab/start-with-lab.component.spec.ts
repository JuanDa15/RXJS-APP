import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartWithLabComponent } from './start-with-lab.component';

describe('StartWithLabComponent', () => {
  let component: StartWithLabComponent;
  let fixture: ComponentFixture<StartWithLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartWithLabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartWithLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
