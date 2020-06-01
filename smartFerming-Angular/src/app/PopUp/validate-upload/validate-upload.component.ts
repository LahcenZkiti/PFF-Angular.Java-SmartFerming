import { Component, OnInit } from '@angular/core';
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
   * Creates an instance of validate upload component.
   * @param activeModal 
   */
  constructor(private activeModal:NgbActiveModal) { }

  ngOnInit(): void {
  }

  /**
   * Confirms validate upload component
   */
  confirm(){
    this.activeModal.close(true);
  }

  /**
   * Cancels validate upload component
   */
  cancel(){
    this.activeModal.close(false);
  }

}
