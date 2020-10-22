import { Component, OnInit } from '@angular/core';
import { MaladiesService } from 'src/app/services/maladies.service';
import { MaladiePlante } from 'src/app/models/maladies-plant';
import { Router } from '@angular/router';
import { Console } from 'console';

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

  maladies : MaladiePlante[] ;

  /**
   * Creates an instance of list maladie plant component.
   * @param maladieService
   * @param router
   */
  constructor(private maladieService:MaladiesService,
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
    this.maladieService.findAll().subscribe(maladies => this.maladies = maladies )
  }

  /**
   * Adds list maladie plant component
   */
  add() {
    this.router.navigate(['/add-maladies']);
  }

  /**
   * Delete maladie
   * @param id
   */
  deleteMaladie(id){
    if(confirm("Are you sure to delete this maladiePlante")){
      this.maladieService.delete(id).subscribe(()=>{
        this.maladies = this.maladies.filter(maladie => maladie.idMaladiePlante != id);
      })
    }
  }

  editMaladie(id){
    this.router.navigate(['edit/maladie', id]);
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
  searchByName(query) {
    console.log("ok")
  }
}
