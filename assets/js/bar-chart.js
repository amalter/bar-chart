


/**
 * Bar Chart Block
 * Chart.js documentation: https://www.chartjs.org/docs/latest/
 */

 window.onload = function() {
    const barChartBlocks= document.querySelectorAll('.wp-block-cgb-block-bar-chart');
    
	barChartBlocks.forEach( function( block ) {
        //get canvas element
        const barChart =  block.querySelector( '.bar-chart' );
        //get label and values arrays
        const dataLabelsArray = Array.from(barChart.querySelectorAll( '.data-label' )).map(el => { return el.innerHTML });
        const dataValuesArray = Array.from(barChart.querySelectorAll( '.data-value' )).map(el => { return el.innerHTML });
        //data attributes
        const htmlDataAttributes = block.dataset;
        const dataLabel = htmlDataAttributes.label;
        const chartAxis = htmlDataAttributes.axis;
        const barColor = htmlDataAttributes.barcolor;
        const borderColor = htmlDataAttributes.bordercolor;
        const valPrefix = htmlDataAttributes.prefix;
        const valSuffix = htmlDataAttributes.suffix;
        //console.log(borderColor);
        var ctx = barChart;
        var addTickAffixes = (value) =>{
            
        }
        var yScales = {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function(value) {
                        if (valPrefix && valSuffix) {
                            return valPrefix + value + valSuffix;
                        } else if (valPrefix) {
                            return valPrefix + value;
                        } else if (valSuffix){
                            return value + valSuffix;
                        }
                        else {
                            return value;
                        }
                    }//callback
                }//ticks
            }//y
        };//yScales
        var xScales = {
            x: {
                beginAtZero: true,
                ticks: {             
                    callback: function(value) {
                        if (valPrefix && valSuffix) {
                            return valPrefix + value + valSuffix;
                        } else if (valPrefix) {
                            return valPrefix + value;
                        } else if (valSuffix){
                            return value + valSuffix;
                        }
                        else {
                            return value;
                        }
                    }//callback
                }//ticks
            },//x
        };//xScales

        var scales = () => {
            if (chartAxis == 'y') {
                return xScales;
            } else {
                return yScales;
            }
        }

        var chartOptions = {
                indexAxis: chartAxis,
                scales: scales(),
            };
         var chartData = {
                labels: dataLabelsArray,
                datasets: [{
                    label: dataLabel,
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