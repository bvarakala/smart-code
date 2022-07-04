import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditProjectComponent } from './add-edit-project/add-edit-project.component';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openAddProject() {
    let dialogRef = this.dialog.open(AddEditProjectComponent, {
      height: '400px',
      width: '600px',
    });
  }
}
