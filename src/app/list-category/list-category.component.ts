import { Component } from '@angular/core';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent {
 //category
 options = ['All','Juridique', 'Social', 'Fiscal'];
 selectedOption='All';
}
