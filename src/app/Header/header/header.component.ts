import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { UsersService } from '../../../Services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { style } from '@angular/animations';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink,RouterModule,HttpClientModule],
  providers:[UsersService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  searchQuery: string = '';
  user:any;
  userNotFound: boolean = false; 


  constructor(private usersService: UsersService,private router: Router) {}

  ngOnInit(): void {}
  
  searchUser() {
    this.usersService.getuserByID(this.searchQuery).subscribe({
      next: (data) => {
        this.user = data;
        if (this.searchQuery&& this.user.id) {

          this.router.navigate(['/userid/'+this.searchQuery]);
          setTimeout(() => {
            window.location.reload();
          }, 0.01);
    
          
        } else {
          this.userNotFound = true;
        }
      },
      error: (err) => {
       
      
      }
    });
    if (this.searchQuery&& this.user.id) {

      this.router.navigate(['/userid/'+this.searchQuery]);
      setTimeout(() => {
        window.location.reload();
      }, 0.01);

      
    } else {
      console.log("Error: No search query entered");
    }
    
  }
}