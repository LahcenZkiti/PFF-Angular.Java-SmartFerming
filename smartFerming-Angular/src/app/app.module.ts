import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './Lyout/navigation/navigation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetectionAutoComponent } from './pages/detection-auto/detection-auto.component';
import { HttpClientModule } from '@angular/common/http';
import { ExpertComponent } from './pages/expert/expert.component';
import { ValidateUploadComponent } from './PopUp/validate-upload/validate-upload.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DetectionAutoComponent,
    ExpertComponent,
    ValidateUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
