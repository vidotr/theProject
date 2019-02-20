import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { FaqQuestionService } from '../faq-question.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
 
})
export class FaqComponent implements OnInit {
  nomProjet = 'ourProject';
  selected = 'Francais';

  id: any;
  private sub: any;

  constructor(private route: ActivatedRoute,private router: Router,private faqQuest: FaqQuestionService ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
       // In a real app: dispatch action to load the details here.
    });

   /*this.faqQuest.getHttp().subscribe(val => {
      console.log(val);
    });*/
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  changeCat(id) {
    this.router.navigate(['/catFaq/', id]);
  }
}
