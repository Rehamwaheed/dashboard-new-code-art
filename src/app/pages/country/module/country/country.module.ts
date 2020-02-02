import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryComponent } from '../../country.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes } from '@angular/router';

export const routing: Routes = [

  {path:'',component:CountryComponent},

 ];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    routing
],
declarations: [
  CountryComponent
]
})
export class CountryModule { }
