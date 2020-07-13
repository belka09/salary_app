import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-worker-inner',
  templateUrl: './worker-inner.component.html',
  styleUrls: ['./worker-inner.component.scss']
})
export class WorkerInnerComponent implements OnInit {

  private id: string;
  public worker: any;

  constructor(private teamService: TeamService, private router: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe(params => {
      this.id= params.get('id');
      this.teamService.getWorker(this.id).subscribe((res) => {
        this.worker = res;
      })
    });
  }

  deleteWorker(id) {
    this.teamService.deleteWorker(id).subscribe((res) => {
      this.route.navigateByUrl('/');
    });
  }

}
