import { Component } from '@angular/core';
import { NavbarComponent } from './shared/index';

@Component({
    selector: 'app',
    templateUrl: 'app/app.template.html'
})

export class AppComponent {
    title = 'Wholesale access interface';
    copyright = 'DonRiver';
}
