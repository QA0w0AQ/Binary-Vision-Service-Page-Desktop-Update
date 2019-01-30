import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-looper',
  templateUrl: './looper.component.html',
  styleUrls: ['./looper.component.css']
})
export class LooperComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init();
  }

}
