import { Component } from '@angular/core';
import { ResultModel } from './model';
import { ResultService } from './service';
import { Chart } from 'angular-highcharts';

@Component({
    selector: 'chart',
    templateUrl: './app/component/chart/chart.html',
    providers: [ResultService]
})

export class ChartComponent {
    public marks: ResultModel[];
    public chart: Chart;

    title: string;
    constructor(private resService: ResultService) {
        this.title = ''
    }

    ngOnInit() {
        this.getChart();
    }

    //Get All 
    getChart() {

        //debugger
        this.resService.getall().subscribe(
            response => {
                this.marks = response;
                let chartData = [];
                for (var i = 0; i < this.marks.length; i++) {
                    chartData.push({
                        "name": this.marks[i].mName,
                        "y": this.marks[i].mMark,
                        sliced: true,
                        selected: true
                    })
                }

                this.chart = new Chart({
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: null,
                        plotShadow: false,
                        type: 'pie',
                        backgroundColor: null,
                        options3d: {
                            enabled: true,
                            alpha: 45,
                            beta: 0
                        }
                    },
                    title: {
                        text: 'Angular-6 + Highcharts-6',
                    },
                    subtitle: {
                        text: 'Result Pie-Chart!'
                    },
                    tooltip: {
                        pointFormat: '{series.name}: <b>{point.y}</b>'
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            depth: 35,
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                            }
                        }
                    },
                    series: [{
                        name: 'Total Mark',
                        data: chartData
                    }]
                });

            }, error => {
                console.log(error);
            }
        );
    }
}
