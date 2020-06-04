import { Component, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/services/images.service';
import { Images } from 'src/app/models/images';
import { Router } from '@angular/router';

@Component({
  selector: 'app-espace-expert',
  templateUrl: './espace-expert.component.html',
  styleUrls: ['./espace-expert.component.css']
})
export class EspaceExpertComponent implements OnInit {

  images: Images;
  constructor(private imagesServices:ImagesService,
              private router:Router) { }

  ngOnInit(): void {
    this.getImages();
  }

  getImages() {
    this.imagesServices.findAll().subscribe(images => {
      this.images = images
    })
  }

  getImgById(imgId: number) {
    this.router.navigate(['/espace-response/image', imgId]);
  }
}
