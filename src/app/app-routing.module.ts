import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailformComponent } from './component/detailform/detailform.component';
import { PageSushishopComponent } from './page-sushishop/page-sushishop.component';
const routes: Routes = [
  {path: '',  redirectTo: 'sushi-list', pathMatch:'full'}, 
  {path: 'sushi-list', component : PageSushishopComponent},
  {path: 'sushi/:id', component: DetailformComponent},
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
