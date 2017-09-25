import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemainBombsComponent } from './remain-bombs.component';

describe('RemainBombsComponent', () => {
  let component: RemainBombsComponent;
  let fixture: ComponentFixture<RemainBombsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemainBombsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemainBombsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
