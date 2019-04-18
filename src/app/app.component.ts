import { OnInit } from '@angular/core';
//import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private router:Router){}
  ngOnInit(){
    this.router.navigate(['/login'])
  }

}
