import { Component, OnInit } from '@angular/core';
import { ClasificacionService } from '../services/clasificacion.service';
import { MarcaService } from '../services/marca.service';
import { ProductoService } from '../services/producto.service';
import { ModalProductoService } from './editar-producto/modal-producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  constructor(public productoService:ProductoService,
    public modalProductoService: ModalProductoService,
    public marcaService:MarcaService,
    public clasificacionService:ClasificacionService) { }

  listaProductos=[];
  openModal = false;

  ngOnInit() {
    this.productoService.list().subscribe((data)=> {
      this.listaProductos = data;
    });
  }

  openModalShow() {
    this.modalProductoService.modal = true;
    this.modalProductoService.open();
  }
}
