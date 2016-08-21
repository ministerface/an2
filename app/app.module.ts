import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReportModule } from './+report/report.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent }  from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        SharedModule.forRoot(),
        ReportModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
