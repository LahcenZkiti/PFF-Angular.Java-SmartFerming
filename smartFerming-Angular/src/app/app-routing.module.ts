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
import { AgriculAuthGuardService } from './services/agricul-auth-guard.service';
import { ExpertAuthGuardService } from './services/expert-auth-guard.service';
import { ExpertLoginComponent } from './pages/expert/expert-login/expert-login.component';


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
    path: 'login/expert',
    component: ExpertLoginComponent
  },
  {
    path:'detect-auto',
    component: DetectionAutoComponent, canActivate:[AgriculAuthGuardService]
  },
  {
    path: 'consulter',
    component: ConsulterExpertComponent, canActivate:[AgriculAuthGuardService]
  },
  {
    path: 'espace-expert',
    component: ListImgComponent, canActivate: [ExpertAuthGuardService]
  },
  {
    path: 'espace-response/image/:id',
    component: TreatmentComponent, canActivate: [ExpertAuthGuardService]
  },
  {
    path:'add-maladies',
    component: AddMaladiePlantComponent, canActivate: [ExpertAuthGuardService]
  },
  {
    path: 'listeMaladies',
    component: ListMaladiePlantComponent, canActivate: [ExpertAuthGuardService]
  },
  {
    path: 'info/maladie/:id',
    component: InfoMaladiesComponent, canActivate: [ExpertAuthGuardService]
  },
  {
    path: 'allresponse',
    component: ResponseExpertComponent, canActivate:[AgriculAuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
