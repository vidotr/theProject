import { Component, OnInit } from '@angular/core';
import { Categorie } from '../categorie';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

    ListCategory: Array<Categorie>;
  constructor() { }

  ngOnInit() {
  }

}
