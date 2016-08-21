import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NavbarComponent } from './navbar/index';
import { UserbarComponent } from './userbar/index';
import { Dialog, Growl} from 'primeng/primeng';


@NgModule({
  providers: [
    { provide: 'Window',  useValue: window }
  ],
  imports: [CommonModule],
  declarations: [NavbarComponent, UserbarComponent, Dialog, Growl],
  exports: [NavbarComponent, UserbarComponent, Dialog]
})
export class SharedModule {

}
