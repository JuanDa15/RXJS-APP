import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncSchedulerComponent } from './async-scheduler.component';

describe('AsyncSchedulerComponent', () => {
  let component: AsyncSchedulerComponent;
  let fixture: ComponentFixture<AsyncSchedulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsyncSchedulerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsyncSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
