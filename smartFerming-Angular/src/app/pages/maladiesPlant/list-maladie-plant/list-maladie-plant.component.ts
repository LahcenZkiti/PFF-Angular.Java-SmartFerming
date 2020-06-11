import { Component, OnInit } from '@angular/core';
import { MaladiesService } from 'src/app/services/maladies.service';
import { MaladiePlante } from 'src/app/models/maladies-plant';
import { Router } from '@angular/router';

/**
 * Component
 */
@Component({
  selector: 'app-list-maladie-plant',
  templateUrl: './list-maladie-plant.component.html',
  styleUrls: ['./list-maladie-plant.component.css']
})
export class ListMaladiePlantComponent implements OnInit {

  /**
   * Maladies  of list maladie plant component
   */
  maladies : MaladiePlante; 

  /**
   * Creates an instance of list maladie plant component.
   * @param maladieService 
   * @param router 
   */
  constructor(public maladieService:MaladiesService,
              private router: Router) { }

  /**
   * on init
   */
  ngOnInit(): void {
    this.getMaladies();
  }

  /**
   * Gets maladies
   */
  getMaladies() {
    this.maladieService.findAll().subscribe(maladie => {
      this.maladies = maladie;
      // console.log(JSON.stringify(maladie));
    })
  }

  // /**
  //  * Gets maladie by name
  //  * @param id 
  //  */
  // getMaladieByName(id: number) {
  //   this.maladieService.findById(id).subscribe( maladie => {
  //     this.maladies = maladie;
  //     console.log(JSON.stringify(maladie));
  //   })
  // }

  /**
   * Adds list maladie plant component
   */
  add() {
    this.router.navigate(['/add-maladies']);
  }


  /**
   * Gets by id
   * @param id 
   */
  getById(idMld: number) {
    this.router.navigate(['/info/maladie',idMld]);
    console.log("id is => ", idMld)
  }

  /**
   * Searchs by name
   */
  searchByName() {
   
  }
}
