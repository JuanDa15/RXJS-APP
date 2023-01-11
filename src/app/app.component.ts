import { Component } from '@angular/core';

interface AsideItem {
  name: string;
  isOpen: boolean;
  childs: ChildAsideItem[];
}

interface ChildAsideItem {
  name: string;
  url: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rxjs-app';

  showAside = false;

  public asideData: AsideItem[] = [
    {
      name: 'Basic observable',
      isOpen: false,
      childs: [
        {
          name: 'Observable',
          url: '/observable'
        },
        {
          name: 'Subs and unsubs',
          url: '/subscription'
        },
      ]
    }
  ]
}
