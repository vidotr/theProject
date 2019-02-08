import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-faq-cat',
  templateUrl: './faq-cat.component.html',
  styleUrls: ['./faq-cat.component.css']
})
export class FaqCatComponent implements OnInit {
 rubrique1 = [
   "Enregistrement et Activation de votre compte", 
   "Trouver un Amino",
   "Créer votre propre Amino",
   "Rejoindre et Quitter Aminos",
   "Navigation",
   "Des Blogs, des Questions, et des Images",
   "Vidéos",
   "Des Quizz",
   "Des Quizz",
   "Des Quizz",
   "Des Quizz",
   "Des Quizz",
   "Des Quizz",
   "Des Quizz",
   "Des Quizz",
   "Des Quizz",
   "Des Quizz",
   "Des Quizz",
   
 ];
 rubrique2 =  [];
 rubrique3 =  [];
 rubrique4 =  [];


  id: any;
  private sub: any;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
    });

    if (this.id == 1) {
          
    }

    if (this.id == 2) {

    }

    if (this.id == 3) {

    }

    if (this.id == 4) {

    }

  }


}
