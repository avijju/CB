
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
export const MY_MOMENT_DATE_TIME_FORMATS2: OwlDateTimeFormats = {
  parseInput: 'MMM/YYYY',
  fullPickerInput: 'l LT',
  datePickerInput: 'MMM/YYYY',
  timePickerInput: 'LT',
  monthYearLabel: 'MMM YYYY',
  dateA11yLabel: 'LL',
  monthYearA11yLabel: 'MMMM YYYY',
};
@Component({
  selector: 'app-feedfor',
  templateUrl: './feedfor.component.html',
  styleUrls: ['./feedfor.component.scss'],
  providers: [
    // `MomentDateTimeAdapter` and `OWL_MOMENT_DATE_TIME_FORMATS` can be automatically provided by importing
    // `OwlMomentDateTimeModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    { provide: DateTimeAdapter, useClass: MomentDateTimeAdapter, deps: [OWL_DATE_TIME_LOCALE] },

    { provide: OWL_DATE_TIME_FORMATS, useValue: MY_MOMENT_DATE_TIME_FORMATS2 },
  ],
})
export class FeedforComponent implements OnInit {
  public dateTime = new FormControl(moment());
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
      objective4: ['', Validators.required],
      printFormat: ['', Validators.required],
    });
  }

}
