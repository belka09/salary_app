import { Injectable } from '@angular/core';
import { Worker } from './../models/worker';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  endpoint: string = 'http://localhost:8000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  public getWorkers() {
    return this.http.get(`${this.endpoint}/workers`);
  }

  public addWorker(worker) {
    return this.http.post(`${this.endpoint}/add-worker`, worker);
  }
}
