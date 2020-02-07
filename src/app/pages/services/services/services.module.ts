import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-modal';

import { Routes, RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { ServicesComponent } from '../services.component';




const childRoutes: Routes = [
  {
      path: '',
      component:ServicesComponent
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
  ServicesComponent
]
})
export class ServicesModule { }
