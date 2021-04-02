import {Injectable} from '@angular/core'
import { IUser } from './user.module'
@Injectable()
export class AuthService{
    currentUser:IUser
    loginUser(userName:string,password:string){
        this.currentUser ={
            id:1,
            userName:userName,
            firstName:'Megha',
            lastName:'Kejadiwal'

    
        }
      
    }
    isAuthenticated() {
        return !!this.currentUser;
    }
    updateprofile(firstName:string,lastName:string){
        this.currentUser.firstName=firstName
        this.currentUser.lastName=lastName

    }

   

}