import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsLatestComponent } from './projects-latest.component';

describe('ProjectsLatestComponent', () => {
  let component: ProjectsLatestComponent;
  let fixture: ComponentFixture<ProjectsLatestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsLatestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsLatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
