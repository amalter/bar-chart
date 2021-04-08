


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
        //data attributes
        const htmlDataAttributes = block.dataset;
        const chartAxis = htmlDataAttributes.axis;
        const barColor = htmlDataAttributes.barcolor;
        const borderColor = htmlDataAttributes.bordercolor;
        console.log(borderColor);
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
                    data: dataValuesArray,
                    backgroundColor: barColor,
                    borderColor: borderColor,
                    borderWidth: 1
                }]
            };
        var newChart = new Chart(ctx, {
            type: 'bar',
            data: chartData,
            options: chartOptions
        });//newChart

	} );//barCharts.forEach
};//window onload