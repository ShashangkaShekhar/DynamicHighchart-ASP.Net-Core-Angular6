"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var service_1 = require("./service");
var angular_highcharts_1 = require("angular-highcharts");
var ChartComponent = /** @class */ (function () {
    function ChartComponent(resService) {
        this.resService = resService;
        this.title = '';
    }
    ChartComponent.prototype.ngOnInit = function () {
        this.getChart();
    };
    //Get All User
    ChartComponent.prototype.getChart = function () {
        var _this = this;
        //debugger
        this.resService.getall().subscribe(function (response) {
            _this.marks = response;
            var chartData = [];
            for (var i = 0; i < _this.marks.length; i++) {
                chartData.push({
                    "name": _this.marks[i].mName,
                    "y": _this.marks[i].mMark,
                    sliced: true,
                    selected: true
                });
            }
            _this.chart = new angular_highcharts_1.Chart({
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
        }, function (error) {
            console.log(error);
        });
    };
    ChartComponent = __decorate([
        core_1.Component({
            selector: 'chart',
            templateUrl: './app/component/chart/chart.html',
            providers: [service_1.ResultService]
        }),
        __metadata("design:paramtypes", [service_1.ResultService])
    ], ChartComponent);
    return ChartComponent;
}());
exports.ChartComponent = ChartComponent;
//# sourceMappingURL=component.js.map