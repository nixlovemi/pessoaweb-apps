import {Router, ActivatedRoute} from '@angular/router';
import { Component, OnInit } from '@angular/core';

class Estados {
  public estado: number = null;
  public venda: number = null;
  public ciclo: number = null;
}
class Cultivar {
  public cultivar: number = null;
  public nivel: number = null;
  public venda_giro = true;
  public estados: Estados[] = [];

  constructor() {
    this.estados.push(
      new Estados()
    );
  }
  pegaTotal() {
    let total = 0;

    for (let i = 0; i < this.estados.length; i++ ) {
      const Estado = this.estados[i];
      const venda = Estado.venda;
      const giro = Estado.ciclo;

      if (venda > 0) {
        total += Number(venda);
      }
      if (giro > 0) {
        total += Number(giro);
      }
    }

    return total;
  }
}

@Component({
  selector: 'app-fechamento',
  templateUrl: './fechamento.component.html',
  styleUrls: ['./fechamento.component.scss']
})
export class FechamentoComponent implements OnInit {
  public pageData: any;
  public formData: Cultivar[] = [];

  constructor(router: Router, private route: ActivatedRoute) {
    this.formData.push(
      new Cultivar()
    );
  }

  ngOnInit() {
    this.pageData = <any>this.route.snapshot.data;
    console.log(this.pageData.title)
  }

  adicionaEstado(idxCultivar: number) {
    this.formData[idxCultivar].estados.push(
      new Estados()
    );
  }

  apagaLinha(idxCultivar: number, idxEstado: number) {
    if (this.formData[idxCultivar].estados.length === 1) {
      this.formData[idxCultivar].estados[0] = new Estados();
    } else {
      this.formData[idxCultivar].estados.splice(idxEstado, 1);
    }
  }

  deletaCultivar(idxCultivar: number) {
    if (this.formData.length === 1) {
      this.formData[idxCultivar] = new Cultivar();
    } else {
      this.formData.splice(idxCultivar, 1);
    }
  }

  adicionarCultivar() {
    this.formData.push(
      new Cultivar()
    );
    // console.log(this.formData);
  }

}
