import { Component } from '@angular/core';
import { ListThemeService } from '../services/theme-service/list-theme.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent {
//theme
// options = ['All','code', 'Lois', 'Arrêtés'];
//  selectedOption='All';
listTheme :any;
constructor(private list: ListThemeService) {
    // this.item1 = {
    //   id: 0,
    //   category: '',
     
        
    // };
}
ngOnInit(): void {
    // console.log(this.item1);
    this.list.getListTheme().subscribe((allData:any) => {
      this.listTheme = allData;
      })
}
}
