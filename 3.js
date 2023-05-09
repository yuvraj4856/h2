 // Define the data for your chart
 var data = [
    { year: 2019, runs: 500 },
    { year: 2020, runs: 750 },
    { year: 2021, runs: 1000 }
  ];

  // Define the options for your chart
  var options = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Runs Scored in a Year'
    },
    xAxis: {
      categories: data.map(function(item) { return item.year; })
    },
    yAxis: {
      title: {
        text: 'Runs'
      }
    },
    series: [{
      name: 'Runs',
      data: data.map(function(item) { return item.runs; })
    }]
  };

  // Create the chart
  var chart = Highcharts.chart('chart-container', options);