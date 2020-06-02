import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetectionAutoComponent } from './pages/detection-auto/detection-auto.component';
import { ExpertComponent } from './pages/expert/expert.component';


const routes: Routes = [
  {
    path:'detect-auto',
    component: DetectionAutoComponent
  },
  {
    path: 'expert',
    component: ExpertComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
