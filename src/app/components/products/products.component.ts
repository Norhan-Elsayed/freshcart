import { ProductsService } from 'src/app/core/services/product.service';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from 'src/app/core/services/pipe/guard/interfaces/product';
import { RouterLink } from '@angular/router';
import { CuttextPipe } from 'src/app/core/services/pipe/cuttext.pipe';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import {NgxPaginationModule} from 'ngx-pagination';
import { WishlistService } from 'src/app/core/services/wishlist.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule , RouterLink , CuttextPipe , NgxPaginationModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  constructor(private _ProductsService:ProductsService ,
    private _CartService:CartService ,
    private _ToastrService:ToastrService,
    private _Renderer2:Renderer2,
    private _WishlistService:WishlistService
    ){}
  products:Product[] = [];
  pageSize:number = 0; //limit og items
  currentPage:number = 1;
  total:number = 0;
  wishlistData:string[] = [];

  ngOnInit(): void {
  this._ProductsService.getProducts().subscribe({
    next:(response)=>{
  //  console.log( 'products' , response.data);
   console.log(response)
   this.products = response.data;
   this.pageSize = response.metadata.limit;
   this.currentPage = response.metadata.currentPage;
   this.total = response.results;
    },
  });
 }

   //  element => button reference
   addProduct(id:any , element:HTMLButtonElement):void{
    this._Renderer2.setAttribute(element , 'disabled' , 'true')
  this._CartService.addToCart(id).subscribe({
    next:(response)=>{
    console.log(response);
    console.log(response.message);
    this._ToastrService.success(response.message);
    this._Renderer2.removeAttribute(element , 'disabled');
    this._CartService.cartNumber.next(response.numOfCartItems)
    },
    error:(err)=>{
      this._Renderer2.removeAttribute(element , 'disabled');
    },
  });
  }

  // this method to only fix error * but it take info about event *
  pageChanged(event:any):void{
    this._ProductsService.getProducts(event).subscribe({
    next:(response)=>{
  //  console.log( 'products' , response.data);
   console.log(response)
   this.products = response.data;
   this.pageSize = response.metadata.limit;
   this.currentPage = response.metadata.currentPage;
   this.total = response.results;
    },
  });
  }

  // wishlist

  addFav(prodId:string | undefined):void{
    this._WishlistService.addToWishlist(prodId).subscribe({
     next:(response)=>{
     console.log(response)
     this._ToastrService.success(response.message);
     this.wishlistData = response.data;

     this._WishlistService.wishlistNumber.next(response.data.length)
     }
    })
   }

   removeFav(prodId:string|undefined):void{
     this._WishlistService.removeWishlist(prodId).subscribe({
       next:(response)=>{
      console.log(response)
      this._ToastrService.success(response.message);
      this.wishlistData = response.data;
      this._WishlistService.wishlistNumber.next(response.data.length)
       }
     })
   }
}
