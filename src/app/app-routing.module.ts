import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaProdutoComponent } from './Produto/consulta produto/consulta-produto.component';
import { CadastroProdutoComponent } from './Produto/cadastro produto/cadastro-produto.component';

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
