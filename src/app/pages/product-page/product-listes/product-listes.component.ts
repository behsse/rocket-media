import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-listes',
  templateUrl: './product-listes.component.html',
  styleUrls: ['./product-listes.component.less']
})
export class ProductListesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  products: any[] = [];

}
