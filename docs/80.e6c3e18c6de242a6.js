"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[80],{5080:(m,u,c)=>{c.r(u),c.d(u,{WishlistComponent:()=>E});var _=c(6814),h=c(1120),p=c(310),t=c(4769),a=c(9196),g=c(2425),o=c(6286);function l(s,d){if(1&s){const i=t.EpF();t.TgZ(0,"i",19),t.NdJ("click",function(){t.CHM(i);const r=t.oxw().$implicit,n=t.oxw(2);return t.KtG(n.addFav(r._id))}),t.qZA()}}function f(s,d){if(1&s){const i=t.EpF();t.TgZ(0,"i",20),t.NdJ("click",function(){t.CHM(i);const r=t.oxw().$implicit,n=t.oxw(2);return t.KtG(n.removeFav(r._id))}),t.qZA()}}const v=function(s){return["/productdetails",s]};function x(s,d){if(1&s){const i=t.EpF();t.TgZ(0,"div",5)(1,"div",6),t.YNc(2,l,1,0,"i",7),t.YNc(3,f,1,0,"i",8),t.TgZ(4,"header",9),t._UZ(5,"img",10),t.TgZ(6,"h3",11),t._uU(7),t.ALo(8,"cuttext"),t.qZA(),t.TgZ(9,"h4",12),t._uU(10),t.qZA(),t.TgZ(11,"div",13)(12,"span"),t._uU(13),t.ALo(14,"currency"),t.qZA(),t.TgZ(15,"p",14),t._UZ(16,"i",15),t.TgZ(17,"span",16),t._uU(18),t.qZA()()()(),t.TgZ(19,"footer")(20,"button",17,18),t.NdJ("click",function(){const n=t.CHM(i).$implicit,b=t.MAs(21),O=t.oxw(2);return t.KtG(O.addProduct(n._id,b))}),t._uU(22,"+Add To Cart"),t.qZA()()()()}if(2&s){const i=d.$implicit,e=t.oxw(2);t.xp6(2),t.Q6J("ngIf",!e.wishlistData.includes(i._id)),t.xp6(1),t.Q6J("ngIf",e.wishlistData.includes(i._id)),t.xp6(1),t.Q6J("routerLink",t.VKq(16,v,i._id)),t.xp6(1),t.Q6J("src",i.imageCover,t.LSH)("title",i.title)("alt",i.title),t.xp6(2),t.Oqu(t.xi3(8,10,i.title,3)),t.xp6(3),t.Oqu(i.category.name),t.xp6(3),t.Oqu(t.xi3(14,13,i.price,"E\xa3")),t.xp6(5),t.Oqu(i.ratingsAverage)}}function C(s,d){if(1&s&&(t.TgZ(0,"section",2)(1,"div",3),t.YNc(2,x,23,18,"div",4),t.qZA()()),2&s){const i=t.oxw();t.xp6(2),t.Q6J("ngForOf",i.products)}}function T(s,d){1&s&&(t.TgZ(0,"div",21),t._UZ(1,"i",22),t.TgZ(2,"h2",23),t._uU(3," Add this product to your wishlist to make your dreams come true..."),t.qZA(),t._UZ(4,"i",24),t.qZA())}let E=(()=>{class s{constructor(i,e,r,n){this._WishlistService=i,this._ToastrService=e,this._Renderer2=r,this._CartService=n,this.products=[],this.wishlistData=[]}ngOnInit(){this._WishlistService.getWishlist().subscribe({next:i=>{this.products=i.data;const e=i.data.map(r=>r._id);this.wishlistData=e}})}addFav(i){this._WishlistService.addToWishlist(i).subscribe({next:e=>{console.log(e),this._ToastrService.success(e.message),this.wishlistData=e.data}})}removeFav(i){this._WishlistService.removeWishlist(i).subscribe({next:e=>{console.log(e),this._ToastrService.success(e.message),this.wishlistData=e.data,this._WishlistService.wishlistNumber.next(e.data.length);const r=this.products.filter(n=>this.wishlistData.includes(n._id));this.products=r}})}addProduct(i,e){this._Renderer2.setAttribute(e,"disabled","true"),this._CartService.addToCart(i).subscribe({next:r=>{console.log(r),console.log(r.message),this._ToastrService.success(r.message),this._Renderer2.removeAttribute(e,"disabled"),this._CartService.cartNumber.next(r.numOfCartItems)},error:r=>{this._Renderer2.removeAttribute(e,"disabled")}})}static#t=this.\u0275fac=function(e){return new(e||s)(t.Y36(a.M),t.Y36(g._W),t.Y36(t.Qsj),t.Y36(o.N))};static#i=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-wishlist"]],standalone:!0,features:[t.jDz],decls:3,vars:2,consts:[["class","py-4",4,"ngIf","ngIfElse"],["msg",""],[1,"py-4"],[1,"row","g-4"],["class","col-sm-6 col-md-4 col-lg-3 col-xl-2",4,"ngFor","ngForOf"],[1,"col-sm-6","col-md-4","col-lg-3","col-xl-2"],[1,"product","h-100"],["class","fa-regular fa-heart heart",3,"click",4,"ngIf"],["class","fa-solid fa-heart heart",3,"click",4,"ngIf"],["role","button",3,"routerLink"],[1,"w-100",3,"src","title","alt"],[1,"small","pt-1"],[1,"h6","text-main"],[1,"d-flex","align-items-center","justify-content-between","small"],[1,"mb-0"],[1,"fas","fa-star","rating-color"],[1,"text-muted"],[1,"main-btn","w-100","py-2",3,"click"],["btnAdd",""],[1,"fa-regular","fa-heart","heart",3,"click"],[1,"fa-solid","fa-heart","heart",3,"click"],[1,"d-flex","align-items-baseline","justify-content-center","p-0","m-0","vh-100"],[1,"fa-solid","fa-bookmark","fa-xl","Icon1"],[1,"text-center","px-2","mt-5","color-gradient","paragraph"],[1,"fa-solid","fa-bookmark","fa-xl","Icon2"]],template:function(e,r){if(1&e&&(t.YNc(0,C,3,1,"section",0),t.YNc(1,T,5,0,"ng-template",null,1,t.W1O)),2&e){const n=t.MAs(2);t.Q6J("ngIf",r.products.length>0)("ngIfElse",n)}},dependencies:[_.ez,_.sg,_.O5,_.H9,h.rH,p.r],styles:[".paragraph[_ngcontent-%COMP%]{background:linear-gradient(to right,#a53f3f,#ce89bd);-webkit-background-clip:text;background-clip:text;-webkit-background-clip:text!important;-webkit-text-fill-color:transparent!important;font-size:25px;font-family:Righteous,cursive}.Icon1[_ngcontent-%COMP%]{color:#a53f3f;font-size:30px}.Icon2[_ngcontent-%COMP%]{color:#ce89bd;font-size:30px}"]})}return s})()},6286:(m,u,c)=>{c.d(u,{N:()=>t});var _=c(5619),h=c(4769),p=c(9862);let t=(()=>{class a{constructor(o){this._HttpClient=o,this.baseUrl="https://ecommerce.routemisr.com/api/v1/",this.cartNumber=new _.X(0)}addToCart(o){return this._HttpClient.post(this.baseUrl+"cart",{productId:o})}getCartUser(){return this._HttpClient.get(this.baseUrl+"cart")}removeCartItem(o){return this._HttpClient.delete(this.baseUrl+`cart/${o}`)}updateCartCount(o,l){return this._HttpClient.put(this.baseUrl+`cart/${o}`,{count:l})}clearCart(){return this._HttpClient.delete(this.baseUrl+"cart")}checkOut(o,l){return this._HttpClient.post(this.baseUrl+`orders/checkout-session/${o}?url=http://localhost:420`,{shippingAddress:l})}static#t=this.\u0275fac=function(l){return new(l||a)(h.LFG(p.eN))};static#i=this.\u0275prov=h.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})()}}]);