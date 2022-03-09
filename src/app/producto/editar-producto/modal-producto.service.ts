import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalProductoService {
  modal =  false;

  constructor() { }

  open() {
    this.modal = true;
  }

  close() {
    this.modal = false;
  }
}
