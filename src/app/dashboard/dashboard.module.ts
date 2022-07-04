import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { PrivilegesComponent } from './privileges/privileges.component';
import { RolesComponent } from './roles/roles.component';
import { AddEditProjectComponent } from './projects/add-edit-project/add-edit-project.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { CommonFeatureModule } from '../common-feature/common-feature.module';


@NgModule({
  declarations: [
    ProjectsComponent,
    ConfigurationComponent,
    PrivilegesComponent,
    RolesComponent,
    AddEditProjectComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class DashboardModule { }
