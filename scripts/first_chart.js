// code for a basic bar chart
// see https://www.highcharts.com/demo/bar-basic

Highcharts.chart('container', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Apples', 'Bananas', 'Oranges', 'Kiwi']
    },
    yAxis: {
      title: {
        text: 'Items of fruit that were eaten last week in Riley and Huey\'s house'
      }
    },
    series: [{
      name: 'Riley',
      data: [1, 0, 4, 6]
    }, {
      name: 'Huey',
      data: [5, 7, 3, 6]
    }]
  });
