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
    let totalVenda = 0;
    let totalCiclo = 0;
    let totalTUDO  = 0;

    for (let i = 0; i < this.estados.length; i++ ) {
      const Estado = this.estados[i];
      const venda = Estado.venda;
      const ciclo = Estado.ciclo;

      if (venda > 0) {
        totalVenda += Number(venda);
        totalTUDO  += Number(venda);
      }
      if (ciclo > 0) {
        totalCiclo += Number(ciclo);
        totalTUDO += Number(ciclo);
      }
    }

    return {
      venda: totalVenda,
      ciclo: totalCiclo,
      total: totalTUDO
    };
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

  pegaTotalEstado() {
    const totalEstados = {
      sudeste: {
        super_precoce: {
          venda: 0,
          ciclo: 0
        },
        precoce: {
          venda: 0,
          ciclo: 0
        },
        normal: {
          venda: 0,
          ciclo: 0
        },
        milho_variedade: {
          venda: 0,
          ciclo: 0
        },
        duplo_hibrido: {
          venda: 0,
          ciclo: 0
        },
        triplo_hibrido: {
          venda: 0,
          ciclo: 0
        },
        simples_hibrido: {
          venda: 0,
          ciclo: 0
        },
        simples_modificado: {
          venda: 0,
          ciclo: 0
        },
        milho_variedade2: {
          venda: 0,
          ciclo: 0
        }
      },
      sul: {
        super_precoce: {
          venda: 0,
          ciclo: 0
        },
        precoce: {
          venda: 0,
          ciclo: 0
        },
        normal: {
          venda: 0,
          ciclo: 0
        },
        milho_variedade: {
          venda: 0,
          ciclo: 0
        },
        duplo_hibrido: {
          venda: 0,
          ciclo: 0
        },
        triplo_hibrido: {
          venda: 0,
          ciclo: 0
        },
        simples_hibrido: {
          venda: 0,
          ciclo: 0
        },
        simples_modificado: {
          venda: 0,
          ciclo: 0
        },
        milho_variedade2: {
          venda: 0,
          ciclo: 0
        }
      },
      centro_oeste: {
        super_precoce: {
          venda: 0,
          ciclo: 0
        },
        precoce: {
          venda: 0,
          ciclo: 0
        },
        normal: {
          venda: 0,
          ciclo: 0
        },
        milho_variedade: {
          venda: 0,
          ciclo: 0
        },
        duplo_hibrido: {
          venda: 0,
          ciclo: 0
        },
        triplo_hibrido: {
          venda: 0,
          ciclo: 0
        },
        simples_hibrido: {
          venda: 0,
          ciclo: 0
        },
        simples_modificado: {
          venda: 0,
          ciclo: 0
        },
        milho_variedade2: {
          venda: 0,
          ciclo: 0
        }
      },
      nordeste: {
        super_precoce: {
          venda: 0,
          ciclo: 0
        },
        precoce: {
          venda: 0,
          ciclo: 0
        },
        normal: {
          venda: 0,
          ciclo: 0
        },
        milho_variedade: {
          venda: 0,
          ciclo: 0
        },
        duplo_hibrido: {
          venda: 0,
          ciclo: 0
        },
        triplo_hibrido: {
          venda: 0,
          ciclo: 0
        },
        simples_hibrido: {
          venda: 0,
          ciclo: 0
        },
        simples_modificado: {
          venda: 0,
          ciclo: 0
        },
        milho_variedade2: {
          venda: 0,
          ciclo: 0
        }
      },
      norte: {
        super_precoce: {
          venda: 0,
          ciclo: 0
        },
        precoce: {
          venda: 0,
          ciclo: 0
        },
        normal: {
          venda: 0,
          ciclo: 0
        },
        milho_variedade: {
          venda: 0,
          ciclo: 0
        },
        duplo_hibrido: {
          venda: 0,
          ciclo: 0
        },
        triplo_hibrido: {
          venda: 0,
          ciclo: 0
        },
        simples_hibrido: {
          venda: 0,
          ciclo: 0
        },
        simples_modificado: {
          venda: 0,
          ciclo: 0
        },
        milho_variedade2: {
          venda: 0,
          ciclo: 0
        }
      },
      exportacao: {
        super_precoce: {
          venda: 0,
          ciclo: 0
        },
        precoce: {
          venda: 0,
          ciclo: 0
        },
        normal: {
          venda: 0,
          ciclo: 0
        },
        milho_variedade: {
          venda: 0,
          ciclo: 0
        },
        duplo_hibrido: {
          venda: 0,
          ciclo: 0
        },
        triplo_hibrido: {
          venda: 0,
          ciclo: 0
        },
        simples_hibrido: {
          venda: 0,
          ciclo: 0
        },
        simples_modificado: {
          venda: 0,
          ciclo: 0
        },
        milho_variedade2: {
          venda: 0,
          ciclo: 0
        }
      },
    }

    for (let i = 0; i < this.formData.length; i++ ) {
      const vCultivar = this.formData[i];
      const vEstados = vCultivar.estados;

      for (let ii = 0; ii < vEstados.length; ii++) {
        const estado = vEstados[ii];
        let regiao = '';
        const idEstado = Number(estado.estado);

        if (idEstado === 1 || idEstado === 2 || idEstado === 3 || idEstado === 4) {
          regiao = 'sudeste';
        }

        if (regiao !== '') {
          // cultivar
          const idCultivar = Number(vCultivar.cultivar);
          let txtCultivar = '';

          if (idCultivar === 1 || idCultivar === 5) {
            txtCultivar = 'super_precoce';
          } else if (idCultivar === 2) {
            txtCultivar = 'precoce';
          } else if (idCultivar === 3) {
            txtCultivar = 'normal';
          } else if (idCultivar === 4) {
            txtCultivar = 'milho_variedade';
          }
          if (txtCultivar !== '') {
            totalEstados[regiao][txtCultivar].venda += Number(estado.venda);
            totalEstados[regiao][txtCultivar].ciclo += Number(estado.ciclo);
          }
          // ========

          // nivel
          const idNivel = Number(vCultivar.nivel);
          let txtNivel = '';

          if (idNivel === 1) {
            txtNivel = 'simples_hibrido';
          } else if (idNivel === 2) {
            txtNivel = 'duplo_hibrido';
          } else if (idNivel === 3) {
            txtNivel = 'triplo_hibrido';
          }
          if (txtCultivar !== '') {
            totalEstados[regiao][txtNivel].venda += Number(estado.venda);
            totalEstados[regiao][txtNivel].ciclo += Number(estado.ciclo);
          }
          // =====
        }
      }
    }

    return [{ totalEstados }];
  }
}
