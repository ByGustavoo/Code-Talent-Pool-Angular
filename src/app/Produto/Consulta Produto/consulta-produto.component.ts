import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-consulta-produto',
  templateUrl: './consulta-produto.component.html',
  styleUrls: ['./consulta-produto.component.css'],
})
export class ConsultaProdutoComponent implements AfterViewInit {

  displayedColumns: string[] = ['codigo', 'descricao', 'custo', 'botoes'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  descricao: string;
  codigo: number;
  custo: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { codigo: 1, descricao: 'Hydrogen', custo: 10 },
  { codigo: 2, descricao: 'Helium', custo: 10 },
  { codigo: 3, descricao: 'Lithium', custo: 10 },
  { codigo: 4, descricao: 'Beryllium', custo: 10 },
  { codigo: 5, descricao: 'Boron', custo: 10 },
  { codigo: 6, descricao: 'Carbon', custo: 10 },
  { codigo: 7, descricao: 'Nitrogen', custo: 10 },
  { codigo: 8, descricao: 'Oxygen', custo: 10 },
  { codigo: 9, descricao: 'Fluorine', custo: 10 },
  { codigo: 10, descricao: 'Neon', custo: 10 },
];
