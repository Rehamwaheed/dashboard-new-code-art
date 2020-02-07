import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CountryComponent } from '../country.component';
import { Routes, RouterModule } from '@angular/router';

const childRoutes: Routes = [
  {
      path: '',
      component:CountryComponent
  }
];

export const routing = RouterModule.forChild(childRoutes);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  routing

],
declarations: [
    CountryComponent
]
})
export class CountryModule { }
