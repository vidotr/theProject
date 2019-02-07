import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { AccueilComponent } from './accueil/accueil.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: AccueilComponent},
  {path: 'gallery', component: GalleryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
