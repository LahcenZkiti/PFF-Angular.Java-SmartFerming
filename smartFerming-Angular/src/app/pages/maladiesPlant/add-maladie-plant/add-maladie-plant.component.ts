import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MaladiesService } from 'src/app/services/maladies.service';
import { MaladiePlante } from 'src/app/models/maladies-plant';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ValidateUploadComponent } from 'src/app/PopUp/validate-upload/validate-upload.component';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-add-maladie-plant',
  templateUrl: './add-maladie-plant.component.html',
  styleUrls: ['./add-maladie-plant.component.css']
})
export class AddMaladiePlantComponent implements OnInit {

  maladies : MaladiePlante = {
    nomMaladie : '',
    symptomes : '',
    causes : '',
    traitement : '',
    actionsPreventives: ''
  } ;
  constructor(private maladieService:MaladiesService,
              private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  addMaladie(form: NgForm) {
    this.maladieService.addOne(this.maladies).subscribe(maladie => {
      this.maladies = maladie;
        error =>{
          console.log(error);
        }
      console.log(JSON.stringify(maladie));
      form.reset();
    })
  }

  open() {
    const modalRef = this.modalService.open(ValidateUploadComponent);
    if (this.maladies.nomMaladie == null || this.maladies.nomMaladie == '' ||
        this.maladies.symptomes == null || this.maladies.symptomes == '' ||
        this.maladies.causes == null || this.maladies.causes == '' ||
        this.maladies.traitement == null || this.maladies.traitement == '' || 
        this.maladies.actionsPreventives == null || this.maladies.actionsPreventives == ''){

          modalRef.componentInstance.msg = 'Faux! Veuillez remplir tous les blancs ';
          return false;
    }else{
      modalRef.componentInstance.msg = 'les information a bien été enregistrer!';
      return true;
    }
  }
}
