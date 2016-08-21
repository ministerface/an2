import { Component } from '@angular/core';
import { NavbarComponent } from './shared/index';

@Component({
  selector: 'wholesale',
  templateUrl: 'app/app.template.html'
})

export class AppComponent {

  constructor() {

  }



/*
  ngAfterViewInit() {

    if (!window.history.state) {
        window.history.pushState({param: '1'}, '', '');
        window.open("/","_self");
    }
  }
  */

  title = 'Wholesale access interface';
  copyright = 'DonRiver';


}
