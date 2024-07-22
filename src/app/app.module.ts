import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LojaComponent } from './loja/loja.component';
import { CadastroProdutoComponent } from './produto/cadastro produto/cadastro-produto.component';
import { ConsultaProdutoComponent } from './produto/consulta produto/consulta-produto.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MensagemTabela } from './produto/consulta produto/mensagem-tabela';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    LojaComponent,
    CadastroProdutoComponent,
    ConsultaProdutoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTooltipModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } },
    { provide: MatPaginatorIntl, useClass: MensagemTabela },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
