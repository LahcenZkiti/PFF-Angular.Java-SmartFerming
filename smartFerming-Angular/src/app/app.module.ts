import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './Lyout/navigation/navigation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetectionAutoComponent } from './pages/detection-auto/detection-auto.component';
import { HttpClientModule } from '@angular/common/http';
import { ExpertComponent } from './pages/expert/expert.component';
import { ValidateUploadComponent } from './PopUp/validate-upload/validate-upload.component';
import { NavigationExpertComponent } from './Lyout/navigation-expert/navigation-expert.component';
import { EspaceExpertComponent } from './pages/espace-expert/espace-expert.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EspaceResponseComponent } from './pages/espace-response/espace-response.component';
import { AddMaladiePlantComponent } from './pages/maladiesPlant/add-maladie-plant/add-maladie-plant.component';
import { ListMaladiePlantComponent } from './pages/maladiesPlant/list-maladie-plant/list-maladie-plant.component';
import { InfoMaladiesComponent } from './pages/maladiesPlant/info-maladies/info-maladies.component';
import { TraiterImgageComponent } from './PopUp/traiter-imgage/traiter-imgage.component';
import { EspaceUserComponent } from './pages/espace-user/espace-user.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DetectionAutoComponent,
    ExpertComponent,
    ValidateUploadComponent,
    NavigationExpertComponent,
    EspaceExpertComponent,
    EspaceResponseComponent,
    AddMaladiePlantComponent,
    ListMaladiePlantComponent,
    InfoMaladiesComponent,
    TraiterImgageComponent,
    EspaceUserComponent
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
