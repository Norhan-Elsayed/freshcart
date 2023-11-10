import { CartService } from './../../core/services/cart.service';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistService } from 'src/app/core/services/wishlist.service';
import { Product } from 'src/app/core/services/pipe/guard/interfaces/product';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';
import { CuttextPipe } from 'src/app/core/services/pipe/cuttext.pipe';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule , RouterLink , CuttextPipe],
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  constructor(private _WishlistService:WishlistService ,
     private _ToastrService:ToastrService ,
     private _Renderer2:Renderer2 ,
     private _CartService:CartService ,
     ){}
  products:Product[] = [];
  wishlistData:string[] = [];


ngOnInit(): void {
this._WishlistService.getWishlist().subscribe({
  next:(response)=>{
   this.products = response.data;
   const newData = response.data.map( (item:any)=>item._id)
   this.wishlistData = newData;
  }
})
}

addFav(prodId:string | undefined):void{
  this._WishlistService.addToWishlist(prodId).subscribe({
   next:(response)=>{
   console.log(response)
   this._ToastrService.success(response.message);
   this.wishlistData = response.data;
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
   const newProductsData = this.products.filter((item:any)=> this.wishlistData.includes(item._id) )
   this.products = newProductsData;
     }
   })
 }


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
  }
})
}
}
