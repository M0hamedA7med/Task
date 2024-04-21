import { Component } from '@angular/core';
import { UsersService } from '../../../Services/users.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-createuser',
  standalone: true,
  imports: [FormsModule,CommonModule],
  providers:[UsersService],
  templateUrl: './createuser.component.html',
  styleUrl: './createuser.component.css'
})
export class CreateuserComponent {
  newUser = {
    id: '',
    email: '',
    firstName: '',
    lastName: ''
  };

  constructor(private userService: UsersService) {}

  onSubmit() {
    let newUserId: number; // Declare newUserId here

    this.userService.getLastUserId().subscribe(
      lastUserIdArray => {
        lastUserIdArray

        this.userService.ADdnewuser(this.newUser).subscribe(
          response => {
            console.log('User added successfully!', response);
            this.resetForm();
          },
          error => {
            console.error('Error adding user:', error);
          }
        );
      },
      error => {
        console.error('Error fetching last user ID:', error);
      }
    );
  }

  resetForm() {
    this.newUser = {
      id: '',
      email: '',
      firstName: '',
      lastName: ''
    };
  }
}
