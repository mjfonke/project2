const $submitBtn = $('#submit-btn');
const $chartBtn = $('#chart-btn');

const handle1 = $('#custom-handle1');
$('#slider1').slider({
  min: 0,
  max: 10,
  value: 5,
  create: function () {
    handle1.text($(this).slider('value'));
  },
  slide: function (event, ui) {
    handle1.text(ui.value);
  }
});

const handle2 = $('#custom-handle2');
$('#slider2').slider({
  min: 0,
  max: 10,
  value: 5,
  create: function () {
    handle2.text($(this).slider('value'));
  },
  slide: function (event, ui) {
    handle2.text(ui.value);
  }
});

const handle3 = $('#custom-handle3');
$('#slider3').slider({
  min: 0,
  max: 10,
  value: 5,
  create: function () {
    handle3.text($(this).slider('value'));
  },
  slide: function (event, ui) {
    handle3.text(ui.value);
  }
});

const API = {
  saveMood: function (mood) {
    return $.ajax({
      headers: {
        'Content-Type': 'application/json'
      },
      type: 'POST',
      url: 'api/mood',
      data: JSON.stringify(mood)
    });
  }
};

const submitMood = function (event) {
  event.preventDefault();
  const newMood = {
    alert: parseInt($(handle1).text()),
    happy: parseInt($(handle2).text()),
    relaxed: parseInt($(handle3).text()),
    eaten: parseInt($('input[name=question1]:checked').val()),
    slept: parseInt($('input[name=question2]:checked').val()),
    showered: parseInt($('input[name=question3]:checked').val()),
    worked: parseInt($('input[name=question4]:checked').val()),
    exercised: parseInt($('input[name=question5]:checked').val())
  };
  console.log(newMood);
  API.saveMood(newMood);
  window.location.href = '/charts';
};

$submitBtn.on('click');
$chartBtn.on('click', submitMood);
