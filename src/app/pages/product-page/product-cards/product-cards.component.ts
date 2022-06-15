import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-cards',
  templateUrl: './product-cards.component.html',
  styleUrls: ['./product-cards.component.less']
})
export class ProductCardsComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  product !: any
}
