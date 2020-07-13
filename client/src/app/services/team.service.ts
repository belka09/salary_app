import { Injectable } from '@angular/core';

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

  constructor() { }

  getCoreTeamArray() {
    return this.coreArray;
  }

  getTeamArray() {
    return this.team;
  }
}
