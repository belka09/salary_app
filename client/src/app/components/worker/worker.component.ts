import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.scss']
})
export class WorkerComponent implements OnInit {

  @Input() worker: any;

  constructor() { }

  ngOnInit(): void {
  }

  goToWorker(worker) {
    console.log(worker);
  }

}
