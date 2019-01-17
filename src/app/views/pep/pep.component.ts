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

const moment = (_moment as any).default ? (_moment as any).default : _moment;

export const MY_MOMENT_DATE_TIME_FORMATS: OwlDateTimeFormats = {
  parseInput: 'MMM/YYYY',
  fullPickerInput: 'l LT',
  datePickerInput: 'MMM/YYYY',
  timePickerInput: 'LT',
  monthYearLabel: 'MMM YYYY',
  dateA11yLabel: 'LL',
  monthYearA11yLabel: 'MMMM YYYY',
};
@Component({
  selector: 'app-pep',
  templateUrl: './pep.component.html',
  styleUrls: ['./pep.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    // `MomentDateTimeAdapter` and `OWL_MOMENT_DATE_TIME_FORMATS` can be automatically provided by importing
    // `OwlMomentDateTimeModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    { provide: DateTimeAdapter, useClass: MomentDateTimeAdapter, deps: [OWL_DATE_TIME_LOCALE] },

    { provide: OWL_DATE_TIME_FORMATS, useValue: MY_MOMENT_DATE_TIME_FORMATS },
  ],
})
export class PepComponent implements OnInit {
  public min = new Date(2018, 1, 12, 10, 30);

  // Max moment: April 25 2018, 20:30
  public max = new Date(2019, 0, 25, 20, 30);
  public dateTime = new FormControl(moment());
  displayedColumns = ['#', 'PEPArea', 'EmployeeComments', 'ManagerComments'];
  dataSource: MatTableDataSource<any>;
  showPlanResultsPanel: boolean = true;
  showEntryPane: boolean = false;
  startDatess: Date;
  PlanFormGroup: FormGroup;
  isDisabled: boolean = true;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.startDatess = new Date('1/1/2019');
    this.PlanFormGroup = this._formBuilder.group({
      market: ['', Validators.required],
      objective: ['', Validators.required],
      objective1: ['', Validators.required],
      printFormat: ['', Validators.required],
    });
    let row = [{
      id: 1,
      PEPArea: "KPO Achievements",
      EmployeeComments: "Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum (11/02/2018 10:10:10)",
      ManagerComments: "Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum (11/02/2018 10:10:10)"
    },
    {
      id: 2,
      PEPArea: "Behaviours",
      EmployeeComments: "Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum (11/02/2018 10:10:10)",
      ManagerComments: "Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum (11/02/2018 10:10:10)"
    },
    {
      id: 3,
      PEPArea: "KPO Achievements",
      EmployeeComments: "Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum (11/02/2018 10:10:10)",
      ManagerComments: "Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum (11/02/2018 10:10:10)"
    },
    {
      id: 4,
      PEPArea: "Behaviours",
      EmployeeComments: "Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum (11/02/2018 10:10:10)",
      ManagerComments: "Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum (11/02/2018 10:10:10)"
    }
    ]

    this.dataSource = new MatTableDataSource(row);




  }
  getDisabledValue() {
    //your condition, in this case textarea will be disbaled.
    return true;
  }
  chosenYearHandler(normalizedYear: Moment) {
    const ctrlValue = this.dateTime.value;
    ctrlValue.year(normalizedYear.year());
    this.dateTime.setValue(ctrlValue);
  }

  chosenMonthHandler(normalizedMonth: Moment, datepicker: OwlDateTimeComponent<Moment>) {
    debugger
    const ctrlValue = this.dateTime.value;
    ctrlValue.month(normalizedMonth.month());
    this.dateTime.setValue(ctrlValue);
    datepicker.close();
  }
  createPlan() {
    this.showPlanResultsPanel = false;
    this.showEntryPane = true;
  }
  back() {
    this.showPlanResultsPanel = true;
    this.showEntryPane = false;
  }

}
