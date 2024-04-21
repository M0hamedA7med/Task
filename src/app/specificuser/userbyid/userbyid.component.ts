import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { UsersService } from '../../../Services/users.service';

@Component({
  selector: 'app-userbyid',
  standalone: true,
  imports: [CommonModule,HttpClientModule,FormsModule,RouterModule],
  providers:[UsersService],
  templateUrl: './userbyid.component.html',
  styleUrl: './userbyid.component.css'
})
export class UserbyidComponent implements OnInit {
  searchQuery: any;
  user: any;
  id:any ;

  constructor(private usersService: UsersService,private Actived : ActivatedRoute) {
    this.id = this.Actived.snapshot.params["id"];
  }

  ngOnInit(): void {
 this.searchUser() ; 
  }
  loadUsersbyid() {
    this.usersService.getuserByID(this.searchQuery).subscribe({
      next: (data) => {
        this.user = data;
        console.log(data);
      },
      error: (err) => {
        // Use this.router.navigate instead of router.navigate
      
      }
    });
  }
  searchUser() {
    if (this.id) {
      this.usersService.getuserByID(this.id)
        .subscribe(user => {
         
            this.user = user;
            console.log(user);
            

         
        });
    }
  }
}