


/**
 * Bar Chart Block
 * Chart.js documentation: https://www.chartjs.org/docs/latest/
 */

 window.onload = function() {

	const barCharts = document.querySelectorAll( '.wp-block-cgb-block-bar-chart .bar-chart' );

	barCharts.forEach( function( barChart) {
        const dataLabels = barChart.querySelectorAll( '.data-label' );
        const dataNumber = barChart.querySelectorAll( '.data-number' );
        // console.log('dataLabels');
        // console.info(dataLabels);
        // console.log('dataNumber');
        // console.info(dataNumber);

        dataLabels.forEach( function( label, i ) {
            console.log('label');
            console.info(label.innerHTML);
        });

        // var ctx = barChart;
        // // var options;
        // // var data;
        // var newChart = new Chart(ctx, {
        //     type: 'bar',
        //     data: {
        //         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        //         datasets: [{
        //             label: '# of Votes',
        //             data: [12, 19, 3, 5, 2, 3],
        //             backgroundColor: [
        //                 'rgba(255, 99, 132, 0.2)',
        //                 'rgba(54, 162, 235, 0.2)',
        //                 'rgba(255, 206, 86, 0.2)',
        //                 'rgba(75, 192, 192, 0.2)',
        //                 'rgba(153, 102, 255, 0.2)',
        //                 'rgba(255, 159, 64, 0.2)'
        //             ],
        //             borderColor: [
        //                 'rgba(255, 99, 132, 1)',
        //                 'rgba(54, 162, 235, 1)',
        //                 'rgba(255, 206, 86, 1)',
        //                 'rgba(75, 192, 192, 1)',
        //                 'rgba(153, 102, 255, 1)',
        //                 'rgba(255, 159, 64, 1)'
        //             ],
        //             borderWidth: 1
        //         }]
        //     },
        //     options: {
        //         indexAxis: 'x',
        //         scales: {
        //             y: {
        //                 beginAtZero: true
        //             }
        //         }
        //     }
        // });//newChart

	} );//barCharts.forEach
};//window onload