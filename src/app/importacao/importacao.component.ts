import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

class XlsImport {
  public estado: string;
  public cultivar: string;
  public venda: number;
  public devolucao: number;
  public valor: number;
}

@Component({
  selector: 'app-importacao',
  templateUrl: './importacao.component.html',
  styleUrls: ['./importacao.component.scss']
})
export class ImportacaoComponent implements OnInit {
  public pageData: any;
  public fileEvent: any = null;
  public jsonData: any;
  public arrData: XlsImport[] = [];
  public fileName: string = '';
  public tbCiclo = [];
  public tbCruzamento = [];
  public tbTecnologia = [];

  constructor(router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.pageData = <any>this.route.snapshot.data;
  }

  onFileChange(evt: any) {
    this.fileEvent = evt;
    const target: DataTransfer = <DataTransfer>(evt.target);
    this.fileName = target.files[0].name;
  }

  postForm() {
    const tbCultivar = [
      {tipo: "A", ciclo: "super_precoce", cruzamento: "duplo", tecnologia: "single_bt"},
      {tipo: "B", ciclo: "precoce", cruzamento: "triplo", tecnologia: "single_rr"},
      {tipo: "C", ciclo: "super_precoce", cruzamento: "triplo", tecnologia: "estaqueado"},
      {tipo: "V", ciclo: "variedade", cruzamento: "variedade", tecnologia: "estaqueado"},
    ];

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

          xlsInfo.estado    = xlsLinha[0] ?? '';
          xlsInfo.cultivar  = xlsLinha[1] ?? '';
          xlsInfo.valor     = xlsLinha[2] ?? '';
          xlsInfo.venda     = xlsLinha[3] ?? '';
          xlsInfo.devolucao = xlsLinha[4] ?? '';

          this.arrData.push(xlsInfo);

          // ciclo
          let idxFoundTbCiclo = this.tbCiclo.findIndex(element => element.estado == xlsInfo.estado);
          if(idxFoundTbCiclo < 0) {
            this.tbCiclo.push({
              estado: xlsInfo.estado,
              super_precoce: {
                venda: 0,
                devolucao: 0
              },
              precoce: {
                venda: 0,
                devolucao: 0
              },
              variedade: {
                venda: 0,
                devolucao: 0
              }
            });
            idxFoundTbCiclo = this.tbCiclo.findIndex(element => element.estado == xlsInfo.estado);
          }

          const idxFoundTbCultivar = tbCultivar.findIndex(element => element.tipo == xlsInfo.cultivar);
          const infoTbCultivar     = tbCultivar[idxFoundTbCultivar];
          
          this.tbCiclo[idxFoundTbCiclo][infoTbCultivar.ciclo].venda += Number(xlsInfo.venda);
          this.tbCiclo[idxFoundTbCiclo][infoTbCultivar.ciclo].devolucao += Number(xlsInfo.devolucao);
          // =====

          // cruzamento
          let idxFoundTbCruzamento = this.tbCruzamento.findIndex(element => element.estado == xlsInfo.estado);
          if(idxFoundTbCruzamento < 0) {
            this.tbCruzamento.push({
              estado: xlsInfo.estado,
              duplo: {
                venda: 0,
                devolucao: 0
              },
              triplo: {
                venda: 0,
                devolucao: 0
              },
              variedade: {
                venda: 0,
                devolucao: 0
              }
            });
            idxFoundTbCruzamento = this.tbCruzamento.findIndex(element => element.estado == xlsInfo.estado);
          }

          this.tbCruzamento[idxFoundTbCruzamento][infoTbCultivar.cruzamento].venda += Number(xlsInfo.venda);
          this.tbCruzamento[idxFoundTbCruzamento][infoTbCultivar.cruzamento].devolucao += Number(xlsInfo.devolucao);
          // ==========

          // tecnologia
          let idxFoundTbTecnologia = this.tbTecnologia.findIndex(element => element.estado == xlsInfo.estado);
          if(idxFoundTbTecnologia < 0) {
            this.tbTecnologia.push({
              estado: xlsInfo.estado,
              single_bt: {
                venda: 0,
                devolucao: 0
              },
              single_rr: {
                venda: 0,
                devolucao: 0
              },
              estaqueado: {
                venda: 0,
                devolucao: 0
              }
            });
            idxFoundTbTecnologia = this.tbTecnologia.findIndex(element => element.estado == xlsInfo.estado);
          }

          this.tbTecnologia[idxFoundTbTecnologia][infoTbCultivar.tecnologia].venda += Number(xlsInfo.venda);
          this.tbTecnologia[idxFoundTbTecnologia][infoTbCultivar.tecnologia].devolucao += Number(xlsInfo.devolucao);
          // ==========
        }
      }
      reader.readAsBinaryString(target.files[0]);
    }
  }
}
