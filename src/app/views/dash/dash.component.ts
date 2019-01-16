import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit {
  public barChart1Data: Array<any> = [
    {
      data: [29, 24, 78, 22],
      label: 'Requested'
    },
    {
      label: 'Recived',
      data: [24]
    },
    {
      label: 'Given',
      data: [50]
    },
    {
      label: 'Pending',
      data: [22]
    }
  ];
  public barChart1Labels: Array<any> = [];
  public barChart1Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: true,
        barPercentage: 0.6,
      }],
      yAxes: [{
        display: true
      }]
    },
    legend: {
      display: true
    }
  };
  public barChart1Colours: Array<any> = [
    {
      backgroundColor: '#D3D3D3',
      borderWidth: 0
    },
    { // 1st Year.
      backgroundColor: '#BEBEBE',
      borderWidth: 0
    },
    { // 2nd Year.
      backgroundColor: '#808080',
      borderWidth: 0
    },
    { // 2nd Year.
      backgroundColor: '#202020',
      borderWidth: 0
    }
  ];
  public barChart1Legend = true;
  public barChart1Type = 'bar';
  constructor() { }

  ngOnInit() {
  }

}
