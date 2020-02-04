import { Component, OnInit } from '@angular/core';
import { CityModel } from './model/city-model';
import { CityService } from './service/city.service';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CountryService } from '../country/service/country.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {
  cityForm: FormGroup;
  cities: any[]=[];
  pageSize = 10;
  pageNumber = 1;
name:string;
newCity:CityModel=new CityModel();
country:any[]=[]
  constructor(private Service: CityService, private route: ActivatedRoute,private fb: FormBuilder,private countryService: CountryService) { }
  createcityForm() {
    this.cityForm = this.fb.group({
      name: '',
   
     country_id:'',

  
    });
  }
  
  openModal(modal) {
    modal.open();
  }

  closeModal(modal) {
    modal.close();
  }

  onClose() {
    swal({
      type: 'success',
      title: 'Success!',
      text: 'Done!',
    });
  }
  ngOnInit() {
    this.createcityForm();
    this.Service.getcity().subscribe(
      response=>
      {
        console.log(response)
        this.cities=response["data"]
      }
    );
    this.countryService.getcountry().subscribe(
      response=>{
        console.log(response)
        this.country=response["data"]
      }
    )
}

pageChanged(pN: number): void {
  this.pageNumber = pN;
}

addcity()
{
  Object.assign(this.newCity,this.cityForm.value)
  this.Service.postcity(this.newCity).subscribe(
    response=>{
      console.log(response)
     this.onClose();
     location.reload()
    }
  )
}

}
