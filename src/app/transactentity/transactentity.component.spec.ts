import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactentityComponent } from './transactentity.component';

describe('TransactentityComponent', () => {
  let component: TransactentityComponent;
  let fixture: ComponentFixture<TransactentityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactentityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
