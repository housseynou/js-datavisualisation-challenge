var dataPoints = [];
$.getJSON("https://canvasjs.com/services/data/datapoints.php?xstart=1&ystart=10&length=10&type=json", function(data){
    $.each(data, function(key, value) {
        dataPoints.push({x: value[0], y: parseInt(value[1])});


    });
    chart = new Chart("myChart1", {
        type: "line",
        data: {
            labels: dataPoints,
            datasets: [{
                label: 'Crime statistique',
                backgroundColor: 'rgba(0, 0, 0, 0)',
                borderColor: 'rgb(255, 100, 50)',
                data: dataPoints
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
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
const country = [];
$.getJSON('assets/chart.json', function(data){
    $.each(data, function(key, value){
        country.push(key[0]);
        console.log(country);
    });
    var ctx3 = document.getElementById('chart3').getContext('2d');
    var mychart3 = new Chart(ctx3, {
        type: 'bar',
    })
})