


/**
 * Bar Chart Block
 * Chart.js documentation: https://www.chartjs.org/docs/latest/
 */

 window.onload = function() {
    const barChartBlocks= document.querySelectorAll('.wp-block-cgb-block-bar-chart');
    
	barChartBlocks.forEach( function( block ) {
        //get canvas element
        let barChart =  block.querySelector( '.bar-chart' );
        //get label and values arrays
        let dataLabelsArray = Array.from(barChart.querySelectorAll( '.data-label' )).map(el => { return el.innerHTML });
        let dataValuesArray = Array.from(barChart.querySelectorAll( '.data-value' )).map(el => { return el.innerHTML });
        const chartAxis = block.dataset.axis;
        console.log(chartAxis);
        var ctx = barChart;
        var chartOptions = {
                indexAxis: chartAxis,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            };
         var chartData = {
                labels: dataLabelsArray,
                datasets: [{
                    label: '# of Votes',
                    data: dataValuesArray
                }]
            };
        var newChart = new Chart(ctx, {
            type: 'bar',
            data: chartData,
            options: chartOptions
        });//newChart

	} );//barCharts.forEach
};//window onload