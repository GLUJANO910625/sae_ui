import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }
 
  ngOnInit() {

    
  }

 ejecutar(){
      $('#sidebar, #content').toggleClass('active');
 }

 navegar (pathurl:any){
  this.router.navigate([pathurl]);
 }

}
