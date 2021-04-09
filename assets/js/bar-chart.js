/**
 * Bar Chart Block
 * Uses Chart.js library V3
 * Documentation: https://www.chartjs.org/docs/latest/
 */
 window.onload = function() {
    const barChartBlocks= document.querySelectorAll('.wp-block-cgb-block-bar-chart');
    
	barChartBlocks.forEach( function( block ) {
    /**
     * Variables
     */
        //get canvas element
        const barChart =  block.querySelector( '.bar-chart' );
        //get label and values arrays
        const dataLabelsArray = Array.from(barChart.querySelectorAll( '.data-label' )).map(el => { return el.innerHTML });
        const dataValuesArray = Array.from(barChart.querySelectorAll( '.data-value' )).map(el => { return el.innerHTML });
        //get data attributes
        const htmlDataAttributes = block.dataset;
        const dataKey = htmlDataAttributes.key;
        const chartAxis = htmlDataAttributes.axis;
        const barColor = htmlDataAttributes.barcolor;
        const borderColor = htmlDataAttributes.bordercolor;
        const valPrefix = htmlDataAttributes.prefix;
        const valSuffix = htmlDataAttributes.suffix;
    /**
     * Functions
     */
        //Add prefixes & suffixes to tick values
        const addTickAffixes = (value) =>{
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
        }
        //check if chart is horizontal or vertical
        const scales = () => {
            if (chartAxis == 'y') {
                return xScales;
            } else {
                return yScales;
            }
        }
    /**
     * Chart Object Variables
     */
        //scales object for horizontal chart
        const yScales = {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function(value) {
                        return addTickAffixes(value);
                    }//callback
                }//ticks
            }//y
        };//yScales
        //scales object for vertical chart
        const xScales = {
            x: {
                beginAtZero: true,
                ticks: {             
                    callback: function(value) {
                        return addTickAffixes(value);
                    }//callback
                }//ticks
            },//x
        };//xScales
        //opttions object
        const chartOptions = {
                indexAxis: chartAxis,
                scales: scales(),
            };
        //data object
        const chartData = {
            labels: dataLabelsArray,
            datasets: [{
                label: dataKey,
                data: dataValuesArray,
                backgroundColor: barColor,
                borderColor: borderColor,
                borderWidth: 1
            }]
        };
    /**
     * Build a new chart
     */
        const newChart = new Chart(barChart, {
            type: 'bar',
            data: chartData,
            options: chartOptions
        });//newChart
	} );//barCharts.forEach
};//window onload