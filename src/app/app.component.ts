import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Router, ActivatedRoute, NavigationEnd, Event} from '@angular/router';
/*import {APP_BASE_HREF} from '@angular/common';*/

declare var jQuery: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']/*,
  providers: [{provide: APP_BASE_HREF, useValue: '/pessoaweb/'}]*/
})


export class AppComponent {
  title = 'app works!';

  constructor(private titleService: Title, router: Router, activatedRoute: ActivatedRoute) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const title = this.getTitle(router.routerState, router.routerState.root).join(' | ');
        titleService.setTitle(title);
      }
    });
  }

  getTitle(state, parent) {
    const data = [];
    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }

    if (state && parent) {
      data.push(... this.getTitle(state, state.firstChild(parent)));
    }
    return data;
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
