import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private apiService: ApiService) { }

  getProjects() {
    return this.apiService.getProjects();
  }
}
