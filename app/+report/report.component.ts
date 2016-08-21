import { Component, Input } from '@angular/core';
import { Report } from './report';
import { ReportItem } from './report-item';
import { ReportCategory } from './report-category';
import { ReportService } from './report.service';
import { TabsComponent } from './tabs/tabs.component';



@Component({
  moduleId: module.id,
  selector: 'dr-report',
  templateUrl: 'report.component.html',
  providers: [ReportService]
})
export class ReportComponent {
  title:string;
  currentDate:Date;
  reportData: ReportItem[];
  reportCategory: ReportCategory[];

  constructor(private reportService: ReportService) { }

  getReport(): void {
    this.reportService.getReport()
      .then(
        report => {
          this.title = report.title;
          this.reportData = report.data;
          this.currentDate = report.date;
          this.reportCategory = report.category;
        }
      );
  }

  testName = {
      "id": "Number",
      "ISP": "String",
      "Undefined Title": "String",
      "Peak": "Number",
      "Network": "Number",
      "Kbps/SIO": "Number",
      "Current Time": "Number",
      "Last Month": "Number",
      "Category ID": "Number"
  }

testTypes = {
    "id": "Number",
    "isp": "String",
    "undefined_title": "String",
    "peak": "Number",
    "network": "Number",
    "kbps": "Number",
    "current_time": "Number",
    "last_month": "Number",
    "category_id": "Number"
}

emitXmlHeader() {
    var headerRow =  '<ss:Row>\n';
    for (var colName in this.testName) {
      if (colName != 'id' && colName != 'Category ID') {
        headerRow += '  <ss:Cell>\n';
        headerRow += '    <ss:Data ss:Type="String">';
        headerRow += colName + '</ss:Data>\n';
        headerRow += '  </ss:Cell>\n';
      }
    }
    headerRow += '</ss:Row>\n';
    return '<?xml version="1.0"?>\n' +
           '<ss:Workbook xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">\n' +
           '<ss:Worksheet ss:Name="Sheet1">\n' +
           '<ss:Table>\n\n' + headerRow;
}

emitXmlFooter() {
    return '\n</ss:Table>\n' +
           '</ss:Worksheet>\n' +
           '</ss:Workbook>\n';
};

jsonToSsXml(jsonObject) {
    var row;
    var col;
    var xml;
    var data = typeof jsonObject != "object"
             ? JSON.parse(jsonObject)
             : jsonObject;

    xml = this.emitXmlHeader();

    for (row = 0; row < data.length; row++) {
        xml += '<ss:Row>\n';

        for (col in data[row]) {
          if (col != 'id' && col != 'category_id') {
            xml += '  <ss:Cell>\n';
            xml += '    <ss:Data ss:Type="' + this.testTypes[col]  + '">';
            xml += data[row][col] + '</ss:Data>\n';
            xml += '  </ss:Cell>\n';
          }

        }

        xml += '</ss:Row>\n';
    }

    xml += this.emitXmlFooter();
    console.log(xml);
    return xml;
}

download () {

  var options = {
year: 'numeric',
month: 'long',
day: 'numeric',
weekday: 'long',
timezone: 'UTC',
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
};

    var content = this.jsonToSsXml(this.reportData);
    var filename = this.title+' '+this.currentDate.toLocaleString("en-US", options);
    var contentType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
    if (!contentType) contentType = 'application/octet-stream';
    /*
    var a  = document.getElementById('test');

    var blob  = new Blob([content], {
        'type': contentType
    });
    a.href = window.URL.createObjectURL(blob);
    a.download  = filename;
    */
};


  ngOnInit(): void {
    this.getReport();
  }





}
