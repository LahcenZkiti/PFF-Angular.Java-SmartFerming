import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-consulter-expert',
  templateUrl: './consulter-expert.component.html',
  styleUrls: ['./consulter-expert.component.css']
})
export class ConsulterExpertComponent implements OnInit {

  /**
   * Url  of expert component
   */
  API_URL = 'http://localhost:8080/api/img/';

  /**
   * Selected file of expert component
   */
  selectedFile : File ;
  errorMessage = '';
  progress: number = 0;

  /**
   * Creates an instance of expert component.
   * @param http 
   */
  constructor(private http:HttpClient,
              // private modalService: NgbModal,
              private toastr: ToastrService) { }

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
    this.http.post(this.API_URL + 'telechargerimage', fd, {
      reportProgress:true,
      observe:'events'
    })
    .subscribe(
      event => {
        if(event.type === HttpEventType.UploadProgress){
          this.progress = Math.round(event.loaded/event.total * 100);
          console.log('Upload Progress: '+ Math.round(event.loaded / event.total * 100) + '%')
        }else if (event.type === HttpEventType.Response){
          setTimeout(() => {
            this.progress = 0;
          }, 1500);
          console.log(event);
          this.successNot();
        }
      },
    
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.errorNot();
      }
    );
  }


  /**
   * Success notifications
   */
  successNot(){
    this.toastr.success('Votre image a bien été enregistrée!', 'Upload msg', {
      progressAnimation: 'increasing'
    });
  }

  /**
   * Errors notifications
   */
  errorNot(){
    this.toastr.error('veuillez sélectionner une image !');
  }
  

}
