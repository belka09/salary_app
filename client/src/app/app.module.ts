import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './components/list/list.component';
import { WorkerComponent } from './components/worker/worker.component';
import { TotalComponent } from './components/total/total.component';
import { CoreComponent } from './components/core/core.component';

// material
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { TeamComponent } from './components/team/team.component';
import { WorkerAddComponent } from './components/worker-add/worker-add.component';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WorkerInnerComponent } from './components/worker-inner/worker-inner.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    WorkerComponent,
    TotalComponent,
    CoreComponent,
    TeamComponent,
    WorkerAddComponent,
    WorkerInnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
