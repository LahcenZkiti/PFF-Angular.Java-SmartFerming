import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detection-auto',
  templateUrl: './detection-auto.component.html',
  styleUrls: ['./detection-auto.component.css']
})
export class DetectionAutoComponent implements OnInit {

  url = 'http://localhost:8080/telechargerimage';

  selectedFile : File ;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
    console.log(event);
  }

  onUpload(){
  }

  

}
