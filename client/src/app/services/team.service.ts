import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  coreArray: Array<any> =  [
    {
      name: 'Dzmitry Zimnitsky',
      photo: '',
      position: 'front-end developer',
      rate: '15$',
    },
    {
      name: 'Dzmitry Tsurankov',
      photo: '',
      position: 'CTO',
      rate: '21$',
    },
    {
      name: 'Vladislav Babitsky',
      photo: '',
      position: 'full-stack developer',
      rate: '15$',
    }
  ];

  team: Array<any> = [
    {
      name: 'Alex Gvozd',
      photo: '',
      position: 'front-end developer',
      rate: '15$',
    }
  ]

  constructor(private apiService: ApiService) { }

  getCoreTeamArray() {
    return this.coreArray;
  }

  getTeamArray() {
    return this.apiService.getWorkers();
  }

  addNewWorker(worker) {
    return this.apiService.addWorker(worker);
  }
}
