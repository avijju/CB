import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog, MatButtonToggleGroup } from '@angular/material';
@Component({
  selector: 'app-pep',
  templateUrl: './pep.component.html',
  styleUrls: ['./pep.component.scss']
})
export class PepComponent implements OnInit {
  displayedColumns = ['#', 'PEPArea', 'EmployeeComments', 'ManagerComments'];
  dataSource: MatTableDataSource<any>;
  showPlanResultsPanel: boolean = true;
  showEntryPane: boolean = false;
  startDatess: Date;
  constructor() { }

  ngOnInit() {
    this.startDatess = new Date('1/1/2019');
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
  createPlan() {
    this.showPlanResultsPanel = false;
    this.showEntryPane = true;
  }
  back() {
    this.showPlanResultsPanel = true;
    this.showEntryPane = false;
  }

}
