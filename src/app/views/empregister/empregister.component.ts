import { Component, OnInit, ViewContainerRef } from '@angular/core';

import { Router } from '@angular/router';
@Component({
  selector: 'app-empregister',
  templateUrl: './empregister.component.html',
  styleUrls: ['./empregister.component.scss']
})
export class EmpregisterComponent implements OnInit {

  constructor( private route: Router) { 
  
  }

  ngOnInit() {
  }
  save() {
    alert("Employee Saved");
    this.route.navigate(['/lst']);
  }
}
