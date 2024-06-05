import { Routes } from '@angular/router';
import {AccueilComponent} from "./pages/accueil/accueil.component";
import {AboutComponent} from "./pages/about/about.component";
import {MotsChefDepComponent} from "./pages/mots-chef-dep/mots-chef-dep.component";
import {DepartementComponent} from "./pages/departement/departement.component";
import {GalerieComponent} from "./pages/galerie/galerie.component";
import {MasterComponent} from "./pages/formation/master-master-specialise/master/master.component";
import {ArticleComponent} from "./pages/articles/article/article.component";
export const routes: Routes = [
  {
    path: '',
    component:AccueilComponent
  },
  {
    path:'a-propos-departement-informatique',
    component:AboutComponent
  },
  {
    path:'mots-chef-departement',
    component:MotsChefDepComponent
  },
  {
    path:'departement',
    component:DepartementComponent
  },
  {
    path:'histoire-galerie',
    component:GalerieComponent
  },
  {
    path:'master',
    component:MasterComponent
  },
  {
    path:':link',
    component:ArticleComponent
  }
];
