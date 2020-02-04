import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ServiceProviderModel } from './model/service-provider-model';
import { ServiceProviderService } from './service/service-provider.service';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../country/service/country.service';
import { CityService } from '../cities/service/city.service';
import swal from 'sweetalert2';



@Component({
  selector: 'app-service-provider',
  templateUrl: './service-provider.component.html',
  styleUrls: ['./service-provider.component.scss']
})
export class ServiceProviderComponent implements OnInit {


  fileData: File = null;
  previewUrl:any = null;
  uploadedFile: string 
// selectedFile: File = null;
filedata:any;
    

  providerForm: FormGroup;
  providers: any[]=[];
  pageSize = 10;
  pageNumber = 1;
name:string;
newprovider: ServiceProviderModel=new ServiceProviderModel();
country:any[]=[]
city:any[]=[]
  constructor(private Service: ServiceProviderService, private route: ActivatedRoute , private fb: FormBuilder
    ,private countryService: CountryService ,private cityService: CityService ) { }

  createproviderForm() {
    this.providerForm = this.fb.group({
      name: '',
      email:'',
image:[''],
phone:'',
password:'',
country:'',
city:'',
  
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
    this.createproviderForm();
  this.Service.getprovider().subscribe(
    provider=>
    {
      console.log(provider)
      this.providers=provider["data"]
    }
  );
    this.countryService.getcountry().subscribe(
      response=>{
        console.log(response)
        this.country=response["data"]
      }
    )
}
fileEvent(e){
  this.filedata = e.target.files[0];
  var myFormData = new FormData();
  
myFormData.append('image',this.filedata);

  this.Service.onuploadSubmit(myFormData).subscribe(response => {
    this.uploadedFile=response["data"];
   // console.log(this.uploadedFile);
    console.log( "response : " + JSON.stringify( response ) );
}); 
  
}
pageChanged(pN: number): void {
  this.pageNumber = pN;
}

onSelecttype(id:any)
{
  console.log(id)
  this.cityService.getcity().subscribe(
    response=>
    {
      console.log(response)
     response["data"].forEach(element => {
       if(element.country.name==id)
       {
         this.city.push(element)
       }
     });
    }
  );

}

addprovider()
{
  Object.assign(this.newprovider,this.providerForm.value)

 this.newprovider.image=this.uploadedFile;
 console.log(this.newprovider)
  this.Service.postprovider(this.newprovider).subscribe(
    response=>{
      console.log(response)
     this.onClose();
     location.reload()
    }
  )
}

}
