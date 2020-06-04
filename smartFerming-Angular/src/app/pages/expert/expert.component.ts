import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  constructor(private http:HttpClient) { }

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
      if(!this.selectedFile.name){
        console.log('veuillez sélectionner une image !')
      }else{
        console.log("Votre image a bien été enregistrée! \nNous vous enverrons une réponse d'expert \nNous vous remercions de votre confiance ...")
      }
    })
  }
  
  

}
