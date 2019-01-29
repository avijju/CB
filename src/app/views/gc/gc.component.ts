

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog, MatButtonToggleGroup } from '@angular/material';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  DateTimeAdapter,
  OWL_DATE_TIME_FORMATS,
  OWL_DATE_TIME_LOCALE,
  OwlDateTimeComponent,
  OwlDateTimeFormats
} from 'ng-pick-datetime';
import { MomentDateTimeAdapter } from 'ng-pick-datetime-moment';
import * as _moment from 'moment';
import { Moment } from 'moment';
import * as $ from 'jquery';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
@Component({
  selector: 'app-gc',
  templateUrl: './gc.component.html',
  styleUrls: ['./gc.component.scss']
})
export class GcComponent implements OnInit {
  PlanFormGroup: FormGroup;
  CoreValue: any;
  Mindset: any;
  Performance: any;
  printFormat: any;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.PlanFormGroup = this._formBuilder.group({
      market: ['', Validators.required],
      objective: ['', Validators.required],
      objective1: ['', Validators.required],
      objective2: ['', Validators.required],
      objective3: ['', Validators.required],
      printFormat: ['', Validators.required],
    });
    $(".tableCustom").find("tr").find("td.cardHover").click(function () {
      $(".cardSelected").removeClass("cardSelected");
      $(this).addClass("cardSelected");

      //close_modal


    });

  }
  anotherfunction() {
    this.Performance = $(".tableCustom").find("td.cardSelected").text();
    this.Mindset = $(".tableCustom").find("td.cardSelected").closest("tr").find("td.cardMindset").text();
    this.CoreValue = $(".tableCustom").find("td.cardSelected").closest("tr").find("td.cardCoreValue").text();

    if (this.CoreValue == "") {
      this.CoreValue = $(".tableCustom").find("td.cardSelected").closest("tr").prev("tr").find("td.cardCoreValue").text();
    }

    this.printFormat = 1;
    var link = document.getElementById('close_modal');
    link.click();
  }
  yourFn($event) {
    debugger
    console.log($event);

    if ($event.index == 2) {
      var link = document.getElementById('modal_show');
      link.click();

    }
  }
}
