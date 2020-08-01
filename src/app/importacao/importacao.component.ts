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
  public arrData: XlsImport[];
  public fileName: string = '';
  public arrCiclo: any[][][];

  constructor(router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.pageData = <any>this.route.snapshot.data;
    console.log(this.pageData.title)
  }

  onFileChange(evt: any) {
    this.fileEvent = evt;
    const target: DataTransfer = <DataTransfer>(evt.target);
    this.fileName = target.files[0].name;
  }

  postForm() {
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
        this.arrData = [];
        this.arrCiclo = [];
        
        this.arrCiclo['A'] = [];
        this.arrCiclo['B'] = [];
        this.arrCiclo['Variedade'] = [];

        this.arrCiclo['A']['Venda'] = 0;
        this.arrCiclo['B']['Venda'] = 0;
        this.arrCiclo['Variedade']['Venda'] = 0;
        this.arrCiclo['A']['Giro'] = 0;
        this.arrCiclo['B']['Giro'] = 0;
        this.arrCiclo['Variedade']['Giro'] = 0;



        for (let i = 1; i < this.jsonData.length; i++) {
          const xlsLinha = this.jsonData[i];
          const xlsInfo = new XlsImport();

          xlsInfo.estado = xlsLinha[0] ?? '';
          xlsInfo.cultivar = xlsLinha[1] ?? '';
          xlsInfo.valor = xlsLinha[2] ?? '';
          xlsInfo.venda = xlsLinha[3] ?? '';
          xlsInfo.devolucao = xlsLinha[4] ?? '';
          

          /*if(xlsLinha[1]=="A"){
            if (ciclo['A'][xlsLinha[0]]['Venda'].length){
              console.log("maior");
            }else{
              console.log("menor");
            }
            
            ciclo['A'][xlsLinha[0]]['Venda'] = xlsLinha[3];
            ciclo['A']['Total']['Venda']  = xlsLinha[3];
            ciclo['A'][xlsLinha[0]]['Giro'] = xlsLinha[3];
            ciclo['A']['Total']['Giro']  = xlsLinha[3];
            ciclo['A']['Total']['Giro']  = xlsLinha[4];
          }else{
            ciclo['B'][xlsLinha[0]]['Venda']  = xlsLinha[3];
            ciclo['B']['Total']['Venda']  = xlsLinha[3];
            ciclo['B'][xlsLinha[0]]['Giro']  = xlsLinha[3];
            ciclo['B']['Total']['Giro']  = xlsLinha[3];
            ciclo['B']['Total']['Giro']  = xlsLinha[4];
          }*/

          this.arrData.push(xlsInfo);
        }
        console.log(this.arrCiclo);
      }
      reader.readAsBinaryString(target.files[0]);
    }
  }
}
