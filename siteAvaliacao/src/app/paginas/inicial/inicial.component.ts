import { SlicePipe } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { OrderSiteService } from 'src/app/serviço/order-site.service';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.css']
})
export class InicialComponent implements OnInit {

  constructor(private service: OrderSiteService){};
  valores: any;

  ngOnInit(): void {
    this.valores = this.service.varDetails;
    
  };

};
