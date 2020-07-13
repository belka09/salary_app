import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styles: [
  ]
})
export class ProjectsListComponent implements OnInit {

  public projects: any;

  constructor(private projectsService: ProjectsService) {
    this.projectsService.getProjects().subscribe((res) => {
      this.projects = res;
      console.log(this.projects);
    })
   }

  ngOnInit(): void {
  }

}
