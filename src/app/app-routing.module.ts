import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AccueilComponent } from './accueil/accueil.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: AccueilComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'rv', component: ProfileUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
