"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[263],{5263:(l,c,a)=>{a.r(c),a.d(c,{BranddetailsComponent:()=>e});var o=a(6814),t=a(4769),d=a(1120),r=a(0);function _(n,g){if(1&n&&(t.TgZ(0,"section",1)(1,"div",2)(2,"div",3),t._UZ(3,"img",4),t.qZA(),t.TgZ(4,"div",3)(5,"h2",5),t._uU(6),t.qZA()()()()),2&n){const s=t.oxw();t.xp6(3),t.Q6J("src",s.brandDetails.image,t.LSH)("alt",s.brandDetails.name),t.xp6(3),t.Oqu(s.brandDetails.name)}}let e=(()=>{class n{constructor(s,i){this._ActivatedRoute=s,this._ProductsService=i,this.brandId="",this.brandDetails={name:"",image:""}}ngOnInit(){this._ActivatedRoute.paramMap.subscribe({next:s=>{this.brandId=s.get("id")}}),this._ProductsService.getBrandsDetails(this.brandId).subscribe({next:s=>{this.brandDetails=s.data}})}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(d.gz),t.Y36(r.s))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-branddetails"]],standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[["class","w-75 mx-auto rounded shadow bg-main-light p-3 mb-3",4,"ngIf"],[1,"w-75","mx-auto","rounded","shadow","bg-main-light","p-3","mb-3"],[1,"row","g-4","align-items-center"],[1,"col-md-6"],[1,"w-100",3,"src","alt"],[1,"fw-bold"]],template:function(i,u){1&i&&t.YNc(0,_,7,3,"section",0),2&i&&t.Q6J("ngIf",u.brandDetails._id)},dependencies:[o.ez,o.O5]})}return n})()},0:(l,c,a)=>{a.d(c,{s:()=>d});var o=a(4769),t=a(9862);let d=(()=>{class r{constructor(e){this._HttpClient=e,this.baseUrl="https://ecommerce.routemisr.com/api/v1/"}getBrands(){return this._HttpClient.get(this.baseUrl+"brands")}getBrandsDetails(e){return this._HttpClient.get(this.baseUrl+`brands/${e}`)}getProducts(e=1){return this._HttpClient.get(this.baseUrl+`products?page=${e}`)}getProductDetails(e){return this._HttpClient.get(this.baseUrl+`products/${e}`)}getCategories(){return this._HttpClient.get(this.baseUrl+"categories")}getCategoryDetails(e){return this._HttpClient.get(this.baseUrl+`categories/${e}`)}static#t=this.\u0275fac=function(n){return new(n||r)(o.LFG(t.eN))};static#e=this.\u0275prov=o.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})()}}]);