import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaProdutoComponent } from './produto/consulta produto/consulta-produto.component';
import { CadastroProdutoComponent } from './produto/cadastro produto/cadastro-produto.component';

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
