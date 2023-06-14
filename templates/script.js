// Load the CSV file
Plotly.d3.csv("data.csv", function(err, data) {
    if (err) throw err;

    // Extract data from CSV columns
    var countries = data.map(row => row.Country);
    var tuberculosis = data.map(row => parseFloat(row.tuberculosis));
    var diabetes = data.map(row => parseFloat(row.diabetes));
    var hivTotal = data.map(row => parseFloat(row.HIV_total));

    // Calculate the average values
    var avgTuberculosis = calculateAverage(tuberculosis);
    var avgDiabetes = calculateAverage(diabetes);
    var avgHivTotal = calculateAverage(hivTotal);

    // Create the traces for the scatter plots
    var trace1 = {
        x: countries,
        y: tuberculosis,
        mode: 'markers',
        type: 'scatter',
        name: 'Tuberculosis'
    };

    var trace2 = {
        x: countries,
        y: diabetes,
        mode: 'markers',
        type: 'scatter',
        name: 'Diabetes'
    };

    var trace3 = {
        x: countries,
        y: hivTotal,
        mode: 'markers',
        type: 'scatter',
        name: 'HIV Total'
    };

    // Create the trace for the bar chart
    var trace4 = {
        x: ['Tuberculosis', 'Diabetes', 'HIV Total'],
        y: [avgTuberculosis, avgDiabetes, avgHivTotal],
        type: 'bar',
        name: 'Average Value'
    };

    // Create the layout for the chart
    var layout = {
        title: 'Data Visualization',
        xaxis: { title: 'Country' },
        yaxis: { title: 'Value' },
        barmode: 'group'
    };

    // Create the data array
    var chartData = [trace1, trace2, trace3, trace4];

    // Render the chart
    Plotly.newPlot('chart', chartData, layout);
});

// Function to calculate the average value
function calculateAverage(array) {
    var sum = array.reduce((acc, val) => acc + val, 0);
    var average = sum / array.length;
    return average;
}
