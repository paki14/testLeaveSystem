import { NgModule } from '@angular/core';

import {
  MatTableModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatPaginatorModule,
  MatCheckboxModule,
  MatRadioModule,
  MatCardModule,
  MatIconModule,
  MatDatepickerModule
} from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';

import { FlatpickrModule } from 'angularx-flatpickr';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatRadioModule,
    MatIconModule,
    MatTabsModule,
    MatStepperModule,
    MatCardModule,
    FlatpickrModule.forRoot(),
    MatDatepickerModule
  ],
  exports: [
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTabsModule,
    MatStepperModule,
    MatCardModule,
    MatIconModule,
    FlatpickrModule,
    MatDatepickerModule
  ],
  declarations: []
})
export class MaterialModuleModule { }
