"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[560],{6560:(Q,u,a)=>{a.r(u),a.d(u,{RegisterComponent:()=>Y});var d=a(6814),i=a(95),e=a(4769),c=a(9410),f=a(1120);function Z(r,s){1&r&&(e.TgZ(0,"p",20),e._uU(1,"Name is Required"),e.qZA())}function h(r,s){1&r&&(e.TgZ(0,"p",20),e._uU(1,"Name MinLength 3"),e.qZA())}function T(r,s){1&r&&(e.TgZ(0,"p",20),e._uU(1,"Name MaxLength 20"),e.qZA())}function v(r,s){if(1&r&&(e.TgZ(0,"div",18),e.YNc(1,Z,2,0,"p",19),e.YNc(2,h,2,0,"p",19),e.YNc(3,T,2,0,"p",19),e.qZA()),2&r){const o=e.oxw();let n,t,l;e.xp6(1),e.Q6J("ngIf",null==(n=o.registerForm.get("name"))?null:n.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(t=o.registerForm.get("name"))?null:t.getError("minlength")),e.xp6(1),e.Q6J("ngIf",null==(l=o.registerForm.get("name"))?null:l.getError("maxlength"))}}function x(r,s){1&r&&(e.TgZ(0,"p",20),e._uU(1,"email is Required"),e.qZA())}function q(r,s){1&r&&(e.TgZ(0,"p",20),e._uU(1,"invalid format"),e.qZA())}function w(r,s){if(1&r&&(e.TgZ(0,"div",18),e.YNc(1,x,2,0,"p",19),e.YNc(2,q,2,0,"p",19),e.qZA()),2&r){const o=e.oxw();let n,t;e.xp6(1),e.Q6J("ngIf",null==(n=o.registerForm.get("email"))?null:n.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(t=o.registerForm.get("email"))?null:t.getError("email"))}}function A(r,s){1&r&&(e.TgZ(0,"p",20),e._uU(1,"password is Required"),e.qZA())}function U(r,s){1&r&&(e.TgZ(0,"p",20),e._uU(1," must be"),e._UZ(2,"br"),e._uU(3," * Start with a letter (either uppercase or lowercase)."),e._UZ(4,"br"),e._uU(5," * Be between 6 and 9 characters in total."),e._UZ(6,"br"),e._uU(7," * Can only contain letters (A-Z or a-z) and numbers (0-9)"),e.qZA())}function I(r,s){if(1&r&&(e.TgZ(0,"div",18),e.YNc(1,A,2,0,"p",19),e.YNc(2,U,8,0,"p",19),e.qZA()),2&r){const o=e.oxw();let n,t;e.xp6(1),e.Q6J("ngIf",null==(n=o.registerForm.get("password"))?null:n.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(t=o.registerForm.get("password"))?null:t.getError("pattern"))}}function R(r,s){1&r&&(e.TgZ(0,"p",20),e._uU(1,"rePassword is Required"),e.qZA())}function C(r,s){1&r&&(e.TgZ(0,"p",20),e._uU(1,"password confirmation is incorrect"),e.qZA())}function F(r,s){if(1&r&&(e.TgZ(0,"div",18),e.YNc(1,R,2,0,"p",19),e.YNc(2,C,2,0,"p",19),e.qZA()),2&r){const o=e.oxw();let n,t;e.xp6(1),e.Q6J("ngIf",null==(n=o.registerForm.get("rePassword"))?null:n.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(t=o.registerForm.get("rePassword"))?null:t.getError("misMatch"))}}function E(r,s){1&r&&(e.TgZ(0,"p",20),e._uU(1,"phone is Required"),e.qZA())}function N(r,s){1&r&&(e.TgZ(0,"p",20),e._uU(1,"accept only egypt phone number"),e.qZA())}function J(r,s){if(1&r&&(e.TgZ(0,"div",18),e.YNc(1,E,2,0,"p",19),e.YNc(2,N,2,0,"p",19),e.qZA()),2&r){const o=e.oxw();let n,t;e.xp6(1),e.Q6J("ngIf",null==(n=o.registerForm.get("phone"))?null:n.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(t=o.registerForm.get("phone"))?null:t.getError("pattern"))}}function P(r,s){1&r&&e._UZ(0,"i",21)}function b(r,s){if(1&r&&(e.TgZ(0,"p",22),e._uU(1),e.qZA()),2&r){const o=e.oxw();e.xp6(1),e.Oqu(o.errMsg)}}let Y=(()=>{class r{constructor(o,n,t){this._AuthService=o,this._Router=n,this._FormBuilder=t,this.errMsg="",this.isLoading=!1,this.registerForm=this._FormBuilder.group({name:["",[i.kI.required,i.kI.minLength(3),i.kI.maxLength(20)]],email:["",[i.kI.required,i.kI.email]],password:["",[i.kI.required,i.kI.pattern(/^[a-zA-Z][0-9a-zA-Z]{5,8}$/)]],rePassword:[""],phone:["",[i.kI.required,i.kI.pattern(/^01[0123][0-9]{8}$/)]]},{validators:[this.confirmPassword]})}confirmPassword(o){const n=o.get("password"),t=o.get("rePassword");""==t?.value?t?.setErrors({required:!0}):n?.value!=t?.value&&t?.setErrors({misMatch:!0})}handleForm(){const o=this.registerForm.value;this.isLoading=!0,!0===this.registerForm.valid&&this._AuthService.register(o).subscribe({next:n=>{"success"===n.message&&(this.isLoading=!1,this._Router.navigate(["/login"]))},error:n=>{this.errMsg=n.error.message,this.isLoading=!1}})}static#e=this.\u0275fac=function(n){return new(n||r)(e.Y36(c.e),e.Y36(f.F0),e.Y36(i.qu))};static#r=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-register"]],standalone:!0,features:[e.jDz],decls:34,vars:9,consts:[[1,"w-75","p-4","my-3","shadow","rounded","mx-auto","bg-main-light"],[1,"my-3"],[3,"formGroup","ngSubmit"],[1,"form-item"],["for","name"],["formControlName","name","type","text","id","name",1,"form-control"],["class","alert alert-danger p-1 small w-75 mx-auto",4,"ngIf"],["for","email"],["formControlName","email","type","email","id","email",1,"form-control"],["for","password"],["formControlName","password","type","password","required","","pattern","^[a-zA-Z][0-9a-zA-Z]{5,8}$","id","password",1,"form-control"],["for","rePassword"],["formControlName","rePassword","type","password","id","rePassword",1,"form-control"],["for","phone"],["formControlName","phone","type","tel","id","phone",1,"form-control"],[1,"main-btn","mt-2",3,"disabled"],["class","fas fa-spin fa-spinner",4,"ngIf"],["class","alert alert-danger mx-auto p-1 w-75 mb-0 text-center",4,"ngIf"],[1,"alert","alert-danger","p-1","small","w-75","mx-auto"],["class","mb-0",4,"ngIf"],[1,"mb-0"],[1,"fas","fa-spin","fa-spinner"],[1,"alert","alert-danger","mx-auto","p-1","w-75","mb-0","text-center"]],template:function(n,t){if(1&n&&(e.TgZ(0,"section",0)(1,"h1",1),e._uU(2,"Register Now"),e.qZA(),e.TgZ(3,"form",2),e.NdJ("ngSubmit",function(){return t.handleForm()}),e.TgZ(4,"div",3)(5,"label",4),e._uU(6,"name"),e.qZA(),e._UZ(7,"input",5),e.YNc(8,v,4,3,"div",6),e.qZA(),e.TgZ(9,"div",3)(10,"label",7),e._uU(11,"email"),e.qZA(),e._UZ(12,"input",8),e.YNc(13,w,3,2,"div",6),e.qZA(),e.TgZ(14,"div",3)(15,"label",9),e._uU(16,"password"),e.qZA(),e._UZ(17,"input",10),e.YNc(18,I,3,2,"div",6),e.qZA(),e.TgZ(19,"div",3)(20,"label",11),e._uU(21,"rePassword"),e.qZA(),e._UZ(22,"input",12),e.YNc(23,F,3,2,"div",6),e.qZA(),e.TgZ(24,"div",3)(25,"label",13),e._uU(26,"phone"),e.qZA(),e._UZ(27,"input",14),e.YNc(28,J,3,2,"div",6),e.qZA(),e.TgZ(29,"button",15),e._uU(30,"Register "),e.TgZ(31,"span"),e.YNc(32,P,1,0,"i",16),e.qZA()()(),e.YNc(33,b,2,1,"p",17),e.qZA()),2&n){let l,m,p,_,g;e.xp6(3),e.Q6J("formGroup",t.registerForm),e.xp6(5),e.Q6J("ngIf",(null==(l=t.registerForm.get("name"))?null:l.errors)&&(null==(l=t.registerForm.get("name"))?null:l.touched)),e.xp6(5),e.Q6J("ngIf",(null==(m=t.registerForm.get("email"))?null:m.errors)&&(null==(m=t.registerForm.get("email"))?null:m.touched)),e.xp6(5),e.Q6J("ngIf",(null==(p=t.registerForm.get("password"))?null:p.errors)&&(null==(p=t.registerForm.get("password"))?null:p.touched)),e.xp6(5),e.Q6J("ngIf",(null==(_=t.registerForm.get("rePassword"))?null:_.errors)&&(null==(_=t.registerForm.get("rePassword"))?null:_.touched)),e.xp6(5),e.Q6J("ngIf",(null==(g=t.registerForm.get("phone"))?null:g.errors)&&(null==(g=t.registerForm.get("phone"))?null:g.touched)),e.xp6(1),e.Q6J("disabled",t.registerForm.invalid),e.xp6(3),e.Q6J("ngIf",t.isLoading),e.xp6(1),e.Q6J("ngIf",t.errMsg)}},dependencies:[d.ez,d.O5,i.UX,i._Y,i.Fj,i.JJ,i.JL,i.Q7,i.c5,i.sg,i.u]})}return r})()}}]);