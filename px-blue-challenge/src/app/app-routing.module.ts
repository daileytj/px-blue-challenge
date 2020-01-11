import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardHolderComponent } from './card-holder/card-holder.component';


const routes: Routes = [
  {
    path: 'home',
    component: CardHolderComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
