import {Component,OnInit} from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
@Component({
templateUrl:`./profile.component.html`,
styles:[
    `
    em {float:right; color:red; padding-left:10px;}
    error input { background-color:yellow;}
    `
]
})
export class ProfileComponent implements OnInit{
    profileForm:FormGroup
    constructor(private route:Router,private auth:AuthService){

    }
    ngOnInit(){
let firstName=new FormControl(this.auth.currentUser.firstName,Validators.required)
let lastName=new FormControl(this.auth.currentUser.lastName,Validators.required)
this.profileForm=new FormGroup({
firstName:firstName,
lastName:lastName
})
    }
   
    saveprofile(formValues){
        if(this.profileForm.valid){
this.auth.updateprofile(formValues.firstName,formValues.lastName)
this.route.navigate(['/events'])
    }}
cancel(){
this.route.navigate(['/events'])
}
}