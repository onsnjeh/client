import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbCollapseModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { CartsComponent } from './carts/carts.component';
import { NbreTicketTotalComponent } from './nbre-ticket-total/nbre-ticket-total.component';
import { NbreTicketOuvertComponent } from './nbre-ticket-ouvert/nbre-ticket-ouvert.component';
import { NbreTicketFermeComponent } from './nbre-ticket-ferme/nbre-ticket-ferme.component';
import { NbreDocumentComponent } from './nbre-document/nbre-document.component';

import { ListTicketDernierComponent } from './list-ticket-dernier/list-ticket-dernier.component';
import { ListArticleDernierComponent } from './list-article-dernier/list-article-dernier.component';
import { DecimalPipe, NgFor } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { ListArticleComponent } from './list-article/list-article.component';
import { ListTicketComponent } from './list-ticket/list-ticket.component';
import { SeviceComponent } from './sevice/sevice.component';
import { BoutonCreateTicketComponent } from './bouton-create-ticket/bouton-create-ticket.component';
import { BoutonOpenComponent } from './bouton-open/bouton-open.component';
import { FormsModule } from '@angular/forms';
import { SpecialiteComponent } from './specialite/specialite.component';
import { ListCategoryComponent } from './list-category/list-category.component';
import { PriorityComponent } from './priority/priority.component';
import { ThemeComponent } from './theme/theme.component';
import { TypeComponent } from './type/type.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    HeaderComponent,
    CartsComponent,
    NbreTicketTotalComponent,
    NbreTicketOuvertComponent,
    NbreTicketFermeComponent,
    NbreDocumentComponent,

    ListTicketDernierComponent,
    ListArticleDernierComponent,

    ListArticleComponent,
    ListTicketComponent,
    SeviceComponent,
    BoutonCreateTicketComponent,
    BoutonOpenComponent,
    ListCategoryComponent,
    PriorityComponent,
    TypeComponent,
    ThemeComponent,
    SpecialiteComponent,
   
   


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DecimalPipe,
     NgFor,
     FormsModule,
     NgbModule,
     NgbCollapseModule,
     NgbNavModule,
     HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
