import { Injectable } from '@angular/core';

import { Report } from './report';
import { REPORT } from './data-report';

@Injectable()
export class ReportService {
  getReport(): Promise<Report[]> {
    return Promise.resolve(REPORT);
  }
}
