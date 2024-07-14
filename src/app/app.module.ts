import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ConsultaProdutoComponent } from './Produto/Consulta Produto/consulta-produto.component';
import { LojaComponent } from './Loja/loja.component';
import { CadastroProdutoComponent } from './Produto/Cadastro Produto/cadastro-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    LojaComponent,
    CadastroProdutoComponent,
    ConsultaProdutoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
