import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ticket } from 'src/app/model/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {


  baseUrl = 'http://localhost:3000/ticket';

  constructor(private http: HttpClient) {}

  getTicket() {
    return this.http.get<ticket []>(this.baseUrl);
  }
}
