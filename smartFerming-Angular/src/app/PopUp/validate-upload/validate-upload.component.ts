import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

/**
 * Component
 */
@Component({
  selector: 'app-validate-upload',
  templateUrl: './validate-upload.component.html',
  styleUrls: ['./validate-upload.component.css']
})
export class ValidateUploadComponent implements OnInit {

  /**
   * Input  of validate upload component
   */
  @Input() msg;
  /**
   * Creates an instance of validate upload component.
   * @param activeModal 
   */
  constructor(public activeModal:NgbActiveModal) { }

  
  ngOnInit(): void {
  }

  

}
