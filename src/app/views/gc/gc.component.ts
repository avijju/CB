

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


const moment = (_moment as any).default ? (_moment as any).default : _moment;
export const MY_MOMENT_DATE_TIME_FORMATS1: OwlDateTimeFormats = {
  parseInput: 'MMM/YYYY',
  fullPickerInput: 'l LT',
  datePickerInput: 'MMM/YYYY',
  timePickerInput: 'LT',
  monthYearLabel: 'MMM YYYY',
  dateA11yLabel: 'LL',
  monthYearA11yLabel: 'MMMM YYYY',
};
@Component({
  selector: 'app-gc',
  templateUrl: './gc.component.html',
  styleUrls: ['./gc.component.scss'],
  providers: [
    // `MomentDateTimeAdapter` and `OWL_MOMENT_DATE_TIME_FORMATS` can be automatically provided by importing
    // `OwlMomentDateTimeModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    { provide: DateTimeAdapter, useClass: MomentDateTimeAdapter, deps: [OWL_DATE_TIME_LOCALE] },

    { provide: OWL_DATE_TIME_FORMATS, useValue: MY_MOMENT_DATE_TIME_FORMATS1 },
  ],
})
export class GcComponent implements OnInit {
  public dateTime = new FormControl(moment());
  PlanFormGroup: FormGroup;
  CoreValue: any;
  Mindset: any;
  Performance: any;
  printFormat: any;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.PlanFormGroup = this._formBuilder.group({
      market1: ['', Validators.required],
      objective1: ['', Validators.required],
      objective11: ['', Validators.required],
      objective21: ['', Validators.required],
      objective31: ['', Validators.required],
      printFormat1: ['', Validators.required],
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
