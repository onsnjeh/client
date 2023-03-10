import { Component } from '@angular/core';
import { document } from '../model/document.model';
import { ticket } from '../model/ticket.model';
import { DocumentService } from '../services/document-service/document.service';
import { TicketService } from '../services/ticket-service/ticket.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
	active = 'list-article-dernier';
 //document
 item1: document[] = [];
 //ticket
 item2: ticket[] = [];
 constructor(
   private service1: DocumentService,
   private service2: TicketService
 ) { }

 ngOnInit() {
   //document
   this.GetDocument();
   //ticket
   this.GetTicket();
 }
 GetDocument() {
   this.service1.getDocument().subscribe((allData) => {
     this.item1 = allData;
     console.log(this.item1);

   });
 }
 GetTicket() {
   this.service2.getTicket().subscribe((allData) => {
     this.item2 = allData;
     console.log(this.item2);

   });
 }

}

