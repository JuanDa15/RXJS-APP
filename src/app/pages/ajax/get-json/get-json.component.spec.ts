import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetJsonComponent } from './get-json.component';

describe('GetJsonComponent', () => {
  let component: GetJsonComponent;
  let fixture: ComponentFixture<GetJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetJsonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
