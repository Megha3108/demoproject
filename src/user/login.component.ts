import {Component} from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from './auth.service'
@Component({
templateUrl:`./login.component.html`,
styles:[
  `
  em {float:right; color:red; padding-left:10px;}
  `
]
})
export class LoginComponent{
    userName
    password
    mouseoverLogin
   constructor(private auth:AuthService,private route:Router)  {

   }
   login(formValues){
  this.auth.loginUser(formValues.userName,formValues.password)
  this.route.navigate(['/events'])
}
  
 cancel(){
    this.route.navigate(['/events'])
}

}