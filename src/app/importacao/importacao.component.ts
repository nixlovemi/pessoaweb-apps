import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

class XlsImport {
  public estado: string;
  public cultivar: string;
  public nivel: string;
  public venda: number;
  public ciclo: number;
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
        throw new Error('Cannot use multiple files');
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

        for (let i = 1; i < this.jsonData.length; i++) {
          const xlsLinha = this.jsonData[i];
          const xlsInfo = new XlsImport();

          xlsInfo.estado = xlsLinha[0] ?? '';
          xlsInfo.cultivar = xlsLinha[1] ?? '';
          xlsInfo.nivel = xlsLinha[2] ?? '';
          xlsInfo.venda = xlsLinha[3] ?? '';
          xlsInfo.ciclo = xlsLinha[4] ?? '';

          this.arrData.push(xlsInfo);
        }
      }
      reader.readAsBinaryString(target.files[0]);
    }
  }
}
