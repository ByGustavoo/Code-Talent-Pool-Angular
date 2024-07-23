import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})

export class CadastroProdutoComponent implements AfterViewInit {
  displayedColumns: string[] = ['btnAdicionar', 'codigo', 'preco', 'botoes'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  confimaExcluir() {
    Swal.fire({
      title: "ATENÇÃO",
      text: "O preço cadastrado para a loja selecionada será deletado do sistema. Deseja prosseguir?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3f51b5",
      cancelButtonColor: "#d33",
      confirmButtonText: "DELETAR",
      cancelButtonText: "CANCELAR"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Sucesso",
          text: "O preço foi removido da sua loja.",
          icon: "success",
        });
      }
    });    
  } 
}

export interface PeriodicElement {
  codigo: number;
  preco: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { codigo: 1, preco: 10 },
  { codigo: 2, preco: 10 },
  { codigo: 3, preco: 10 },
  { codigo: 4, preco: 10 },
  { codigo: 5, preco: 10 },
  { codigo: 6, preco: 10 },
  { codigo: 7, preco: 10 },
  { codigo: 8, preco: 10 },
  { codigo: 9, preco: 10 },
  { codigo: 10, preco: 10 },
];
