import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MaladiesService } from 'src/app/services/maladies.service';
import { MaladiesPlant } from 'src/app/models/maladies-plant';

@Component({
  selector: 'app-info-maladies',
  templateUrl: './info-maladies.component.html',
  styleUrls: ['./info-maladies.component.css']
})
export class InfoMaladiesComponent implements OnInit {

  maladies : MaladiesPlant ;
  constructor(private route:ActivatedRoute,
              private router:Router,
              private maladiesService:MaladiesService) { }

  ngOnInit(): void {
    this.route.params.subscribe(mldId => {
      this.maladiesService.findById(mldId.id).subscribe(maladie => {
        this.maladies = maladie;
        console.log(JSON.stringify(maladie));
      })
    })
  }

}
