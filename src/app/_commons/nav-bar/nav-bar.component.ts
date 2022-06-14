import { Component, OnInit } from '@angular/core';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.less']
})
export class NavBarComponent implements OnInit {

  faRocket = faRocket;
  constructor() { }

  ngOnInit(): void {
  }

}
