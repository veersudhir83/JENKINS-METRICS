$(function () {
    // Create the chart
    $('#container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Build Metrics'
        },
        subtitle: {
            text: 'Click the columns to view count of builds for each environment'
        },
        xAxis: {
            type: 'category',
            title: {
                text: 'Application Name'
            }
        },
        yAxis: {
            title: {
                text: 'No:of Builds'
            }

        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y}'
                }
            }
        },

        tooltip: {
            enabled: true
        },

        series: [{
            name: 'Builds',
            colorByPoint: true,
            data: [{
                name: 'DEVOPS',
                y: 383,
                drilldown: 'DEVOPS'
            }, {
                name: 'TESTSUITE',
                y: 787,
                drilldown: 'TESTSUITE'
            }]
        }],
        drilldown: {
            series: [{
                name: 'DEVOPS',
                id: 'DEVOPS',
                data: [
                    [
                        'DEV',
                        205
                    ]
                ]
            }, {
                name: 'TESTSUITE',
                id: 'TESTSUITE',
                data: [
                    [
                        'STAGE',
                        42
                    ]
                ]
            }]
        }
    });
});
