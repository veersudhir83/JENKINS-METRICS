$(function () {
    // Create the chart
    $('#container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'PLM Build Metrics'
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
                name: 'AEROPLM',
                y: 383,
                drilldown: 'AEROPLM'
            }, {
                name: 'ENERGYPLM',
                y: 787,
                drilldown: 'ENERGYPLM'
            }, {
                name: 'GasEngines',
                y: 72,
                drilldown: 'GasEngines'
            }, {
                name: 'NuclearPLM',
                y: 231,
                drilldown: 'NuclearPLM'
            }, {
                name: 'PGSLM',
                y: 77,
                drilldown: 'PGSLM'
            }, {
                name: 'POWERPLM',
                y: 578,
                drilldown: 'POWERPLM'
            }, {
                name: 'WINDPLM',
                y: 1962,
                drilldown: 'WINDPLM'
            }]
        }],
        drilldown: {
            series: [{
                name: 'AEROPLM',
                id: 'AEROPLM',
                data: [
                    [
                        'DEV',
                        205
                    ],
                    [
                        'DEV2',
                        63
                    ],
                    [
                        'QA',
                        102
                    ],
                    [
                        'QA2',
                        6
                    ],
                    [
                        'PROD',
                        7
                    ]
                ]
            }, {
                name: 'ENERGYPLM',
                id: 'ENERGYPLM',
                data: [
                    [
                        'DEV1',
                        42
                    ],
                    [
                        'DEV2',
                        44
                    ],
                    [
                        'QA1',
                        527
                    ],
                    [
                        'QA2',
                        169
                    ],
                    [
                        'BF',
                        2
                    ],
                    [
                        'PROD',
                        3
                    ]
                ]
            }, {
                name: 'GasEngines',
                id: 'GasEngines',
                data: [
                    [
                        'DEV1',
                        72
                    ]
                ]
            }, {
                name: 'NuclearPLM',
                id: 'NuclearPLM',
                data: [
                    [
                        'DEV',
                        72
                    ],
                    [
                        'DEV16',
                        18
                    ],
                    [
                        'QA',
                        128
                    ],
                    [
                        'PROD',
                        13
                    ]
                ]
            }, {
                name: 'PGSLM',
                id: 'PGSLM',
                data: [
                    [
                        'QA',
                        15
                    ],
                    [
                        'QA2',
                        48
                    ],
                    [
                        'PROD',
                        14
                    ]
                ]
            }, {
                name: 'POWERPLM',
                id: 'POWERPLM',
                data: [
                    [
                        'BF',
                        26
                    ],
                    [
                        'DEV1',
                        86
                    ],
                    [
                        'DEV2',
                        208
                    ],
                    [
                        'DEV3',
                        35
                    ],
                    [
                        'QA1',
                        54
                    ],
                    [
                        'QA2',
                        160
                    ],
                    [
                        'PROD',
                        9
                    ]
                ]
            }, {
                name: 'WINDPLM',
                id: 'WINDPLM',
                data: [
                    [
                        'DEV',
                        405
                    ],
                    [
                        'NEWDEV2',
                        39
                    ],
                    [
                        'DEV3',
                        145
                    ],
                    [
                        'DEV4',
                        146
                    ],
                    [
                        'DEV5',
                        423
                    ],
                    [
                        'QA',
                        217
                    ],
                    [
                        'QA2',
                        335
                    ],
                    [
                        'QA3',
                        244
                    ],
                    [
                        'PROD',
                        8
                    ]
                ]
            }]
        }
    });
});
