import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditProjectComponent } from './add-edit-project/add-edit-project.component';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

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
