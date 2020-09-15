import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // line chart options
  public lineChartData: Array<any> = [
      {data: [471.90, 492.23, 493.70, 483.62, 485.55, 487.76], label: 'Estaqueado', fill: false},
      {data: [450.16, 464.39, 459.47, 450.13, 452.04, 454.21], label: 'Mercado', fill: false},
      {data: [337.04, 421.55, 408.53, 377.21, 381.44, 381.30], label: 'Single BT', fill: false},
      {data: [340.39, 362.37, 358.75, 317.68, 334.10, 327.48], label: 'Single RR', fill: false},
      {data: [290.82, 274.13, 256.06, 268.63, 261.86, 261.22], label: 'Convencional', fill: false}
  ];
  public lineChartLabels: Array<any> = ['Jun-19', 'Jul-19', 'Ago-19', 'Set-19', 'Out-19', 'Nov-19'];
  public lineChartOptions: any = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
        }
      }]
    },
  };
  public lineChartColors: Array<any> = [
    {
      backgroundColor: 'rgba(233,75,60,0.2)',
      borderColor: 'rgba(233,75,60,1)',
      pointBackgroundColor: 'rgba(233,75,60,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(233,75,60,0.8)'
    },
    {
      backgroundColor: 'rgba(166,233,60,0.2)',
      borderColor: 'rgba(166,233,60,1)',
      pointBackgroundColor: 'rgba(166,233,60,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(166,233,60,1)'
    },
    {
      backgroundColor: 'rgba(60,85,233,0.2)',
      borderColor: 'rgba(60,85,233,1)',
      pointBackgroundColor: 'rgba(60,85,233,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(60,85,233,0.8)'
    },
    {
      backgroundColor: 'rgba(211,60,233,0.2)',
      borderColor: 'rgba(211,60,233,1)',
      pointBackgroundColor: 'rgba(211,60,233,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(211,60,233,0.8)'
    }
    ,
    {
      backgroundColor: 'rgba(233,182,60,0.2)',
      borderColor: 'rgba(233,182,60,1)',
      pointBackgroundColor: 'rgba(233,182,60,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(233,182,60,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  // ==================

  // bar chart options
  public barChartData: Array<any> = [
      { data: [8.4, 11.2, 56.1, 30.6], label: 'Convencional', stack: 'a' },
      { data: [1.1, 3.9, 1.7, 18.8], label: 'Single RR', stack: 'a' },
      { data: [28.6, 31.3, 0.6, 5.0], label: 'BT Puro', stack: 'a' },
      { data: [61.9, 53.5, 41.7, 45.6], label: 'BT RR', stack: 'a' },
  ];
  public barChartLabels: Array<any> = ['São Paulo', 'Minas Gerais', 'Rio de Janeiro', 'Espírito Santo'];
  public barChartOptions: any = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          max: 100,
        }
      }]
    },
    /*hover: {
      animationDuration: 0
    },
    animation: {
      duration: 1,
      onComplete: function() {
        const chartInstance = this.chart,
        ctx = chartInstance.ctx;

        // tslint:disable-next-line: max-line-length
        ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
        ctx.textAlign = 'center';
        ctx.textBaseline = 'bottom';

        this.data.datasets.forEach(function(dataset, i) {
          const meta = chartInstance.controller.getDatasetMeta(i);
          meta.data.forEach(function(bar, index) {
            const data = dataset.data[index];
            ctx.fillText(data, bar._model.x, bar._model.y);
          });
        });
      }
    },
    legend: {
      display: true
    },
    tooltips: {
      enabled: false
    },
    scales: {
      yAxes: [{
        display: true,
        gridLines: {
          display: true
        },
        ticks: {
          max: Math.max(...this.barChartData[0].data) + 10,
          display: true,
          beginAtZero: true
        }
      }],
      xAxes: [{
        gridLines: {
          display: true
        },
        ticks: {
          beginAtZero: true
        }
      }]
    }*/
  };
  public barChartColors: Array<any> = [
    {
      backgroundColor: 'rgba(233,75,60,0.5)',
      borderColor: 'rgba(233,75,60,1)',
      pointBackgroundColor: 'rgba(233,75,60,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(233,75,60,0.8)'
    },
    {
      backgroundColor: 'rgba(166,233,60,0.5)',
      borderColor: 'rgba(166,233,60,1)',
      pointBackgroundColor: 'rgba(166,233,60,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(166,233,60,1)'
    },
    {
      backgroundColor: 'rgba(60,85,233,0.5)',
      borderColor: 'rgba(60,85,233,1)',
      pointBackgroundColor: 'rgba(60,85,233,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(60,85,233,0.8)'
    },
    {
      backgroundColor: 'rgba(211,60,233,0.5)',
      borderColor: 'rgba(211,60,233,1)',
      pointBackgroundColor: 'rgba(211,60,233,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(211,60,233,0.8)'
    }
    ,
  ];
  public barChartLegend = true;
  public barChartType = 'bar';
  // =================

  // pie chart options
  public pieChartData: Array<any> = [
      // tslint:disable-next-line: max-line-length
      {data: [18.7, 38.2, 6.8, 9.8, 0.4, 0.1, 12.8, 0.7, 1.1, 0.2, 0.8, 2.5, 2.1, 5.8], backgroundColor: ['rgba(233,75,60,0.5)', 'rgba(166,233,60,0.5)', 'rgba(60,85,233,0.5)', 'rgba(211,60,233,0.5)', 'rgba(239,197,148,0.5)', 'rgba(11,112,0,0.5)', 'rgba(0,245,224,0.5)', 'rgba(168,69,142,0.5)', 'rgba(93,70,105,0.5)', 'rgba(77,24,24,0.5)', 'rgba(245,208,208,0.5)', 'rgba(247,206,0,0.5)', 'rgba(130,130,130,0.5)', 'rgba(0,7,89,0.5)'], label: 'Inverno 2020 São Paulo'}
  ];
  // tslint:disable-next-line: max-line-length
  public pieChartLabels: Array<any> = ['VT Pro 3', 'PowerCore Ultra', 'Power Core', 'VT Pro 2', 'Intrasect RR', 'Intrasect', 'Vip 3', 'Herculex', 'VT Pro', 'Viptera', 'RR2', 'Convencional', 'Leptra RR', 'Leptra'];
  public pieChartOptions: any = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          max: 100,
        }
      }]
    },
  };
  public pieChartLegend = false;
  public pieChartType = 'pie';
  // =================

  // bar 2 chart options
  public bar2ChartData: Array<any> = [
      { data: [3], label: 'Convencional', stack: 'a' },
      { data: [1], label: 'Single RR', stack: 'a' },
      { data: [27], label: 'BT Puro', stack: 'a' },
      { data: [69], label: 'BT RR', stack: 'a' },
  ];
  public bar2ChartLabels: Array<any> = ['Inverno 2020 São Paulo'];
  public bar2ChartOptions: any = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          max: 100,
        }
      }]
    },
  };
  public bar2ChartColors: Array<any> = [
    {
      backgroundColor: 'rgba(233,75,60,0.5)',
      borderColor: 'rgba(233,75,60,1)',
      pointBackgroundColor: 'rgba(233,75,60,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(233,75,60,0.8)'
    },
    {
      backgroundColor: 'rgba(166,233,60,0.5)',
      borderColor: 'rgba(166,233,60,1)',
      pointBackgroundColor: 'rgba(166,233,60,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(166,233,60,1)'
    },
    {
      backgroundColor: 'rgba(60,85,233,0.5)',
      borderColor: 'rgba(60,85,233,1)',
      pointBackgroundColor: 'rgba(60,85,233,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(60,85,233,0.8)'
    },
    {
      backgroundColor: 'rgba(211,60,233,0.5)',
      borderColor: 'rgba(211,60,233,1)',
      pointBackgroundColor: 'rgba(211,60,233,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(211,60,233,0.8)'
    }
    ,
  ];
  public bar2ChartLegend = true;
  public bar2ChartType = 'bar';
  // ===================

  // bar 3 chart options
  public bar3ChartData: Array<any> = [
      // tslint:disable-next-line: max-line-length
      { data: [1300000, 2100000, 8800000, 800000, 600000, 300000, 13850000], label: 'Inverno 19', /*backgroundColor: 'green', borderColor: 'green', borderWidth: 1*/},
      // tslint:disable-next-line: max-line-length
      { data: [1650000, 2300000, 9850000, 900000, 400000, 350000, 15800000], label: 'Inverno 20', /*backgroundColor: 'gray', borderColor: 'gray', borderWidth: 1*/},
  ];
  public bar3ChartLabels: Array<any> = ['Sudeste', 'Sul', 'Centro Oeste', 'Nordeste', 'Norte', 'Exportação', 'Total'];
  public bar3ChartOptions: any = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          max: 100,
        }
      }]
    },
  };
  public bar3ChartColors: Array<any> = [
    {
      backgroundColor: 'rgba(233,75,60,0.5)',
      borderColor: 'rgba(233,75,60,1)',
      pointBackgroundColor: 'rgba(233,75,60,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(233,75,60,0.8)'
    },
    {
      backgroundColor: 'rgba(166,233,60,0.5)',
      borderColor: 'rgba(166,233,60,1)',
      pointBackgroundColor: 'rgba(166,233,60,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(166,233,60,1)'
    },
  ];
  public bar3ChartLegend = true;
  public bar3ChartType = 'horizontalBar';
  // ===================

  constructor() { }

  ngOnInit() {
  }

}
