import { Component, OnInit } from '@angular/core';
import { ClientsModel } from './model/clients-model';
import { ClientsService } from './service/clients.service';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CountryService } from '../country/service/country.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  clientForm: FormGroup;
  clients: any[]=[];
  pageSize = 10;
  pageNumber = 1;
name:string;
newClient: ClientsModel=new ClientsModel();
country:any[]=[]
city:any[]=[]
  constructor(private Service: ClientsService, private route: ActivatedRoute , private fb: FormBuilder,private countryService: CountryService) { }

  createclientForm() {
    this.clientForm = this.fb.group({
      user_name: '',
      email:'',

phone:'',
password:'',
country_id:'',
city_id:'',
  
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
    this.createclientForm();
    this.Service.getclients().subscribe(
      response=>
      {
        console.log(response)
        this.clients=response["data"]
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

onSelecttype(id:any)
{
  console.log(id)
  this.Service.getcity().subscribe(
    response=>
    {
      console.log(response)
     response["data"].forEach(element => {
       if(element.country_id==id)
       {
         this.city.push(element)
       }
     });
    }
  );

}

addclient()
{
  Object.assign(this.newClient,this.clientForm.value)
 console.log(this.newClient)
  this.Service.postclients(this.newClient).subscribe(
    response=>{
      console.log(response)
     this.onClose();
     location.reload()
    }
  )
}

}
