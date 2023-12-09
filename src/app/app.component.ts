import { Component } from '@angular/core';
import { MarvelpageComponent } from './marvelpage/marvelpage.component';
import { RouterModule } from '@angular/router';
@Component({
  standalone: true,
  selector: 'app-root',
  imports : [MarvelpageComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'marvelpage';
}
