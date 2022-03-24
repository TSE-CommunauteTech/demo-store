import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyListenerComponent } from './my-listener.component';

describe('MyListenerComponent', () => {
  let component: MyListenerComponent;
  let fixture: ComponentFixture<MyListenerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyListenerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyListenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
