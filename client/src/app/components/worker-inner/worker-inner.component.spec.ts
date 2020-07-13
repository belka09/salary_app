import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerInnerComponent } from './worker-inner.component';

describe('WorkerInnerComponent', () => {
  let component: WorkerInnerComponent;
  let fixture: ComponentFixture<WorkerInnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerInnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
