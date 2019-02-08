import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-faq-cat',
  templateUrl: './faq-cat.component.html',
  styleUrls: ['./faq-cat.component.css']
})
export class FaqCatComponent implements OnInit {
  rubrique = [];
  nomProjet = 'ourProject';
  selected = 'Francais';
  id: any;
  private sub: any;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
    });

    if (this.id == 1) {
      this.rubrique.push("Enregistrement et Activation de votre compte",
        "Trouver un "+this.nomProjet,
        "Créer votre propre"+this.nomProjet ,
        "Rejoindre et Quitter "+this.nomProjet,
        "Navigation",
        "Des Blogs, des Questions, et des Images",
        "Vidéos",
        "Des Quizz",
        "Des sondages",
        "Entrées Wiki",
        "Dossier Partagé");
    }

    if (this.id == 2) {
      this.rubrique.push(
        "Se lancer : Télécharger ACM",
        "Se lancer : Créer votre Communauté",
        "Pour commencer : Mise en place de la communauté",
        "Nommer son"+this.nomProjet,
        "Options de confidentialité",
        "Personnaliser votre "+this.nomProjet,
        "Modules actifs : Une introduction",
        "Modules actifs : Types",
        "Modules actifs : Permissions",
        "Navigation de la communauté",
        "Apparence"

      );
    }

    if (this.id == 3) {
      this.rubrique.push(
        "Pour commencer : Fan Clubs",
        "Pour commencer : Votre statut de partenaire",
        "Contenu sur le Web",
        "Fan Club : Contenu protégé",
        "Types de post",
        "Remerciements à vos fans",
        "Vos fans",
        "Directives et pratiques exemplaires"

      );
    }

    if (this.id == 4) {
      this.rubrique.push(
        "Faire une requête d'enlèvement de droits de l'auteur",
        "Contactez L'Équipe "+this.nomProjet,
        "Demandes de divulgation d'urgence",
        "Demandes de préservation",
        "Soumettre un ordre à "+this.nomProjet,
        "Identification de l'utilisateur et sécurité sur "+this.nomProjet,
        "La sécurité dans "+this.nomProjet+" : les règles et les directives",
        "Supprimer un compte",
        "Comment "+this.nomProjet+" se fonctionne-t-il ?"

      );
    }


  }

}
