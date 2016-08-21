import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { NavbarComponent } from './navbar/index';
import { UserbarComponent } from './userbar/index';
import { Dialog, Growl} from 'primeng/primeng';


@NgModule({
  providers: [
    { provide: 'Window',  useValue: window }
  ],
  imports: [CommonModule],
  declarations: [NavbarComponent, UserbarComponent, Dialog, Growl],
  exports: [CommonModule, FormsModule, NavbarComponent, UserbarComponent, Dialog]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }
}
