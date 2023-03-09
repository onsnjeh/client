import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartsComponent } from './carts/carts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { ListArticleComponent } from './list-article/list-article.component';

import { ListTicketComponent } from './list-ticket/list-ticket.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SeviceComponent } from './sevice/sevice.component';



const routes: Routes = [
 {path:'',component:DashboardComponent},
 {path:'navbar',component:NavbarComponent},
 {path:'header',component:HeaderComponent},
 {path:'cart',component:CartsComponent},
 {path:'client/list-article',component:ListArticleComponent},
 {path:'client/list-ticket',component:ListTicketComponent},
 {path:'client/service',component:SeviceComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
