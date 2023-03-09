import { Component } from '@angular/core';

@Component({
  selector: 'app-priority',
  templateUrl: './priority.component.html',
  styleUrls: ['./priority.component.css']
})
export class PriorityComponent {
 //priority
 options = ['normale','urgent', 'medium'];
 selectedOption='normale';
}
