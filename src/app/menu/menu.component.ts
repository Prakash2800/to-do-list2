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
  isCont2 = true;
  isCont3 = false;

  constructor() { }

  ngOnInit() {
  }

  private showContent = (item): void => {
    switch (item) {
        case 'todo':
            console.log('i am to do');
            this.isCont1 = true;
            this.isCont2 = false;
            this.isCont3 = false;
            break;
        case 'counter':
            console.log('i am counter');
            this.isCont1 = false;
            this.isCont2 = true;
            this.isCont3 = false;
            break;
        case 'clock':
            console.log('i am clock');
            this.isCont1 = false;
            this.isCont2 = false;
            this.isCont3 = true;
            break;
        default:
            console.log('ki mo supposer fer ici?');
    }
  }


}

