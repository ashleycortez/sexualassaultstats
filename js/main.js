
var stats;

window.addEventListener('onload',init());
var newthing = [];
//$.getJSON("data/data.JSON");
$.getJSON("data/data.JSON").done(function(response){
   
        //console.log(response[0].statistics.radarchart.values[0]);
    var test = response[0].statistics.radarchart.values;
    
    for (i =0;i<test.length;i++){
        newthing.push(test[i]);
        
    }
    console.log(newthing);
    
    
});


function init() {
	setChartDefaults();
    buildRadarChart();
    buildBarChart();
    buildDoughnutChart();
}


function setChartDefaults() {
    Chart.defaults.global.scaleLineColor = "rgba(233,67,53,0.2)";
    Chart.defaults.global.scaleFontFamily = "'Quattrocento Sans', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";
    Chart.defaults.global.scaleFontColor = "#fff";
}

function buildDoughnutChart() {

var data = [
        {
            value: 14.8,
            color: "#1a4c45",
            highlight: "#1a4c45",
            label: "Rape"
        },
        {
            value: 2.8,
            color: "#46BFBD",
            highlight: "267369",
            label: "Attempted Rape"
        },
        {
            value: 82.4,
            color: "#1a1a1a",
            highlight: "#FFC870",
            label: "Remainder Female Population"
        }
    ];
    var options = {
        segmentShowStroke: false,
        animationSteps: 100,
        percentageInnerCutout: 50,
        legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
    };
    var ctx = document.getElementById("doughnutChart").getContext("2d");
    var myDoughnutChart = new Chart(ctx).Doughnut(data, options);
    var chartLegend = myDoughnutChart.generateLegend();
    $('#doughnutChartLegend').append(chartLegend);
}


function buildRadarChart() {

var data = {
        labels: ["Intimate Partner", "Relative Other Than Spouse", "Acquaintance", "Stranger"],
        datasets: [
            {
                label: "Male",
                fillColor: "rgba(151,187,205,0.6)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [17.9, 6.8, 32.3, 60]
            },
            {
                label: "Female",
                fillColor: "rgba(26,76,69,0.5)",
                strokeColor: "rgba(26,76,69,1)",
                pointColor: "rgba(26,76,69,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(26,76,69,1)",
                data: [76, 8.6, 16.8, 14.1]
            }
        ]
    };
    var options = {
        scaleShowLine: true,
        angleShowLineOut: true,
        scaleShowLabels: false,
        scaleBeginAtZero: true,
        angleLineColor: "rgba(233,67,53,0.8)",
        angleLineWidth: 0.5,
        pointLabelFontFamily: "'Arial'",
        pointLabelFontStyle: "normal",
        pointLabelFontSize: 14,
        pointLabelFontColor: "rgba(213,242,238,0.5)",
        pointDot: true,
        pointDotRadius: 3,
        pointDotStrokeWidth: 1,
        pointHitDetectionRadius: 40,
        datasetStroke: true,
        datasetStrokeWidth: 2,
        datasetFill: true,
        legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
    };
    var ctx = document.getElementById("radarChart").getContext("2d");
    var myRadarChart = new Chart(ctx).Radar(data, options);
    var chartLegend = myRadarChart.generateLegend();
    $('#radarChartLegend').append(chartLegend);
}

function buildBarChart() {

var data = {
        labels: ["Rape", "Attempted Rape", "Threw Something", "Pushed, Grabbed,  Shoved", "Pulled Hair", "Slapped, hit", "Kicked, bit", "Choked, tried to drown", "Hit with object", "Beat up", "Threatened with gun", "Threatened with knife", "Used gun", "Used knife"],
        datasets: [
            {
            	label: "Male",
                fillColor: "rgba(151,187,205,0.5)",
                strokeColor: "rgba(151,187,205,0.8)",
                highlightFill: "rgba(151,187,205,0.75)",
                highlightStroke: "rgba(151,187,205,1)",
                data: [2.1, 0.9, 22.4, 43.5, 17.9, 53.7, 15.2, 3.9, 34.7, 15.5, 13.1, 16.1, 5.1, 9.6]
            },
            {
                label: "Female",
                fillColor: "rgba(26,76,69,0.5)",
                strokeColor: "rgba(26,76,69,0.8)",
                highlightFill: "rgba(26,76,69,0.75)",
                highlightStroke: "rgba(26,76,69,1)",
                data: [14.8, 2.8, 14.0, 30.6, 19.0, 43.0, 8.9, 7.7, 21.2, 14.1, 6.2, 5.8, 2.6, 3.5]
            }
        ]
    };
    var options = {
        scaleBeginAtZero: true,
        scaleShowGridLines: true,
        scaleGridLineColor: "rgba(255,255,255,.05)",
        scaleGridLineWidth: 1,
        scaleShowHorizontalLines: true,
        scaleShowVerticalLines: true,
        barShowStroke: true,
        barStrokeWidth: 2,
        barValueSpacing: 5,
        barDatasetSpacing: 1,
        legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
    };
    var ctx = document.getElementById("barChart").getContext("2d");
    var myBarChart = new Chart(ctx).Bar(data, options);
    var chartLegend = myBarChart.generateLegend();
    $('#barChartLegend').append(chartLegend);
}

function myFunction() {
    $('#peoplecount').append('<img src="css/person.png"/>');
}
var i = setInterval(function() { myFunction(); }, 2000);

$('a').click(function() {
    clearInterval(i);
});
