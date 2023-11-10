import { CartService } from './../../core/services/cart.service';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CuttextPipe } from './../../core/services/pipe/cuttext.pipe';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule , RouterLink ,  CuttextPipe],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  constructor(private _CartService:CartService , private Renderer2_:Renderer2) {}
  cartDetails:any = null

  ngOnInit(): void {
    this._CartService.getCartUser().subscribe({
      next:(response)=>{
        console.log(response)
        this.cartDetails = response.data;
      },
      });
  }

  removeItem(id:string , element:HTMLButtonElement):void{
  this.Renderer2_.setAttribute(element , 'disabled' , 'true')
  this._CartService.removeCartItem(id).subscribe({
    next:(response)=>{
    console.log(response);
    this.cartDetails = response.data;
    this.Renderer2_.removeAttribute(element , 'disabled');
    this._CartService.cartNumber.next(response.numOfCartItems)
    },
    error:(err)=>{
    this.Renderer2_.removeAttribute(element , 'disabled')
    }
  });
  }

  changeCount(count:number, id:string, el1:HTMLButtonElement, el2:HTMLButtonElement):void{
  //  number of items must not equal zero
    if(count >= 1)
    {
      this.Renderer2_.setAttribute(el1 , 'disabled' , 'true'),
      this.Renderer2_.setAttribute(el2 , 'disabled' , 'true'),
      this._CartService.updateCartCount(id, count).subscribe({
        next: (response) => {
        this.cartDetails = response.data;
        },
      });
    }
    else{
      this._CartService.removeCartItem(id).subscribe({
        next: (response) => {
            this.cartDetails = response.data;
            this.Renderer2_.removeAttribute(el1 , 'disabled');
            this.Renderer2_.removeAttribute(el2 , 'disabled');
            this._CartService.cartNumber.next(response.numOfCartItems)
        },
    });
    }
  }

  clear():void{
    this._CartService.clearCart().subscribe({
      next:(response)=>{
       if(response.message === 'success')
       {
         this.cartDetails = null;
         this._CartService.cartNumber.next(0)
       }
      }
    })
  }
}
