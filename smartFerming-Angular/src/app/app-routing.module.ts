import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetectionAutoComponent } from './pages/detection-auto/detection-auto.component';


const routes: Routes = [
  {
    path:'detect-auto',
    component: DetectionAutoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
