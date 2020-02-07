import { Component, OnInit } from '@angular/core';
import { ServicesService } from './service/services.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
result:any[]=[]
  constructor( private Service:ServicesService) { }

  ngOnInit() {
    this.Service.getservice().subscribe(
      response=>
      {
        console.log(response)
        this.result=response["data"]
      }
    )
  }

}
