import { Component } from '@angular/core';

interface ticket {
  ticket:string
	nameClient:string;
	priority: string;
	category: string;
  expert:string;
  date:string;
}

const COUNTRIES: ticket[] = [
	{
		ticket:'1',
    nameClient: 'Ticket1',
		priority: 'normale',
		category: 'juridique',
		expert: 'nom  expert 1',
    date:'12/11/2023'
	},
	{
		ticket:'2',
    nameClient: 'Ticket2',
		priority: 'urgent',
		category: 'fiscal',
		expert: 'nom  expert 1',
    date:'12/11/2023'
	},
	{
		ticket:'3',
    nameClient: 'Ticket3',
		priority: 'normale',
		category: 'social',
		expert: 'nom  expert 1',
    date:'12/11/2023'
	},
	{
		ticket:'4',
    nameClient: 'Ticket4',
		priority: 'normale',
		category: 'juridique',
		expert: 'nom  expert 1',
    date:'12/11/2023'
	},
];

@Component({
  selector: 'app-list-ticket-dernier',
  templateUrl: './list-ticket-dernier.component.html',
  styleUrls: ['./list-ticket-dernier.component.css']
})
export class ListTicketDernierComponent {
	countries = COUNTRIES;

}
