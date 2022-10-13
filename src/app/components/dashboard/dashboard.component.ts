import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data:any;
  products: Product[]=[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,

    private productService : ProductService
  ) { 

  }

  ngOnInit(){
    this.route.queryParams.subscribe((params)=>{
      console.log(params);
      this.data=JSON.parse(params['data']);

      this.listProducts();
      
    })
  }

  listProducts(){
    this.productService.getProductList().subscribe(
      data => {
        this.products = data;
      }
    )
  }

}
