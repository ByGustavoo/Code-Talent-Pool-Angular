import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaProdutoComponent } from './Produto/Consulta Produto/consulta-produto.component';
import { CadastroProdutoComponent } from './Produto/Cadastro Produto/cadastro-produto.component';

const routes: Routes = [
  { path: '', redirectTo: 'produto', pathMatch: 'full' },
  { path: 'produto', component: ConsultaProdutoComponent },
  { path: 'produto/cadastro', component: CadastroProdutoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
