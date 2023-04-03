import { Component } from '@angular/core';
import { IBox } from 'src/model/IBox';
import { ApiService } from 'src/app/service/api.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent { 
    handleLinkClick(event: Event) {
      event.preventDefault();
      console.log('Link clicked');
    }

    
    boxes: IBox[] = []
    panier: any[] = []
    sushis: any;
    subTotal: any;
  passerCommande: any;
    constructor(private ApiService: ApiService) { }
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
  addToCart(box: IBox) {
    const cartItem = this.panier.find(item => item.box.id === box.id);
    if (cartItem) {
      cartItem.quantity++;
    } else {
      this.panier.push({
        box: box,
        quantity: 1
      });
    }
  }
  
  updatePanier() {
    this.panier = this.panier.filter(item => item.quantity > 0);
  }
  }

