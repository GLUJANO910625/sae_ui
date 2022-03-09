import { Component, OnInit } from '@angular/core';
import { ClasificacionService } from 'src/app/services/clasificacion.service';
import { MarcaService } from 'src/app/services/marca.service';
import { ProductoService } from 'src/app/services/producto.service';
import { ModalProductoService } from './modal-producto.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {

  constructor(public modalProductoService: ModalProductoService,
    public marcaService:MarcaService,
    public clasificacionService:ClasificacionService,
    public productoService:ProductoService) { }

    clasificaciones=[];
    marcas=[];
    producto = {};
  ngOnInit() {
    
    this.marcaService.list().subscribe((data)=> {
      this.marcas = data;
    });

    this.clasificacionService.list().subscribe((data)=> {
      this.clasificaciones = data;
    });
  }

  onSubmit(){

    this.productoService.save(this.producto).subscribe((data)=> {
      if (data){
        console.log(data);
      }
    });
  }
}
