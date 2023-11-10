"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[45],{6286:(h,d,a)=>{a.d(d,{N:()=>v});var p=a(5619),o=a(4769),t=a(9862);let v=(()=>{class l{constructor(i){this._HttpClient=i,this.baseUrl="https://ecommerce.routemisr.com/api/v1/",this.cartNumber=new p.X(0)}addToCart(i){return this._HttpClient.post(this.baseUrl+"cart",{productId:i})}getCartUser(){return this._HttpClient.get(this.baseUrl+"cart")}removeCartItem(i){return this._HttpClient.delete(this.baseUrl+`cart/${i}`)}updateCartCount(i,c){return this._HttpClient.put(this.baseUrl+`cart/${i}`,{count:c})}clearCart(){return this._HttpClient.delete(this.baseUrl+"cart")}checkOut(i,c){return this._HttpClient.post(this.baseUrl+`orders/checkout-session/${i}?url=http://localhost:420`,{shippingAddress:c})}static#t=this.\u0275fac=function(c){return new(c||l)(o.LFG(t.eN))};static#e=this.\u0275prov=o.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"})}return l})()},4045:(h,d,a)=>{a.r(d),a.d(d,{BlankLayoutComponent:()=>g});var p=a(6814),o=a(1120),t=a(4769),v=a(6286),l=a(9196);const m=["navBar"];let i=(()=>{class s{constructor(e,n,r,u){this._Router=e,this._CartService=n,this._Renderer2=r,this._WishlistService=u,this.cartNum=0,this.wishNum=0}onScroll(){scrollY>400?(this._Renderer2.addClass(this.navElement.nativeElement,"px-5"),this._Renderer2.addClass(this.navElement.nativeElement,"shadow")):(this._Renderer2.removeClass(this.navElement.nativeElement,"px-5"),this._Renderer2.addClass(this.navElement.nativeElement,"shadow"))}ngOnInit(){this._CartService.cartNumber.subscribe({next:e=>{console.log(e),this.cartNum=e}}),this._CartService.getCartUser().subscribe({next:e=>{this.cartNum=e.numOfCartItems}}),this._WishlistService.wishlistNumber.subscribe({next:e=>{console.log("list",e),this.wishNum=e}}),this._WishlistService.getWishlist().subscribe({next:e=>{this.wishNum=e.data.length,console.log(e)}})}SignOut(){localStorage.removeItem("etoken"),this._Router.navigate(["/login"])}static#t=this.\u0275fac=function(n){return new(n||s)(t.Y36(o.F0),t.Y36(v.N),t.Y36(t.Qsj),t.Y36(l.M))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-nav-blank"]],viewQuery:function(n,r){if(1&n&&t.Gf(m,5),2&n){let u;t.iGM(u=t.CRH())&&(r.navElement=u.first)}},hostBindings:function(n,r){1&n&&t.NdJ("scroll",function(){return r.onScroll()},!1,t.Jf7)},standalone:!0,features:[t.jDz],decls:49,vars:2,consts:[[1,"navbar","navbar-expand-md","navbar-light","bg-light","fixed-top"],["navBar",""],[1,"container-fluid"],["routerLink","",1,"navbar-brand"],["src","./assets/images/freshcart-logo.svg","alt","fresh cart logo"],["type","button","data-bs-toggle","collapse","data-bs-target","#collapsibleNavId","aria-controls","collapsibleNavId","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler","d-lg-none"],[1,"navbar-toggler-icon"],["id","collapsibleNavId",1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto","mt-2","mt-lg-0"],[1,"nav-item"],["routerLinkActive","active-link","routerLink","/home",1,"nav-link"],["routerLinkActive","active-link","routerLink","/products",1,"nav-link"],["routerLinkActive","active-link","routerLink","/brands",1,"nav-link"],["routerLinkActive","active-link","routerLink","/categories",1,"nav-link"],[1,"navbar-nav","ms-auto","mt-2","mt-lg-0","align-items-center"],[1,"nav-item","dropdown"],["role","button","data-bs-toggle","dropdown","aria-expanded","false",1,"nav-link","dropdown-toggle"],[1,"fas","fa-user","fa-xl","text-main"],[1,"dropdown-menu"],["role","button","routerLink","/forgetpassword","routerLinkActive","active-link"],[1,"dropdown-item"],["routerLink","/wishlist",1,"nav-link","position-relative"],[1,"fa-solid","fa-heart","me-2","fa-2x","text-danger"],[1,"badge","bg-info","me-2","position-absolute","top-0","end-0"],["routerLink","/cart",1,"nav-link","position-relative"],[1,"fas","fa-cart-shopping","me-2","fa-2x","text-main"],[1,"nav-item","gap-3","d-flex","me-3"],[1,"fa-brands","fa-instagram"],[1,"fa-brands","fa-facebook"],[1,"fa-brands","fa-tiktok"],[1,"fa-brands","fa-twitter"],[1,"fa-brands","fa-linkedin"],[1,"fa-brands","fa-youtube"],["role","button",3,"click"]],template:function(n,r){1&n&&(t.TgZ(0,"nav",0,1)(2,"div",2)(3,"a",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"button",5),t._UZ(6,"span",6),t.qZA(),t.TgZ(7,"div",7)(8,"ul",8)(9,"li",9)(10,"a",10),t._uU(11,"home"),t.qZA()(),t.TgZ(12,"li",9)(13,"a",11),t._uU(14,"products"),t.qZA()(),t.TgZ(15,"li",9)(16,"a",12),t._uU(17,"brands"),t.qZA()(),t.TgZ(18,"li",9)(19,"a",13),t._uU(20,"categories"),t.qZA()()(),t.TgZ(21,"ul",14)(22,"li",15)(23,"a",16),t._UZ(24,"i",17),t.qZA(),t.TgZ(25,"ul",18)(26,"li",19)(27,"a",20),t._uU(28,"Forget Password"),t.qZA()()()(),t.TgZ(29,"li",9)(30,"a",21),t._UZ(31,"i",22),t.TgZ(32,"span",23),t._uU(33),t.qZA()()(),t.TgZ(34,"li",9)(35,"a",24),t._UZ(36,"i",25),t.TgZ(37,"span",23),t._uU(38),t.qZA()()(),t.TgZ(39,"li",26),t._UZ(40,"i",27)(41,"i",28)(42,"i",29)(43,"i",30)(44,"i",31)(45,"i",32),t.qZA(),t.TgZ(46,"li",9)(47,"span",33),t.NdJ("click",function(){return r.SignOut()}),t._uU(48," SignOut "),t.qZA()()()()()()),2&n&&(t.xp6(33),t.Oqu(r.wishNum),t.xp6(5),t.hij(" ",r.cartNum," "))},dependencies:[p.ez,o.rH,o.Od],styles:["nav[_ngcontent-%COMP%]{transition:padding 1s}"]})}return s})();var c=a(7913);let g=(()=>{class s{goToUp(){scrollTo(0,0)}static#t=this.\u0275fac=function(n){return new(n||s)};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-blank-layout"]],standalone:!0,features:[t.jDz],decls:6,vars:0,consts:[[1,"container-fluid","mainSection"],[1,"btn-up",3,"click"],[1,"fa-solid","fa-angle-up"]],template:function(n,r){1&n&&(t._UZ(0,"app-nav-blank"),t.TgZ(1,"div",0),t._UZ(2,"router-outlet"),t.qZA(),t._UZ(3,"app-footer"),t.TgZ(4,"button",1),t.NdJ("click",function(){return r.goToUp()}),t._UZ(5,"i",2),t.qZA())},dependencies:[p.ez,i,o.lC,c.c],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;min-height:100vh}.mainSection[_ngcontent-%COMP%]{padding-top:80px}.btn-up[_ngcontent-%COMP%]{position:fixed;bottom:10px;right:10px;z-index:9999;width:40px;height:40px;display:flex;justify-content:center;align-items:center;border-radius:15px;background-color:#0aad0a;border:unset;color:#fff;font-size:20px}"]})}return s})()}}]);