import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { ReportModule } from './+report/report.module';
import { SharedModule } from './shared/shared.module';


@NgModule({

  imports:      [ BrowserModule, SharedModule, ReportModule ],
  declarations: [
    AppComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
