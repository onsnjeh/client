import { Component, Input } from '@angular/core';
import { category } from '../model/category.model';
import { ListCategoryService } from '../services/category-service/list-category.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent {
 //category
//  options = ['All','Juridique', 'Social', 'Fiscal'];
//  selectedOption='All';
//category
//  options = ['All','Juridique', 'Social', 'Fiscal'];
//   @Input()selectedOption!: string;
// @Input() item1 : category;
listCategory :any;
constructor(private list: ListCategoryService) {
    // this.item1 = {
    //   id: 0,
    //   category: '',
     
        
    // };
}
ngOnInit(): void {
    // console.log(this.item1);
    this.list.getListCategory().subscribe((allData:any) => {
      this.listCategory = allData;
      })
}
// changeList(e){
//   console.log(e.target.valeur)
// }
}
