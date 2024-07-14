import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LojaComponent } from './Loja/loja.component';
import { ProdutoComponent } from './Produto/produto.component';

@NgModule({
  declarations: [
    AppComponent,
    LojaComponent,
    ProdutoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
