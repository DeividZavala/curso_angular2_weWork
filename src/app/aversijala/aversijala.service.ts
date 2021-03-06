import { Producto } from './producto';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ProductosService{
    constructor (private http:Http){}

    getProductos(){
        return this.http.get('app/aversijala/productosData.json')
            .map(response => <Producto[]> response.json().data)
    }


}