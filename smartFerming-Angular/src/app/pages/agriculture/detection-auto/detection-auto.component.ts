import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * Component
 */
@Component({
  selector: 'app-detection-auto',
  templateUrl: './detection-auto.component.html',
  styleUrls: ['./detection-auto.component.css']
})
export class DetectionAutoComponent implements OnInit {

  /**
   * Selected file of detection auto component
   */
  selectedFile : File ;

  /**
   * Creates an instance of detection auto component.
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
  }

  

}
