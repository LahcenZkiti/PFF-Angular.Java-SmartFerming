import { Component, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/services/images.service';
import { Images } from 'src/app/models/images';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-espace-expert',
  templateUrl: './espace-expert.component.html',
  styleUrls: ['./espace-expert.component.css']
})
export class EspaceExpertComponent implements OnInit {

  images: Images;
  constructor(private imagesServices:ImagesService,
              private router:Router,
              private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getImages();
  }

  getImages() {
    this.imagesServices.findAll().subscribe(images => {
      this.images = images
    })
  }

  traitImg(imgId: number) {
    // this.modalService.open(TraiterImgageComponent);
    this.router.navigate(['/espace-response/image', imgId]);
  }
}
