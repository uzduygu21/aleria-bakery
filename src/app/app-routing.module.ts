import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: '', component:HomeComponent, pathMatch: 'full' },
  { path: 'gallery', component:GalleryComponent},
  { path: 'contact', component:ContactComponent},
  { path: 'menu', component:MenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
