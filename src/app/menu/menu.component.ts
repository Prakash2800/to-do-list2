import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {
  const
    item: string;
    isCont1 = false;
    isCont2 = false;
    isCont3 = false;
    isCont4 = true;

  constructor() { }

  ngOnInit() {
  }

  private showContent = (item): void => {
    switch (item) {
        case 'todo':
            this.isCont1 = true;
            this.isCont2 = false;
            this.isCont3 = false;
            this.isCont4 = false;
            break;
        case 'counter':
            this.isCont1 = false;
            this.isCont2 = true;
            this.isCont3 = false;
            this.isCont4 = false;
            break;
        case 'clock':
            this.isCont1 = false;
            this.isCont2 = false;
            this.isCont3 = true;
            this.isCont4 = false;
            break;
        case 'product':
            this.isCont1 = false;
            this.isCont2 = false;
            this.isCont3 = false;
            this.isCont4 = true;
            break;
        default:
            console.log('ki mo supposer fer ici?');
    }
  }


}

