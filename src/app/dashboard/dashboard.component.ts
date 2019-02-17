import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {
 items:any;
  constructor() {
this.items =[
  {"title" : "Application Details",
   "columnValues": ["Application Name", "Last Release Date", "SME", "Module Lead",
      "Team Lead", "Resource Capacity"],
    "rowValues": [
      ["FX", "02/18/2019", "XXXX", "YYYYY", "ZZZZZ", "4"],
      ["GBER", "02/12/2019", "XXXX", "YYYYY", "ZZZZZ", "5"],
      ["MRDB", "01/18/2019", "XXXX", "YYYYY", "ZZZZZ", "4"],
      ["GAL", "12/22/2018", "XXXX", "YYYYY", "ZZZZZ", "7"],
      ["AEC", "02/16/2019", "XXXX", "YYYYY", "ZZZZZ", "8"],
      ["REC", "01/19/2019", "XXXX", "YYYYY", "ZZZZZ", "2"]
    ]},
    {"title" : "Sharepath Details",
   "columnValues": ["Path For", "Path"],
    "rowValues": [
      ["DEV", "\\xxxx\ccccc\pathName"],
      ["INT", "\\xxxx\ccccc\pathName"],
      ["QA", "\\xxxx\ccccc\pathName"],
      ["PROD", "\\xxxx\ccccc\pathName"],
    ]}
  ];

   }

  ngOnInit() {
  }

}
