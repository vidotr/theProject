import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaqComponent } from './faq/faq.component' ;
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { GalleryComponent } from './gallery/gallery.component';
const routes: Routes = [
  {path:'foireaquestion',component: FaqComponent  },
  {path: 'gallery', component: GalleryComponent},
  {path: '/rv', component: ProfileUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
