import { Component, OnInit } from '@angular/core';
import { Categorie } from '../categorie';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

    // ListCategory: Array<Categorie>;
    connectee: boolean;
    ListCategoryTest: Categorie[] = [
        { nom: 'Technologie', description: 'Toutes les nouveauté sur la technologie', image: 'a.jpeg', favori: false },
        { nom: 'K-pop', description: 'Toutes les nouveauté sur la K-pop', image: 'One', favori: false },
        { nom: 'Drama', description: 'Toutes les nouveauté sur les Dramas', image: 'pdp.png', favori: true },
        { nom: 'Anime', description: 'Toutes les nouveauté sur les Animés', image: 'One', favori: false },
    ];

  constructor() { }

  ngOnInit() {
      this.connectee = false;
      // this.ListCategory = new Array();
  }

}
