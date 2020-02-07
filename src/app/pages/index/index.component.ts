import { Component, OnInit } from '@angular/core';
import { ChartsService } from '../charts/components/echarts/charts.service';
import { ServiceProviderService } from '../service-provider/service/service-provider.service';
import { CategoryService } from '../category/service/category.service';
import { ClientsService } from '../clients/service/clients.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  providers: [ChartsService]
})
export class IndexComponent implements OnInit {
  showloading: boolean = false;
provider:any;
clients:any;
category:any;
services:any;
  public AnimationBarOption;

  constructor(private _chartsService: ChartsService , private providerservice:ServiceProviderService
    ,private categoryservice:CategoryService ,private clientservice:ClientsService) { }

  ngOnInit() {
    this.AnimationBarOption = this._chartsService.getAnimationBarOption();
    this.providerservice.getprovider().subscribe(
      provide=>
      {
        this.provider=provide["data"].length;
      }
    );

    this.categoryservice.getcategory().subscribe(
      response=>
      {
        this.category=response["data"].length
      }
    );

    this.clientservice.getclients().subscribe(
      res=>{
               this.clients=res["data"].length
      }
    )
  }
}
