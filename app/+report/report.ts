import { ReportItem } from './report-item';
import { ReportCategory } from './report-category';

export class Report {
  id: number;
  title: string;
  date: Date;
  category: ReportCategory[];
  data: ReportItem[];
}
