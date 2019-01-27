import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.scss']
})
export class EmplistComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  createEmp() {
    this.route.navigate(['/REG']);
  }
}
