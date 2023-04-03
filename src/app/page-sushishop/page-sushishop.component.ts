import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { IBox } from 'src/model/IBox';
import { environment } from '../component/environnement/environnement';

@Component({
  selector: 'app-page-sushishop',
  templateUrl: './page-sushishop.component.html',
  styleUrls: ['./page-sushishop.component.css']
})
export class PageSushishopComponent implements OnInit {
  [x: string]: any;
  boxSushis!: any [] ;
  sushis: any[] = [];
  pathImage: string = "http://localhost:8080/api/image/"
  sushisList!: any []
  subTotal!: any;
  total : any;
  constructor(private ApiService: ApiService) { }

  ngOnInit() {
      this.ApiService.getSushis().subscribe((data: any) => {
        this.sushis = data;
      });
      this.ApiService.getBoxDetail().subscribe(
        (sushis: IBox[]) => {
          this.sushis = sushis;
        },
        (error: any) => {
          console.error(error);
        }
      );  }
  
  getImage(image:String): any{
    return (environment.pathimage+image)
   
   }
   ajouterPanier(sushi: any) {
   
  
    if (!this.ApiService.produitPanier(this.sushis)) {
      sushi.quantite = 1;
      this.ApiService.ajouterPanier(sushi);
      this.ApiService.getSushis().subscribe((nouveauxSushis: any[]) => {
        this.sushis = [...nouveauxSushis];
        alert('Le produit a été ajouté au panier!');
        this.subTotal = sushi.prix
      });
    } else {
      this.ApiService.incrementerQuantite(sushi);
      this.ApiService.getSushis().subscribe((nouveauxSushis: any[]) => {
        this.sushis = [...nouveauxSushis];
        alert('La quantité du produit a été mise à jour dans le panier!');
      });
    }

    this.ApiService.savePanier();
    
  
}
}
