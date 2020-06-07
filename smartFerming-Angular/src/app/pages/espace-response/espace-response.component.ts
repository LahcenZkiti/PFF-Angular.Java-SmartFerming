import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImagesService } from 'src/app/services/images.service';
import { Images } from 'src/app/models/images';
import { NgForm } from '@angular/forms';
import { MaladiesPlant } from 'src/app/models/maladies-plant';

@Component({
  selector: 'app-espace-response',
  templateUrl: './espace-response.component.html',
  styleUrls: ['./espace-response.component.css']
})
export class EspaceResponseComponent implements OnInit {

  images : Images = {
    image:'',
    etatTraitement:false,
    urlImage: '',
    infosCompl:'',
    maladiePlantes:[
      {
        nomMaladie:'',
        symptomes:'',
        traitement:'',
        causes:'',
        actionsPreventives:''
      }
    ]
  }

  maladies: MaladiesPlant;

  constructor(private route:ActivatedRoute,
              private imagesService:ImagesService) { }

  ngOnInit(): void {
    this.route.params.subscribe(imgId => {
      this.imagesService.findByID(imgId.id).subscribe( image => {
        this.images = image;
        console.log(image);
      });
      console.log(imgId);
    })
  }


  onValid(form:NgForm) {

  }

}
