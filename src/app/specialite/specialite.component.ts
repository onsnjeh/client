import { Component } from '@angular/core';

@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.component.html',
  styleUrls: ['./specialite.component.css']
})
export class SpecialiteComponent {
//spécialité
options = ['All','loi', 'droit', 'tva'];
selectedOption='All';
}
