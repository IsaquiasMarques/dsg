import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private cake_types: any[] = [
    {
      'id': 1,
      'image': 'assets/images/img5.jpg',
      'title': 'Bolos de Chocolate',
      'price': '15.000.00',
    },
    {
      'id': 2,
      'image': 'assets/images/img6.jpg',
      'title': 'Bolos de Aniversário',
      'price': '17.000.00',
    },
    {
      'id': 3,
      'image': 'assets/images/img4.jpg',
      'title': 'Bolos de Casamento',
      'price': '10.000.00',
    },
    {
      'id': 4,
      'image': 'assets/images/img7.jpg',
      'title': 'Bolos com cobertura',
      'price': '5.000.00',
    },
  ]

  get_products(){
    return this.cake_types;
  }

  getProductById(item: any){
    return this.cake_types.find(obj => obj.id === item);
  }

}
