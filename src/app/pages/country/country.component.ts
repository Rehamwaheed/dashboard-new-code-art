import { Component, OnInit } from '@angular/core';
import { CountryService } from './service/country.service';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { CountryModel } from './model/country-model';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  country: any[]=[];
  pageSize = 10;
  pageNumber = 1;
name:string;
newCountry:CountryModel=new CountryModel();
  constructor(private Service: CountryService, private route: ActivatedRoute) { }

  
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
     this.Service.getcountry().subscribe(
       response=>{
         console.log(response)
         this.country=response["data"]
       }
     )
}

pageChanged(pN: number): void {
  this.pageNumber = pN;
}

addcountry()
{
  console.log(this.name)
  this.newCountry.name=this.name
  this.Service.postcountry(this.newCountry).subscribe(
    response=>{
      console.log(response)
     this.onClose();
     location.reload()
    }
  )
}

}
