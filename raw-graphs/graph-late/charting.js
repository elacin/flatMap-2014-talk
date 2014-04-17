$(function () {
    //def tranformForTrendline(seriesArray: Array[Array[Int]]): Array[Int]
    function tranformForTrendline(seriesArray){
        var ret = [];
        for (var date = 0; date < seriesArray[0].data.length; date++) {
            var sumForDate = 0;
            for (var j = 0; j < seriesArray.length; j++) {
                sumForDate += seriesArray[j].data[date];
            }
            ret.push(sumForDate);
        }
        return ret;
    }

    $('#container').highcharts({
        chart: {
            type: 'area'
        },
        title: {
            text: 'SLOC over time'
        },
        subtitle: {
            text: 'Penger.no'
        },
        xAxis: {
            categories: generatedCategories,
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            },
            labels: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: 'SLOC'
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ' SLOC'
        },
        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            }
        },
        series:
            generatedSeries.concat(
            [{
                name: "trend",
                type: 'line',
                marker: { enabled: false },
                /* function returns data for trend-line */
                data: fitData(tranformForTrendline(generatedSeries), 'linear').data
            }]
            )

    });
});

