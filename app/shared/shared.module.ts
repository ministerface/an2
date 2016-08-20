import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NavbarComponent } from './navbar/index';
import { UserbarComponent } from './userbar/index';
import { Dialog } from 'primeng/primeng';


@NgModule({
  providers: [
    { provide: 'Window',  useValue: window }
  ],
  imports: [CommonModule],
  declarations: [NavbarComponent, UserbarComponent, Dialog],
  exports: [NavbarComponent, UserbarComponent, Dialog]
})
export class SharedModule {

}
