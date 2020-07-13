import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';
import { Worker } from './../../models/worker';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  public team: Array<Worker>;

  constructor(private route: Router, public teamService: TeamService) { 
    this.teamService.getTeamArray().subscribe((res: Array<Worker>) => {
      this.team = res;
    });
  }

  ngOnInit(): void {
  }

  addNewWorker() {
    this.route.navigateByUrl('/new');
  }

}
