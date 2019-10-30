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

let myChart = null;

const APIreq = {
  getMoods: function (mood) {
    return $.ajax({
      type: 'GET',
      url: 'api/mood'
    });
  },
  getBreakfast: function (mood) {
    return $.ajax({
      type: 'GET',
      url: 'api/mood/breakfast'
    });
  },
  getSlept: function (mood) {
    return $.ajax({
      type: 'GET',
      url: 'api/mood/slept'
    });
  },
  getShowered: function (mood) {
    return $.ajax({
      type: 'GET',
      url: 'api/mood/showered'
    });
  },
  getWorked: function (mood) {
    return $.ajax({
      type: 'GET',
      url: 'api/mood/worked'
    });
  },
  getExercised: function (mood) {
    return $.ajax({
      type: 'GET',
      url: 'api/mood/exercised'
    });
  }
};

let position = 0;
let myMoods = [];

function findMoods (key) {
  const output = [];
  for (let i = 0; i < myMoods.length; i++) {
    if (myMoods[i][key] === true) {
      output.push(myMoods[i]);
    }
  }
  return output;
};

$('.btn').on('click', function () {
  switch (this.id) {
    case 'prev10':
      position = Math.max(position - 10, 0);
      const prev10 = [];
      for (let i = position; i < position + 10; i++) {
        prev10.push(myMoods[i]);
<<<<<<< HEAD
      }
=======
      };
      console.log('position: ' + position);
      console.log('prev10: ' + JSON.stringify(prev10));
>>>>>>> 5dc0c7d98d2aa66b507b6499539ca677b292abf7
      prepData(prev10);
      break;
    case 'next10':
      position = Math.min(position + 10, Math.max(myMoods.length - 10, 0));
      const next10 = [];
      for (let i = position; i < position + 10; i++) {
        next10.push(myMoods[i]);
<<<<<<< HEAD
      }
=======
      };
      console.log('position: ' + position);
      console.log('next10: ' + JSON.stringify(next10));
>>>>>>> 5dc0c7d98d2aa66b507b6499539ca677b292abf7
      prepData(next10);
      break;
    default:
      break;
  };
});

$('.dropdown-item').on('click', function () {
  switch (this.id) {
    case 'breakfast':
      prepData(findMoods('eaten'));
      break;
    case 'slept':
      prepData(findMoods('slept'));
      break;
    case 'showered':
      prepData(findMoods('showered'));
      break;
    case 'worked':
      prepData(findMoods('worked'));
      break;
    case 'exercised':
      prepData(findMoods('exercised'));
      break;
    default:
      break;
  }
});

const moodData = async function () {
  const output = await APIreq.getMoods();
  console.log('async complete');
  myMoods = output;
  console.log('myMoods initial :' + JSON.stringify(myMoods));
  position = Math.max(output.length - 10, 0);
  const last10 = [];
  for (let i = position; i < output.length; i++) {
    last10.push(output[i]);
  }
  prepData(last10);
};

function prepData (inputData) {
  const axisLabel = [];
  const alertLevel = [];
  const happyLevel = [];
  const relaxedLevel = [];
  const averages = [];
  for (let i = 0; i < inputData.length; i++) {
    axisLabel.push(/* eslint-disable */moment/* eslint-enable */(inputData[i].createdAt).format('MM/DD/YY hh:mm a'));
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
  if (myChart != null) {
    myChart.destroy();
  };
  const ctx = document.getElementById('myChart').getContext('2d');
  /* eslint-disable */
  myChart = new Chart(ctx, {
  /* eslint-enable */
    type: 'bar',
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
