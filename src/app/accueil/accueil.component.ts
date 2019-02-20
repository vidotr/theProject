import { Component, OnInit } from '@angular/core';
import { Categorie } from '../categorie';
import { CategorieService } from '../categorie.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
    ListCategory: Array<Categorie>;
    ListZaffaire: Array<any>;
    connectee: boolean;

    uneCategorie: Categorie;
    ListCategoryTest: Categorie[] = [
        { nom: 'Technologie', description: 'Toutes les nouveauté sur la technologie', image: 'a.jpeg', favori: false },
        { nom: 'K-pop', description: 'Toutes les nouveauté sur la K-pop', image: 'One', favori: false },
        { nom: 'Drama', description: 'Toutes les nouveauté sur les Dramas', image: 'pdp.png', favori: true },
        { nom: 'Anime', description: 'Toutes les nouveauté sur les Animés', image: 'One', favori: false },
    ];

  constructor(private CatService: CategorieService) { }

  ngOnInit() {
      this.connectee = false;
      this.ListZaffaire = new Array();

      /*this.CatService.getHttpArrayFormat().subscribe(val => {
        console.log(val);
      });*/
      this.uneCategorie = new Categorie();
      this.CatService.getHttp().subscribe(val => {
        console.log(val);
        this.ListZaffaire = val;
        /*this.uneCategorie.nom = val.genre;
        this.uneCategorie.description = val.title;
        console.log('teh ' + val[0].genre);*/
      });
  }

}
