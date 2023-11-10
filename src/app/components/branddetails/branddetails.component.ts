import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-branddetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './branddetails.component.html',
  styleUrls: ['./branddetails.component.scss']
})
export class BranddetailsComponent implements OnInit {
  constructor(private _ActivatedRoute:ActivatedRoute , private _ProductsService:ProductsService){}
  brandId:string|null = ''
  brandDetails:any = {
    name: '',
    image: ''
  }
  ngOnInit(): void {
   this._ActivatedRoute.paramMap.subscribe({
    next:(params)=>{
   this.brandId = params.get('id')
    }
   })
    this._ProductsService.getBrandsDetails(this.brandId).subscribe({
      next:(response)=>{
      this.brandDetails = response.data
      }
    })

  }
}
