import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetectionAutoComponent } from './pages/agriculture/detection-auto/detection-auto.component';
import { AddMaladiePlantComponent } from './pages/maladiesPlant/add-maladie-plant/add-maladie-plant.component';
import { ListMaladiePlantComponent } from './pages/maladiesPlant/list-maladie-plant/list-maladie-plant.component';
import { InfoMaladiesComponent } from './pages/maladiesPlant/info-maladies/info-maladies.component';
import { HomeComponent } from './pages/home/home.component';
import { ConsulterExpertComponent } from './pages/agriculture/consulter-expert/consulter-expert.component';
import { ListImgComponent } from './pages/expert/list-img/list-img.component';
import { ResponseExpertComponent } from './pages/agriculture/response-expert/response-expert.component';
import { TreatmentComponent } from './pages/expert/treatment/treatment.component';
import { AgriculLoginComponent } from './pages/agriculture/agricul-login/agricul-login.component';
import { AgriculSignupComponent } from './pages/agriculture/agricul-signup/agricul-signup.component';


const routes: Routes = [
  {
    path: '',
    redirectTo:'home', 
    pathMatch:'full'
  },
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path: 'login',
    component: AgriculLoginComponent
  },
  {
    path:'register',
    component: AgriculSignupComponent
  },
  {
    path:'detect-auto',
    component: DetectionAutoComponent
  },
  {
    path: 'consulter',
    component: ConsulterExpertComponent
  },
  {
    path: 'espace-expert',
    component: ListImgComponent
  },
  {
    path: 'espace-response/image/:id',
    component: TreatmentComponent
  },
  {
    path:'add-maladies',
    component: AddMaladiePlantComponent
  },
  {
    path: 'listeMaladies',
    component: ListMaladiePlantComponent
  },
  {
    path: 'info/maladie/:id',
    component: InfoMaladiesComponent
  },
  {
    path: 'allresponse',
    component: ResponseExpertComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
