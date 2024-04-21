import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private readonly myClient:HttpClient) { }
  DB_URl="http://localhost:3000/data"
  getallusers(){
    return this.myClient.get(this.DB_URl);
}
getuserByID(id:any){
  return this.myClient.get(`${this.DB_URl}/${id}`);
}
AddNewGroup(Group:any){
  return this.myClient.post(this.DB_URl,Group);
}
}