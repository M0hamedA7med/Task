import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';


@Component({
  selector: 'app-body',
  standalone: true,
  imports: [RouterLink,RouterModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  constructor(private router: Router) {
    
  }

  allusers(){ 
    this.router.navigate(['/users']);
  }
}
