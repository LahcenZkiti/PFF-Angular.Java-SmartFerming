import { Component, OnInit } from '@angular/core';
import { MaladiesService } from 'src/app/services/maladies.service';
import { MaladiesPlant } from 'src/app/models/maladies-plant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-maladie-plant',
  templateUrl: './list-maladie-plant.component.html',
  styleUrls: ['./list-maladie-plant.component.css']
})
export class ListMaladiePlantComponent implements OnInit {

  maladies : MaladiesPlant; 

  constructor(public maladieService:MaladiesService,
              private router: Router) { }

  ngOnInit(): void {
    this.getMaladies();
  }

  getMaladies() {
    this.maladieService.findAll().subscribe(maladie => {
      this.maladies = maladie;
      // console.log(JSON.stringify(maladie));
    })
  }

  getMaladieByName(id: number) {
    this.maladieService.findById(id).subscribe( maladie => {
      this.maladies = maladie;
      console.log(JSON.stringify(maladie));
    })
  }

  add() {
    this.router.navigate(['/add-maladies']);
  }


  getById(id: number) {
    this.router.navigate(['/info/maladie',id]);
  }

  searchByName() {
    let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
  }
}
