Highcharts.chart('Chart1', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Crimes Reported on the Univeristy of Florida Gainesville Campus'
    },
    subtitle: {
        text: 'Source: University of Florida 2019 Annual Security & Fire Safety Report  <a https://police.ufl.edu/media/policeufledu/documents/reports/2019-Gainesville-ASFSR-Final.pdf</a>'
    },
    xAxis: {
        categories: [
            '2016', '2017', '2018'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number of Crimes Reported'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:1f} </b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Murder',
        data: [0, 0, 0]

    }, {
        name: 'Manslaughter',
        data: [0, 0, 0]

    }, {
        name: 'Rape',
        data: [20, 17, 16]

    },{
        name: 'Fondling',
        data: [3, 2, 5]

    },{
        name: 'Incest',
        data: [0, 0, 0]

    },{
        name: 'Statutory Rape',
        data: [0, 0, 0]

    },{
        name: 'Robbery',
        data: [2, 3, 2]

    },{
        name: 'Aggravated Assault',
        data: [6, 7, 14]

    },{
        name: 'Burglary',
        data: [22, 18, 29]

    },{
        name: 'Motor Vehicle Theft',
        data: [23, 21, 26]

    }, {
        name: 'Arson',
        data: [0, 0, 0]

    }]
});

Highcharts.chart('Chart2', {

    title: {
        text: 'Number of Reported Rapes in Alachua County 2009-2019'
    },

    subtitle: {
        text: 'Source: Florida Department of Law Enforcemet Annual Crime Report'
    },

    yAxis: {
        title: {
            text: 'Number of Reported Rapes in Alachua County'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2009
        }
    },

    series: [{
        name: 'Rape',
        data: [191, 154, 156, 168, 114, 164, 183, 216, 249, 285
]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});
