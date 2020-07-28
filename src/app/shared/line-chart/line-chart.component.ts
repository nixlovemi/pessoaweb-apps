import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  constructor() { }
  // lineChart
    public lineChartData:Array<any> = [
      {data: [3715492, 6987409, 8104601, 7566018, 8012005], label: 'Convencional'},
      {data: [40919846, 44475899, 37269472, 32651154, 31099704], label: 'OGM Estaqueado'},
      {data: [2164256, 4619576, 7189248, 11131758, 15421860], label: 'OGM Single BT'},
      {data: [1543861, 2392967, 2197965, 1684640, 1376309], label: 'OGM Single RR'}
    ];
    public lineChartLabels:Array<any> = ['2020', '2019', '2018', '2017', '2016'];
    public lineChartOptions:any = {
      responsive: true
    };
    public lineChartColors:Array<any> = [
      { // grey
        backgroundColor: 'rgba(255,0,0,0.2)',
        borderColor: 'rgba(255,0,0,1)',
        pointBackgroundColor: 'rgba(255,0,0,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255,0,0,0.8)'
      },
      { // dark grey
        backgroundColor: 'rgba(0,255,0,0.2)',
        borderColor: 'rgba(0,255,0,1)',
        pointBackgroundColor: 'rgba(0,255,0,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(0,255,0,1)'
      },
      { // grey
        backgroundColor: 'rgba(0,0,255,0.2)',
        borderColor: 'rgba(0,0,255,1)',
        pointBackgroundColor: 'rgba(0,0,255,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(0,0,255,0.8)'
      },
      { // grey
        backgroundColor: 'rgba(0,0,0,0.2)',
        borderColor: 'rgba(0,0,0,1)',
        pointBackgroundColor: 'rgba(0,0,0,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(0,0,0,0.8)'
      }
    ];
    public lineChartLegend:boolean = true;
    public lineChartType:string = 'line';

    public randomize():void {
      let _lineChartData:Array<any> = new Array(this.lineChartData.length);
      for (let i = 0; i < this.lineChartData.length; i++) {
        _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
        for (let j = 0; j < this.lineChartData[i].data.length; j++) {
          _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
        }
      }
      this.lineChartData = _lineChartData;
    }

    // events
    public chartClicked(e:any):void {
      console.log(e);
    }

    public chartHovered(e:any):void {
      console.log(e);
    }
  ngOnInit() {}

}
