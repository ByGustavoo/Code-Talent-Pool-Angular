import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaProdutoComponent } from './consulta-produto.component';

describe('ConsultaProdutoComponent', () => {
  let component: ConsultaProdutoComponent;
  let fixture: ComponentFixture<ConsultaProdutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultaProdutoComponent]
    });
    fixture = TestBed.createComponent(ConsultaProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
