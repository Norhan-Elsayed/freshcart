import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/core/services/product.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [CommonModule , RouterLink],
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {
  constructor(private _ProductsService:ProductsService){}
  brandData:any[] = [];
ngOnInit(): void {
 this._ProductsService.getBrands().subscribe({
  next:(response)=>{
    console.log(response)
   this.brandData = response.data
  }
 })
}
}
