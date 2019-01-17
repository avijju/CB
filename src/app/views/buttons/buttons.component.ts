import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog, MatButtonToggleGroup } from '@angular/material';
@Component({
  templateUrl: 'buttons.component.html'
})
export class ButtonsComponent implements OnInit{
  displayedColumns = ['#', 'PEPArea', 'EmployeeComments', 'ManagerComments'];
  dataSource: MatTableDataSource<any>;
  showPlanResultsPanel: boolean = true;
  showEntryPane: boolean = false;
  constructor() { }
  ngOnInit() {
    let row = [{
      id: 1,
      PEPArea: "KPO Achievements",
      EmployeeComments: "Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum (11/02/2018 10:10:10)",
      ManagerComments: "Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum (11/02/2018 10:10:10)"
    },
    {
      id: 1,
      PEPArea: "Behaviours",
      EmployeeComments: "Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum (11/02/2018 10:10:10)",
      ManagerComments: "Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum (11/02/2018 10:10:10)"
    },
    {
      id: 1,
      PEPArea: "KPO Achievements",
      EmployeeComments: "Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum (11/02/2018 10:10:10)",
      ManagerComments: "Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum (11/02/2018 10:10:10)"
    },
    {
      id: 1,
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
