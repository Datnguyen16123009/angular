import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Cat 1',
      price: 100,
      description: 'Cat 1 trùm mền',
      imageUrl: 'https://i.ibb.co/kS75gkY/cat1.jpg',
      soLuong: 0,
      tong: 0,
    },
    {
      id: 2,
      name: 'Cat 2',
      price: 200,
      description: 'Cat 2 chán đời',
      imageUrl: 'https://i.ibb.co/CmWKLkZ/8.png',
      soLuong: 0,
      tong: 0,
    },
    {
      id: 3,
      name: 'Cat 3',
      price: 300,
      description: 'Cat 3 trùm mền too',
      imageUrl: 'https://i.ibb.co/kS75gkY/cat1.jpg',
      soLuong: 0,
      tong: 0,
    },
  ];
}

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  soLuong: number;
  tong: number;
}
