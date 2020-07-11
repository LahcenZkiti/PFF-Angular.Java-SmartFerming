import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/models/images';
import { MaladiePlante } from 'src/app/models/maladies-plant';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-response-expert',
  templateUrl: './response-expert.component.html',
  styleUrls: ['./response-expert.component.css']
})
export class ResponseExpertComponent implements OnInit {

  images : Image 
  maladiePlantes : MaladiePlante[]
  constructor(private imagesService:ImagesService) { }

  ngOnInit(): void {
    this.getImagesTrit();
  }

  getImagesTrit() {
    this.imagesService.findAllTrit().subscribe(data => {
      this.images = data
      console.log(JSON.stringify(data));
    })
  }

}
