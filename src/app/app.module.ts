import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { AccueilComponent } from './pages/accueil/accueil.component';
import { AboutComponent } from './pages/about/about.component';
import { MotsChefDepComponent } from './pages/mots-chef-dep/mots-chef-dep.component';
import { DepartementComponent } from './pages/departement/departement.component';
import { GalerieComponent } from './pages/galerie/galerie.component';
import { MasterComponent } from './pages/formation/master-master-specialise/master/master.component';
import { ArticleComponent } from './pages/articles/article/article.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        AccueilComponent,
        AboutComponent,
        MotsChefDepComponent,
        DepartementComponent,
        GalerieComponent,
        MasterComponent,
        ArticleComponent
    ],
    imports: [
        RouterModule.forRoot(routes),
        BrowserModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [

    ],
    bootstrap: [
        AppComponent
    ]

})

export class AppModule { }
