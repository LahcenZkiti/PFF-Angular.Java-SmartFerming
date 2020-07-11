import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './Lyout/navigation/navigation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetectionAutoComponent } from './pages/agriculture/detection-auto/detection-auto.component';
import { HttpClientModule } from '@angular/common/http';
import { ValidateUploadComponent } from './PopUp/validate-upload/validate-upload.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddMaladiePlantComponent } from './pages/maladiesPlant/add-maladie-plant/add-maladie-plant.component';
import { ListMaladiePlantComponent } from './pages/maladiesPlant/list-maladie-plant/list-maladie-plant.component';
import { InfoMaladiesComponent } from './pages/maladiesPlant/info-maladies/info-maladies.component';
import { TraiterImgageComponent } from './PopUp/traiter-imgage/traiter-imgage.component';
import { LoginComponent } from './pages/autentification/login/login.component';
import { RegisterComponent } from './pages/autentification/register/register.component';
import { FooterComponent } from './Lyout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ConsulterExpertComponent } from './pages/agriculture/consulter-expert/consulter-expert.component';
import { ExpertLoginComponent } from './pages/expert/expert-login/expert-login.component';
import { ExpertSignupComponent } from './pages/expert/expert-signup/expert-signup.component';
import { ExpertPofileComponent } from './pages/expert/expert-pofile/expert-pofile.component';
import { ListImgComponent } from './pages/expert/list-img/list-img.component';
import { AgriculLoginComponent } from './pages/agriculture/agricul-login/agricul-login.component';
import { AgriculSignupComponent } from './pages/agriculture/agricul-signup/agricul-signup.component';
import { AgriculProfileComponent } from './pages/agriculture/agricul-profile/agricul-profile.component';
import { ResponseExpertComponent } from './pages/agriculture/response-expert/response-expert.component';
import { TreatmentComponent } from './pages/expert/treatment/treatment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DetectionAutoComponent,
    ValidateUploadComponent,
    AddMaladiePlantComponent,
    ListMaladiePlantComponent,
    InfoMaladiesComponent,
    TraiterImgageComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    HomeComponent,
    ConsulterExpertComponent,
    ExpertLoginComponent,
    ExpertSignupComponent,
    ExpertPofileComponent,
    ListImgComponent,
    AgriculLoginComponent,
    AgriculSignupComponent,
    AgriculProfileComponent,
    ResponseExpertComponent,
    TreatmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
