import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MaladiesService } from 'src/app/services/maladies.service';
import { MaladiePlante } from 'src/app/models/maladies-plant';
import { error } from 'protractor';

@Component({
  selector: 'app-info-maladies',
  templateUrl: './info-maladies.component.html',
  styleUrls: ['./info-maladies.component.css']
})
export class InfoMaladiesComponent implements OnInit {

  maladies : MaladiePlante ;
  constructor(private route:ActivatedRoute,
              private router:Router,
              private maladiesService:MaladiesService) { }

  ngOnInit(): void {
    this.route.params.subscribe(mldId => {  
      console.log("id is => ", mldId)
      this.maladiesService.findById(mldId.id).subscribe( maladie => {
        this.maladies = maladie;
        console.log(JSON.stringify(maladie));
      })

      error => {
        console.log("error : ", error);
      }
    })
  }

}
