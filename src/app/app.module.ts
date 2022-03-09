import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { MarcasComponent } from './marcas/marcas.component';
import { VentasComponent } from './ventas/ventas.component';
import { ProductoComponent } from './producto/producto.component';
import { EditarProductoComponent } from './producto/editar-producto/editar-producto.component';
import { PreciosComponent } from './precios/precios.component';
import { EditarPrecioComponent } from './precios/editar-precio/editar-precio.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'marca', component: MarcasComponent},
  {path: 'ventas', component: VentasComponent},
  {path: 'articulo', component: ProductoComponent},
  {path: 'precios', component: PreciosComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    MarcasComponent,
    VentasComponent,
    ProductoComponent,
    EditarProductoComponent,
    PreciosComponent,
    EditarPrecioComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
