
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Header/header/header.component';
import { BodyComponent } from './body/body/body.component';
import { UsersComponent } from './users/users/users.component';
import { UserbyidComponent } from './specificuser/userbyid/userbyid.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserbyidComponent,RouterOutlet,HeaderComponent,BodyComponent,UsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task';
}
