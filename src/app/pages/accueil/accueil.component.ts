import { Component } from '@angular/core';
import {Annonce} from "../../models/annonce.module";
import {AnnonceService} from "../../services/annonce.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {
  annonces: Annonce[] = [];
  firstElements:Annonce[]=[];
  annoncesSize=0;
  sliderAnnonceRange:any;
  numberSlides=0
  annonceRange:any;
  sliderAnnonces:Annonce[]=[];

  constructor(
      private annonceService: AnnonceService,
      private router: Router
  ) {}

  ngOnInit(): void {
    this.loadAnnonces();
    this.loadAnnoncesSlider();
    if(this.numberSlides>=3){
      this.firstElements=this.annonces.slice(0, 3);
    }
    this.annonceRange=Array.from({ length: 2 }, (_, i) => i + 1);
  }

  loadAnnonces(): void {
    this.annonceService.getNewestSixAnnonces().subscribe(data => {
      this.annonces = data;
      this.annoncesSize=data.length;
    });
  }
  loadAnnoncesSlider():void{
    this.annonceService.getSliderAnnonces().subscribe(data=>{
      this.sliderAnnonces=data;
      this.sliderAnnonceRange=Array.from({ length: data.length }, (_, i) => i + 1);
    });
  }
}
