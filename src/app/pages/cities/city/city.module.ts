import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-modal';

import { Routes, RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { CitiesComponent } from '../cities.component';


const childRoutes: Routes = [
  {
      path: '',
      component:CitiesComponent
  } 
];

export const routing = RouterModule.forChild(childRoutes);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  routing,
  ModalModule

],
declarations: [
  CitiesComponent
]
})
export class CityModule { }
