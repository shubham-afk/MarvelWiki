import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-marvelpage',
  standalone:true,
  templateUrl: './marvelpage.component.html',
  styleUrls: ['./marvelpage.component.css']
})
export class MarvelpageComponent {

  constructor(private router : Router) {}

  CallSpiderMan(){
    this.router.navigate(['/spiderman']);
  }
}
