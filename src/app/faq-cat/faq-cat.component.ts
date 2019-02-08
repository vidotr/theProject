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
        "Trouver un Amino",
        "Créer votre propre Amino",
        "Rejoindre et Quitter Aminos",
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
        "Nommer son Amino",
        "Options de confidentialité",
        "Personnaliser votre Amino",
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
        "Contactez L'Équipe Amino",
        "Demandes de divulgation d'urgence",
        "Demandes de préservation",
        "Soumettre un ordre à Amino",
        "Identification de l'utilisateur et sécurité sur Amino",
        "La sécurité dans Amino : les règles et les directives",
        "Supprimer un compte",
        "Comment Amino se fonctionne-t-il ?"

      );
    }


  }

}
