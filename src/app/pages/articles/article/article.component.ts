import {Component, OnInit} from '@angular/core';
import {AnnonceService} from "../../../services/annonce.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Annonce} from "../../../models/annonce.module";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit{
  selectedAnnonce:any;
  annonces:Annonce[]=[];
  link:any;
  constructor(
      private annonceService: AnnonceService,
      private route:ActivatedRoute
  ) {}
  ngOnInit(): void {
    // Retrieve the value of the 'link' parameter from the route
    this.loadAnnonce(this.route.snapshot.paramMap.get('link'));
    this.loadAnnonces();
  }
  loadAnnonce(slug:any):void{
    this.annonceService.getAnnonceBySlug(slug).subscribe(data=>{
      this.selectedAnnonce=data;
    })
  }
  loadAnnonces(): void {
    this.annonceService.getNewestSixAnnonces().subscribe(data => {
      this.annonces = data;
    });
  }
}
