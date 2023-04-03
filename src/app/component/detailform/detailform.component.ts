import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { ActivatedRoute } from '@angular/router';
import {IBox} from 'src/model/IBox';
import { environment } from '../environnement/environnement';
@Component({
  selector: 'app-detailform',
  templateUrl: './detailform.component.html',
  styleUrls: ['./detailform.component.css']
})
export class DetailformComponent implements OnInit {
  boxSushi : IBox | undefined;
  id!: number;
  boxSushis : any;
  image: string = "http://localhost:8080/api/image/"
  sushis: any[] = [];
  constructor(private ApiService: ApiService, private activatedroute: ActivatedRoute) {
    
   }

   ngOnInit(): void {
    let id = this.activatedroute.snapshot.paramMap.get("id");
    let boxId = id ? +id:0;
    console.log('idBox : ' + boxId);
    console.log('param id : ' + id);
    this.ApiService.getBoxDetail().subscribe({
      next: (boxes: IBox[]) => {
        console.log(boxes);
        this.boxSushi = boxes.find(b => b.id === boxId);
        console.log(this.boxSushi);
      },
      error: (er) => console.log(er)
    });
  }
  getImage(image:String): any{
    return (environment.pathimage+image)
   
   }
  
}  