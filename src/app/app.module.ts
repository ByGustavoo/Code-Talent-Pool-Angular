import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LojaComponent } from './Loja/loja.component';
import { CadastroProdutoComponent } from './Produto/Cadastro Produto/cadastro-produto.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ConsultaProdutoComponent } from './Produto/Consulta Produto/consulta-produto.component';

@NgModule({
  declarations: [AppComponent, LojaComponent, CadastroProdutoComponent, ConsultaProdutoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTooltipModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
