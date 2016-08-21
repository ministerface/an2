import { Component, Input } from '@angular/core';
import { ReportCategory } from '../report-category';
import { ReportItem } from './report-item';

@Component({
  moduleId: module.id,
  selector: 'dr-tab',
  templateUrl: 'tab.component.html'
})
export class TabComponent {
  @Input() category: ReportCategory[];
  @Input() data: ReportItem[];

  setColor(peak): void {
    if(peak > 10) {
      return "red-light";
    } else if (peak >= 8 && peak <= 10) {
      return "green-light";
    }



  }

}
