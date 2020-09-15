import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

class XlsImport {
  public estado: string;
  public cultivar: string;
  public venda: number;
  public giro: number;
  public valor: number;
}

@Component({
  selector: 'app-importacao-giro',
  templateUrl: './importacao-giro.component.html',
  styleUrls: ['./importacao-giro.component.scss']
})
export class ImportacaoGiroComponent implements OnInit {
  public pageData: any;
  public fileEvent: any = null;
  public jsonData: any;
  public arrData: XlsImport[] = [];
  public fileName = '';
  public tbCiclo = [];
  public tbCruzamento = [];
  public tbTecnologia = [];
  public tbNivelCultivar = [];
  public tbNivelTecnologia = [];
  public tbMedia = {};

  constructor(router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.pageData = <any>this.route.snapshot.data;
  }

  onFileChange(evt: any) {
    this.fileEvent = evt;
    const target: DataTransfer = <DataTransfer>(evt.target);
    this.fileName = target.files[0].name;
  }

  calcMedia(indice: string) {
    const total = this.tbMedia[indice]?.total ?? 0;
    const qtde  = this.tbMedia[indice]?.qtde ?? 1;

    if (qtde <= 0) {
      return 0;
    } else {
      return total / qtde;
    }
  }

  postForm() {
    const tbCultivar = [
      {tipo: 'A', ciclo: 'super_precoce', cruzamento: 'duplo', tecnologia: 'single_bt'},
      {tipo: 'B', ciclo: 'precoce', cruzamento: 'triplo', tecnologia: 'single_rr'},
      {tipo: 'C', ciclo: 'super_precoce', cruzamento: 'triplo', tecnologia: 'estaqueado'},
      {tipo: 'D', ciclo: 'precoce', cruzamento: 'simples', tecnologia: 'estaqueado'},
      /*{tipo: 'V', ciclo: 'variedade', cruzamento: 'variedade', tecnologia: 'estaqueado'},*/
    ];
    this.tbMedia = {
      A : {
        total: 0,
        qtde: 0
      },
      B : {
        total: 0,
        qtde: 0
      },
      C : {
        total: 0,
        qtde: 0
      },
      /*V : {
        total: 0,
        qtde: 0
      },*/
      D : {
        total: 0,
        qtde: 0
      },
      single_bt: {
        total: 0,
        qtde: 0
      },
      single_rr: {
        total: 0,
        qtde: 0
      },
      estaqueado: {
        total: 0,
        qtde: 0
      }
    };

    if (this.fileEvent === null) {
      alert('Escolha o arquivo XLS.')
    } else {
      const evt = this.fileEvent;
      const target: DataTransfer = <DataTransfer>(evt.target);
      if (target.files.length !== 1) {
        throw new Error('Selecione apenas um arquivo.');
      }

      const reader: FileReader = new FileReader();
      reader.onload = (e: any) => {
        // read workbook
        const bstr: string = e.target.result;
        const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

        // grab first sheet
        const wsname: string = wb.SheetNames[0];
        const ws: XLSX.WorkSheet = wb.Sheets[wsname];

        // save data
        this.jsonData = XLSX.utils.sheet_to_json(ws, { header: 1 });
      };
      reader.onloadend = (e: any) => {
        for (let i = 1; i < this.jsonData.length; i++) {
          const xlsLinha = this.jsonData[i];
          const xlsInfo = new XlsImport();

          xlsInfo.estado   = xlsLinha[0] ?? '';
          xlsInfo.cultivar = xlsLinha[1] ?? '';
          xlsInfo.valor    = xlsLinha[2] ?? '';
          xlsInfo.venda    = xlsLinha[3] ?? '';
          xlsInfo.giro     = xlsLinha[4] ?? '';

          if (xlsInfo.estado !== '' && xlsInfo.cultivar !== '' && xlsInfo.valor >= 0 && (xlsInfo.venda >= 0 || xlsInfo.giro >= 0)) {
            this.arrData.push(xlsInfo);

            // ciclo
            let idxFoundTbCiclo = this.tbCiclo.findIndex(element => element.estado === xlsInfo.estado);
            if (idxFoundTbCiclo < 0) {
              this.tbCiclo.push({
                estado: xlsInfo.estado,
                super_precoce: {
                  venda: 0,
                  giro: 0
                },
                precoce: {
                  venda: 0,
                  giro: 0
                },
                variedade: {
                  venda: 0,
                  giro: 0
                }
              });
              idxFoundTbCiclo = this.tbCiclo.findIndex(element => element.estado === xlsInfo.estado);
            }

            const idxFoundTbCultivar = tbCultivar.findIndex(element => element.tipo === xlsInfo.cultivar);
            const infoTbCultivar     = tbCultivar[idxFoundTbCultivar];

            this.tbCiclo[idxFoundTbCiclo][infoTbCultivar.ciclo].venda += Number(xlsInfo.venda);
            this.tbCiclo[idxFoundTbCiclo][infoTbCultivar.ciclo].giro  += Number(xlsInfo.giro);
            // =====

            // cruzamento
            let idxFoundTbCruzamento = this.tbCruzamento.findIndex(element => element.estado === xlsInfo.estado);
            if (idxFoundTbCruzamento < 0) {
              this.tbCruzamento.push({
                estado: xlsInfo.estado,
                duplo: {
                  venda: 0,
                  giro: 0
                },
                triplo: {
                  venda: 0,
                  giro: 0
                },
                simples: {
                  venda: 0,
                  giro: 0
                }
              });
              idxFoundTbCruzamento = this.tbCruzamento.findIndex(element => element.estado === xlsInfo.estado);
            }

            this.tbCruzamento[idxFoundTbCruzamento][infoTbCultivar.cruzamento].venda += Number(xlsInfo.venda);
            this.tbCruzamento[idxFoundTbCruzamento][infoTbCultivar.cruzamento].giro  += Number(xlsInfo.giro);
            // ==========

            // tecnologia
            let idxFoundTbTecnologia = this.tbTecnologia.findIndex(element => element.estado === xlsInfo.estado);
            if (idxFoundTbTecnologia < 0) {
              this.tbTecnologia.push({
                estado: xlsInfo.estado,
                single_bt: {
                  venda: 0,
                  giro: 0
                },
                single_rr: {
                  venda: 0,
                  giro: 0
                },
                estaqueado: {
                  venda: 0,
                  giro: 0
                }
              });
              idxFoundTbTecnologia = this.tbTecnologia.findIndex(element => element.estado === xlsInfo.estado);
            }

            this.tbTecnologia[idxFoundTbTecnologia][infoTbCultivar.tecnologia].venda += Number(xlsInfo.venda);
            this.tbTecnologia[idxFoundTbTecnologia][infoTbCultivar.tecnologia].giro  += Number(xlsInfo.giro);
            // ==========

            // nivel x cultivar
            let idxFoundTbNivelCult = this.tbNivelCultivar.findIndex(element => element.estado === xlsInfo.estado);
            if (idxFoundTbNivelCult < 0) {
              this.tbNivelCultivar.push({
                estado: xlsInfo.estado,
                nivel_1: {
                  venda: 0,
                  giro: 0
                },
                nivel_2: {
                  venda: 0,
                  giro: 0
                },
                nivel_3: {
                  venda: 0,
                  giro: 0
                }
              });
              idxFoundTbNivelCult = this.tbNivelCultivar.findIndex(element => element.estado === xlsInfo.estado);
            }
            let idxNivel = '';
            if (xlsInfo.valor <= 275) {
              idxNivel = 'nivel_1';
            } else if (xlsInfo.valor <= 350) {
              idxNivel = 'nivel_2';
            } else {
              idxNivel = 'nivel_3';
            }
            this.tbNivelCultivar[idxFoundTbNivelCult][idxNivel].venda += Number(xlsInfo.venda);
            this.tbNivelCultivar[idxFoundTbNivelCult][idxNivel].giro  += Number(xlsInfo.giro);
            // ================

            // nivel x tecnologia
            let idxFoundTbNivelTec = this.tbNivelTecnologia.findIndex(element => element.tecnologia === infoTbCultivar.tecnologia);
            if (idxFoundTbNivelTec < 0) {
              this.tbNivelTecnologia.push({
                tecnologia: infoTbCultivar.tecnologia,
                nivel_1: {
                  venda: 0,
                  giro: 0
                },
                nivel_2: {
                  venda: 0,
                  giro: 0
                },
                nivel_3: {
                  venda: 0,
                  giro: 0
                }
              });
              idxFoundTbNivelTec = this.tbNivelTecnologia.findIndex(element => element.tecnologia === infoTbCultivar.tecnologia);
            }
            if (xlsInfo.valor <= 275) {
              idxNivel = 'nivel_1';
            } else if (xlsInfo.valor <= 350) {
              idxNivel = 'nivel_2';
            } else {
              idxNivel = 'nivel_3';
            }
            this.tbNivelTecnologia[idxFoundTbNivelTec][idxNivel].venda += Number(xlsInfo.venda);
            this.tbNivelTecnologia[idxFoundTbNivelTec][idxNivel].giro  += Number(xlsInfo.giro);
            // ==================

            this.tbMedia[infoTbCultivar.tipo].total += Number(xlsInfo.valor);
            this.tbMedia[infoTbCultivar.tipo].qtde  += Number(1);

            this.tbMedia[infoTbCultivar.tecnologia].total += Number(xlsInfo.valor);
            this.tbMedia[infoTbCultivar.tecnologia].qtde  += Number(1);
          }
        }
      }
      reader.readAsBinaryString(target.files[0]);
    }
  }
}
