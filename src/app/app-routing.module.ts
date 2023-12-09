import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpidermanComponent } from './spiderman/spiderman.component';
import { MarvelpageComponent } from './marvelpage/marvelpage.component';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

export const routes: Routes = [
  {path:'',component:MarvelpageComponent},
  {path:'home',component:MarvelpageComponent},
  {path:'spiderman',component:SpidermanComponent}
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
