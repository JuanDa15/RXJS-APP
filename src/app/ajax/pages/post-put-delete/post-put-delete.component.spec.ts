import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPutDeleteComponent } from './post-put-delete.component';

describe('PostPutDeleteComponent', () => {
  let component: PostPutDeleteComponent;
  let fixture: ComponentFixture<PostPutDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostPutDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostPutDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
