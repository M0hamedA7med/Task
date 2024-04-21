import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterModule,RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

}
