
import { Routes } from '@angular/router';
import { UsersComponent } from './users/users/users.component';
import { BodyComponent } from './body/body/body.component';
import { UserbyidComponent } from './specificuser/userbyid/userbyid.component';


export const routes: Routes = [
    

  {path:"",redirectTo:"body",pathMatch:"full"},
    { path: 'users', component: UsersComponent },
    { path: 'body', component: BodyComponent },
    //{path:'userid',component:UserbyidComponent},
    {path:'userid/:id',component:UserbyidComponent},



  
  ];
