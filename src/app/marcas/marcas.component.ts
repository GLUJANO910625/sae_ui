import { Component, OnInit } from '@angular/core';
import { MarcaService } from '../services/marca.service';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})
export class MarcasComponent implements OnInit {

  constructor(public marcaService: MarcaService) { }

  listaMarcas=[];

  ngOnInit() {

    this.marcaService.list().subscribe((data)=> {
      this.listaMarcas = data;
    });
    
  }

}
