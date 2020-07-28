import {Router, ActivatedRoute} from '@angular/router';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-fechamento',
  templateUrl: './fechamento.component.html',
  styleUrls: ['./fechamento.component.scss']
})
export class FechamentoComponent implements OnInit {
  public pageData: any;
  public formData = {
    cultivar: null,
    nivel: null,
    venda_giro: true,
  };
  public arrEstados = [];

  constructor(router: Router, private route: ActivatedRoute) {
    this.arrEstados.push(
      {
        estado: null,
        venda: null,
        ciclo: null
      }
    );
  }

  ngOnInit() {
    this.pageData = <any>this.route.snapshot.data;
    console.log(this.pageData.title)
  }

  adicionaEstado() {
    this.arrEstados.push(
      {
        
      }
    );
  }

  apagaLinha(idx) {
    if (this.arrEstados.length === 1) {
      this.arrEstados[0] = {
        estado: null,
        venda: null,
        ciclo: null
      };
    } else {
      this.arrEstados.splice(idx, 1);
    }
  }

  adicionarCultivar() {
    console.log(this.formData, this.arrEstados);
  }

}
