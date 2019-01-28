import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedforComponent } from './feedfor.component';

describe('FeedforComponent', () => {
  let component: FeedforComponent;
  let fixture: ComponentFixture<FeedforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
