import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BombCountingComponent } from './bomb-counting.component';

describe('BombCountingComponent', () => {
  let component: BombCountingComponent;
  let fixture: ComponentFixture<BombCountingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BombCountingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BombCountingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
