import { CartService } from './../../core/services/cart.service';
import { CuttextPipe } from './../../core/services/pipe/cuttext.pipe';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/core/services/product.service';
import { Product } from 'src/app/core/services/pipe/guard/interfaces/product';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Category } from 'src/app/core/services/pipe/guard/interfaces/category';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SearchPipe } from 'src/app/core/services/pipe/search.pipe';
import { FormsModule } from '@angular/forms';
import { WishlistService } from 'src/app/core/services/wishlist.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CuttextPipe, CarouselModule, RouterLink, SearchPipe, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    private _ProductsService:ProductsService,
    private _CartService:CartService ,
    private _ToastrService:ToastrService,
    private _Renderer2:Renderer2,
    private _WishlistService:WishlistService
    ){}

  products:Product[] = [];
  categories:Category[] = [];
  wishlistData:string[] = [];
  term:string = '';
  ngOnInit(): void {
    this._ProductsService.getProducts().subscribe({
      next:(response)=>{
     console.log( 'products' , response.data);
     this.products =response.data;
      }
    });

    this._ProductsService.getCategories().subscribe({
      next:(response)=>{
        console.log('categories' , response);
        this.categories = response.data;
      }
    })

    this._WishlistService.getWishlist().subscribe({
      next:(response)=>{
      console.log(response);

      const newData = response.data.map( (item:any)=>item._id)
      this.wishlistData = newData;
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
    }
  })
  }

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

  categoryOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 1000,
    navSpeed: 700,
    navText: ['Next', 'Prev'],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 6
      }
    },
    nav: false
  };



mainSlideOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: true,
  navSpeed: 700,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplaySpeed: 1000,
  navText: ['Next', 'Prev'],
  items:1,
  nav: false
}
}
