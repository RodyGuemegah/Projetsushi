import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { IBox } from 'src/model/IBox';
import { environment } from '../component/environnement/environnement';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  apiUrl = 'http://localhost:8080/api'; 

  image: any;
  apiService: any;
  private panier: any[] = [];
  apiBaseUrl: any;
  sushis: any[] = [];
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }
  getSushi() {
    return this.http.get(`${environment.apiBaseUrl}`)
  }
  getSushis(): Observable<IBox[]> {
    return this.http.get<IBox[]>(`${environment.apiBaseUrl}`);
  }

  getImage(image:String): any{
    return (environment.pathimage+image)
   
   }
   
    public getBoxDetail(): Observable<IBox[]> {
    return this.http.get<IBox[]>(`${environment.apiBaseUrl}`)
   }

   
   savePanier() {
    localStorage.setItem('objets_panier', JSON.stringify(this.sushis));
  }
  ajouterPanier(ajouterSushis: any)
  {
    this.sushis.push(ajouterSushis);
    this.savePanier();
  }

  loadCart() {
    this.sushis = JSON.parse(localStorage.getItem('objets-panier') as any) || [];
  }
  produitPanier(sushi: any): boolean {
    const index = this.panier.findIndex((p: any) => p.id === sushi.id);
    return index !== -1;
  }
  
  suppSushis(){
    localStorage.clear()
  }
  incrementerQuantite(produit: any) {
    const index = this.panier.findIndex(p => p.id === produit.id);
    if (index !== -1) {
      this.panier[index].quantite++;
    }
  }


   
  }
  
  




  

