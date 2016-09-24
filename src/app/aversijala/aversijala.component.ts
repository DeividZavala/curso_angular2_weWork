import { Component, OnInit } from '@angular/core';

import { Producto } from './producto';

import { ProductosService } from './aversijala.service';

@Component({
  selector: 'app-aversijala',
  templateUrl: './aversijala.component.html',
  styleUrls: ['./aversijala.component.css']
})
export class AversijalaComponent implements OnInit {

  constructor( private productosService: ProductosService){}

  productos: Producto[];

  ngOnInit() {
    this.productosService.getProductos()
      .subscribe(productos => this.productos = productos)
  }

  addProduct(producto){
    if(producto.quantity < producto.stock) producto.quantity ++
  }

  removeProduct(producto){
    if(producto.quantity > 0) producto.quantity --
  }

  quedan(producto){
    let restan;
     restan = producto.stock - producto.quantity;
     return restan;
  }

  total(){
    let total = 0;
    let suma;
    if(Array.isArray(this.productos)){
      for(let producto of this.productos) {
        suma = producto.quantity * producto.price;
        total += suma;
      }
    }
    return total;
  }

  pedido(producto){
    let pedido
    return pedido = `pediste ${producto.quantity} unidades de ${producto.name}`
  }

}
