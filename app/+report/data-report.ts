import { Report } from './report';
import { ReportItem } from './report-item';
export const REPORT: Report =
  {
    id: 1,
    title: 'ISP National APHT Report',
    date: new Date(),
    category: [
      {id:1, title: 'NBN National APHT (SIO)'},
      {id:2, title: 'DSL National APHT (SIO)'}
    ],
    data: [
      {id: 11, isp: 'AAP', undefined_title: '1231', peak: 5, network: 123232, kbps: 3132, current_time: 1233, last_month: 123, category_id: 1 },
      {id: 12, isp: 'AAP', undefined_title: '1231', peak: 6, network: 123232, kbps: 3132, current_time: 1233, last_month: 123, category_id: 1 },
      {id: 13, isp: 'AAP', undefined_title: '1231', peak: 7, network: 123232, kbps: 3132, current_time: 1233, last_month: 123, category_id: 1 },
      {id: 14, isp: 'AAP', undefined_title: '1231', peak: 8, network: 123232, kbps: 3132, current_time: 1233, last_month: 123, category_id: 1 },
      {id: 15, isp: 'AAP', undefined_title: '1231', peak: 9, network: 123232, kbps: 3132, current_time: 1233, last_month: 123, category_id: 1 },
      {id: 16, isp: 'AAP', undefined_title: '1231', peak: 10, network: 123232, kbps: 3132, current_time: 1233, last_month: 123, category_id: 2 },
      {id: 17, isp: 'AAP', undefined_title: '1231', peak: 11, network: 123232, kbps: 3132, current_time: 1233, last_month: 123, category_id: 2 },
      {id: 18, isp: 'AAP', undefined_title: '1231', peak: 3, network: 123232, kbps: 3132, current_time: 1233, last_month: 123, category_id: 2 },
      {id: 19, isp: 'AAP', undefined_title: '1231', peak: 5, network: 123232, kbps: 3132, current_time: 1233, last_month: 123, category_id: 2 },
      {id: 20, isp: 'AAP', undefined_title: '1231', peak: 5, network: 123232, kbps: 3132, current_time: 1233, last_month: 123, category_id: 1 },
      {id: 22, isp: 'AAP', undefined_title: '1231', peak: 6, network: 123232, kbps: 3132, current_time: 1233, last_month: 123, category_id: 1 },
      {id: 23, isp: 'AAP', undefined_title: '1231', peak: 7, network: 123232, kbps: 3132, current_time: 1233, last_month: 123, category_id: 1 },
      {id: 24, isp: 'AAP', undefined_title: '1231', peak: 8, network: 123232, kbps: 3132, current_time: 1233, last_month: 123, category_id: 1 },
      {id: 25, isp: 'AAP', undefined_title: '1231', peak: 9, network: 123232, kbps: 3132, current_time: 1233, last_month: 123, category_id: 1 },
      {id: 26, isp: 'AAP', undefined_title: '1231', peak: 10, network: 123232, kbps: 3132, current_time: 1233, last_month: 123, category_id: 2 },
      {id: 27, isp: 'AAP', undefined_title: '1231', peak: 11, network: 123232, kbps: 3132, current_time: 1233, last_month: 123, category_id: 2 },
      {id: 28, isp: 'AAP', undefined_title: '1231', peak: 3, network: 123232, kbps: 3132, current_time: 1233, last_month: 123, category_id: 2 },
      {id: 29, isp: 'AAP', undefined_title: '1231', peak: 5, network: 123232, kbps: 3132, current_time: 1233, last_month: 123, category_id: 2 }
    ]
  };
