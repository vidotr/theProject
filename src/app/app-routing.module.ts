import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaqComponent } from './faq/faq.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FaqCatComponent } from './faq-cat/faq-cat.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: AccueilComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'rv', component: ProfileUserComponent },
    { path: 'catFaq/:id', component: FaqCatComponent },
    { path: 'faq', component: FaqComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
