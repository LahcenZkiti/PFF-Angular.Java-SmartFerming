import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ValidateUploadComponent } from 'src/app/PopUp/validate-upload/validate-upload.component';
/**
 * Component
 */
@Component({
  selector: 'app-expert',
  templateUrl: './expert.component.html',
  styleUrls: ['./expert.component.css']
})
export class ExpertComponent implements OnInit {

  /**
   * Url  of expert component
   */
  API_URL = 'http://localhost:8080/';

  /**
   * Selected file of expert component
   */
  selectedFile : File ;

  /**
   * Creates an instance of expert component.
   * @param http 
   */
  constructor(private http:HttpClient,
              private modalService: NgbModal) { }

  /**
   * on init
   */
  ngOnInit(): void {
  }

  /**
   * Determines whether file selected on
   * @param event 
   */
  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
    console.log(event);
  }

  /**
   * Determines whether upload on
   */
  onUpload(){
    const fd = new FormData();
    fd.append('file', this.selectedFile, this.selectedFile.name)
    this.http.post(this.API_URL + 'telechargerimage', fd).subscribe(res => {
      JSON.stringify(res);
      const modalRef = this.modalService.open(ValidateUploadComponent);
      if(this.selectedFile.name.length > 0){
        modalRef.componentInstance.msg = "Votre image a bien été enregistrée! \nNous vous enverrons une réponse d'expert \nNous vous remercions de votre confiance ...";
          return true
      }else{
        modalRef.componentInstance.msg = 'veuillez sélectionner une image !';
        return false;
      }
    })
  }
  
  

}
