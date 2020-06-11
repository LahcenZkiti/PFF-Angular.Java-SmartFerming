import { Component, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/services/images.service';
import { Image } from 'src/app/models/images';
import { MaladiePlante } from 'src/app/models/maladies-plant';

@Component({
  selector: 'app-espace-user',
  templateUrl: './espace-user.component.html',
  styleUrls: ['./espace-user.component.css']
})
export class EspaceUserComponent implements OnInit {

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
