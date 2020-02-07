import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-modal';
import { CountryComponent } from '../country.component';
import { Routes, RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
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
    NgxPaginationModule,
  routing,
  ModalModule

],
declarations: [
    CountryComponent
]
})
export class CountryModule { }
