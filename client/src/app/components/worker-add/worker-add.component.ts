import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {Worker} from './../../models/worker';
import { TeamService } from 'src/app/services/team.service';
import { Router } from '@angular/router';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-worker-add',
  templateUrl: './worker-add.component.html',
  styleUrls: ['./worker-add.component.scss']
})
export class WorkerAddComponent implements OnInit {

  newWorker: any = {};

  nameFormControl = new FormControl('', [
    Validators.required
  ]);

  positionFormControl = new FormControl('', [
    Validators.required,
  ]);

  rateFormControl = new FormControl('', [
    Validators.required,
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(private teamService: TeamService, private route: Router) { }

  ngOnInit(): void {
  }

  resetForm() {
    this.nameFormControl.reset();
    this.positionFormControl.reset();
    this.rateFormControl.reset();
  }

  submitWorkerForm() {
    this.newWorker.name = this.nameFormControl.value;
    this.newWorker.position = this.positionFormControl.value;
    this.newWorker.rate = this.rateFormControl.value;
    this.teamService.addNewWorker(this.newWorker).subscribe((res) => {
      this.route.navigateByUrl('/');
    });
  }

}
