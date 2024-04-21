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
ADdnewuser(user:any){
  return this.myClient.post(this.DB_URl,user);
}
getLastUserId() {
  return this.myClient.get<number[]>(this.DB_URl + '?_sort=id&_order=desc&_limit=1');
  
}
}