import { Component, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/services/images.service';
import { Image } from 'src/app/models/images';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

/**
 * Component
 */
@Component({
  selector: 'app-espace-expert',
  templateUrl: './espace-expert.component.html',
  styleUrls: ['./espace-expert.component.css']
})
export class EspaceExpertComponent implements OnInit {

  /**
   * Images  of espace expert component
   */
  images: Image;

  /**
   * Creates an instance of espace expert component.
   * @param imagesServices 
   * @param router 
   * @param modalService 
   */
  constructor(private imagesServices:ImagesService,
              private router:Router,
              private modalService: NgbModal) { }

  /**
   * on init
   */
  ngOnInit(): void {
    this.getImages();
  }

  /**
   * Gets images
   */
  getImages() {
    this.imagesServices.findAllNonTrit().subscribe(images => {
      this.images = images
    })
  }

  /**
   * Traits img
   * @param imgId 
   */
  traitImg(imgId: number) {
    // this.modalService.open(TraiterImgageComponent);
    this.router.navigate(['/espace-response/image', imgId]);
  }
}
