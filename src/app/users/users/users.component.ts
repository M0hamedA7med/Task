import { UsersService } from './../../../Services/users.service';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router'; // Import Router from @angular/router
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  standalone:true,
  styleUrls: ['./users.component.css'],
  imports: [CommonModule, HttpClientModule, FormsModule, RouterModule,RouterLink],
  providers: [UsersService]
})
export class UsersComponent implements OnInit {
  users: any;
 
  constructor(
    private usersService: UsersService,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    this.loadUsers(); 
  }
  
  loadUsers() {
    this.usersService.getallusers().subscribe({
      next: (data) => {
        this.users = data;
        console.log(data);
      },
      error: (err) => {
        // Use this.router.navigate instead of router.navigate
      
      }
    });
  }
}
