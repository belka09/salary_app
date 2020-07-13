import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { WorkerAddComponent } from './components/worker-add/worker-add.component';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { WorkerInnerComponent } from './components/worker-inner/worker-inner.component';


const routes: Routes = [
  {
    path: '', component: ListComponent,
  },
  {
    path: 'new', component: WorkerAddComponent,
  },
  {
    path: 'worker/:id', component: WorkerInnerComponent,
  },
  {
    path: 'projects', component: ProjectsListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
