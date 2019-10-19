// function addData (chart, label, data) {
//   chart.data.labels.push(label);
//   chart.data.datasets.forEach((dataset) => {
//     dataset.data.push(data);
//   });
//   chart.update();
// }
// function removeData (chart) {
//   chart.data.labels.pop();
//   chart.data.datasets.forEach((dataset) => {
//     dataset.data.pop();
//   });
//   chart.update();
// }
// const inputData = pullData();

// const inputData = [{
//   user: 1,
//   date: '10-1-1',
//   alert: 4,
//   happy: 7,
//   relaxed: 8
// }, {
//   user: 1,
//   date: '10-2-1',
//   alert: 6,
//   happy: 4,
//   relaxed: 5
// }
// ];

const API = {
  getMoods: function (mood) {
    return $.ajax({
      type: 'GET',
      url: 'api/mood'
    });
  }
};

const moodData = async function () {
  const output = await API.getMoods();
  console.log('async complete');
  prepData(output);
};

function prepData (inputData) {
  const axisLabel = [];
  const alertLevel = [];
  const happyLevel = [];
  const relaxedLevel = [];
  const averages = [];
  for (let i = 0; i < inputData.length; i++) {
    axisLabel.push(moment(inputData[i].createdAt).format('MM/DD/YYYY'));
    alertLevel.push(inputData[i].alert);
    happyLevel.push(inputData[i].happy);
    relaxedLevel.push(inputData[i].relaxed);
    const average = (inputData[i].alert + inputData[i].happy + inputData[i].relaxed) / 3;
    averages.push(average);
  }
  const output = [axisLabel, alertLevel, happyLevel, relaxedLevel, averages];
  drawChart(output);
};

function drawChart (chartInput) {
  const ctx = document.getElementById('myChart').getContext('2d');
  /* eslint-disable */
  const myChart = new Chart(ctx, {
  /* eslint-enable */
    type: 'bar',
    backgroundColor: 'transparent',
    title: {
      text: 'Test Title'
    },
    data: {
      labels: chartInput[0],
      datasets: [{
        label: 'Overall Mood',
        data: chartInput[4],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1
      }, {
        label: 'Alert',
        data: chartInput[1],
        fill: false,
        borderColor: [
          'rgba(45, 99, 132, 1)'
        ],
        type: 'line'
      }, {
        label: 'Happy',
        data: chartInput[2],
        fill: false,
        borderColor: [
          'rgba(45, 12, 132, 1)'
        ],
        type: 'line'
      }, {
        label: 'Relaxed',
        data: chartInput[3],
        fill: false,
        borderColor: [
          'rgba(45, 99, 57, 1)'
        ],
        type: 'line'
      }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      layout: {
        padding: {
          left: 15,
          right: 15,
          top: 100,
          bottom: 15
        }
      },
      scales: {
        xAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Day'
          },
          gridLines: {
            display: false
          }
        }],
        yAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Mood'
          },
          ticks: {
            min: 0,
            max: 10,
            stepSize: 1,
            beginAtZero: true
          },
          gridLines: {
            display: true
          }
        }]
      }
    }
  });
  console.log('Chart Rendered');
}

moodData();
