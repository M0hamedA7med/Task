
import { Routes } from '@angular/router';
import { UsersComponent } from './users/users/users.component';
import { BodyComponent } from './body/body/body.component';
import { UserbyidComponent } from './specificuser/userbyid/userbyid.component';
import { DetailsComponent } from './details/details.component';


export const routes: Routes = [
    

  
  { path: 'users', component: UsersComponent },
  { path: 'body', component: BodyComponent },
  { path: 'userid/:id', component: UserbyidComponent },
  { path: 'users', component: UsersComponent },
  { path: 'Details', component: DetailsComponent }



  
  ];
