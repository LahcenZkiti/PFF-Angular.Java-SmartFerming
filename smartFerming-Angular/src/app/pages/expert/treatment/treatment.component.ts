import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/models/images';
import { MaladiePlante } from 'src/app/models/maladies-plant';
import { ActivatedRoute, Router } from '@angular/router';
import { ImagesService } from 'src/app/services/images.service';
import { MaladiesService } from 'src/app/services/maladies.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-treatment',
  templateUrl: './treatment.component.html',
  styleUrls: ['./treatment.component.css']
})
export class TreatmentComponent implements OnInit {

  
  images : Image = new Image();

  maladiePlantes: MaladiePlante ;

  selectedMaladie: MaladiePlante = new MaladiePlante();

  constructor(private route:ActivatedRoute,
              private imagesService:ImagesService,
              private maladieService:MaladiesService,
              private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(imgId => {
      console.log("image_id is: ",imgId);
      this.imagesService.findByID(imgId.id).subscribe( image => {
        this.images = image;
        console.log("get image infos ", JSON.stringify(image));
        if (image === undefined){
          console.log("can't find image with id: ", imgId);
          return
        }
      });
      
      this.getMaladies();
    })
    
  }

  getMaladies(): any {
    this.maladieService.findAll().subscribe(data =>{
      this.maladiePlantes = data;
      console.log("get data of maladies ", JSON.stringify(data));

      if(data === undefined){
        console.log("cant't find data")
      }
    })
  }

  onValid(img:NgForm) {
    this.imagesService.addResp(this.images).subscribe(image => {
      this.images = image;
      img.reset();
      console.log("data sent ==>",JSON.stringify(image));
    })
  }
}
