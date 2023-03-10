import { Component, Input } from '@angular/core';
import { priority } from '../model/priority.model';
import { ListPriorityService } from '../services/priority-service/list-priority.service';

@Component({
  selector: 'app-priority',
  templateUrl: './priority.component.html',
  styleUrls: ['./priority.component.css']
})
export class PriorityComponent {
 //priority
//  options = ['normale','urgent', 'medium'];
//  selectedOption='normale';
// @Input() listPriority: priority;
listPriority:any;
constructor(private list: ListPriorityService) {
  // this.listPriority = {
  //   id: 0,
  //   priority: '',
    

  // };
}
ngOnInit(): void {
  // console.log(this.item1);
  this.list.getListPriority().subscribe((allData:any) => {
    this.listPriority= allData;
    })
}
// ngOnInit(): void {
//   console.log(this.listPriority);
// }
}
