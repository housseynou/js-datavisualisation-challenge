var dataPoints = [];
$.getJSON("https://canvasjs.com/services/data/datapoints.php?xstart=1&ystart=10&length=10&type=json", function(data){
    $.each(data, function(key, value) {
        dataPoints.push({x: value[0], y: parseInt(value[1])});
        console.log(dataPoints)

    });
    chart = new Chart("myChart1", {
        type: "line",
        data: {
            
            datasets: [{
                label: 'Crime statistique',
                backgroundColor: 'rgba(0, 0, 0, 0)',
                borderColor: 'rgb(255, 100, 50)',
                data: dataPoints
            },
            {   backgroundColor: 'rgba(0, 0, 0, 0)',
                borderColor: 'rgb(5, 100, 50)',
                data: dataPoints
            },
            {
                backgroundColor: 'rgba(0, 0, 0, 0)',
                borderColor: 'rgb(55, 100, 50)',
                data: dataPoints
            }
        ]
        },
        options: {}
    });
    chart.update();
});


//function updateChart(){
 //   $.getJESON("https://canvasjs.com/services/data/datapoints.php", function(data){
 //       $.each(data, function(key, value){
 //           dataPoints.push({
 /*               x: parseInt(value[0]),
                y: parseInt(value[1])
            });
        });
        chart.render();
        setTimeout(function(){updateChart()}, 1000);
    });
}*/
