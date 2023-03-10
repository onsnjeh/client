import { Component } from '@angular/core';
import { ListTypeService } from '../services/type-service/list-type.service';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent {
 //type
//  options = ['All','tva', 'comptabilte', 'Fiscal'];
//  selectedOption='All';
listType :any;
constructor(private list: ListTypeService) {
    // this.item1 = {
    //   id: 0,
    //   category: '',
     
        
    // };
}
ngOnInit(): void {
    // console.log(this.item1);
    this.list.getListType().subscribe((allData:any) => {
      this.listType = allData;
      })
}
}
