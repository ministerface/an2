import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportComponent } from './report.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tabs/tab/tab.component';


@NgModule({
    imports: [CommonModule],
    declarations: [ReportComponent, TabsComponent, TabComponent],
    exports: [ReportComponent, TabsComponent,TabComponent]
})

export class ReportModule { }
