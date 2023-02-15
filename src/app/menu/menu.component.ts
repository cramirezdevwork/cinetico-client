import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  public openMenu = false;
  public hideButton(){
    this.openMenu = true;
  }
  public showButton(){
    this.openMenu = false;
  }
}
