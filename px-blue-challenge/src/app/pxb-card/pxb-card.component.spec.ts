import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PxbCardComponent } from './pxb-card.component';

describe('PxbCardComponent', () => {
  let component: PxbCardComponent;
  let fixture: ComponentFixture<PxbCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PxbCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PxbCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
