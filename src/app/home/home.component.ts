import { Component, OnInit } from '@angular/core';
import { WOW } from 'wowjs/dist/wow.min';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {     }
  
  ngOnInit() {
    new WOW({
      live :  false 
    }).init();
  }
}
