const $submitBtn = $('#submit-btn');
const $saveBtn = $('#save-btn');
const $chartBtn = $('#chart-link');

const handle1 = $('#custom-handle1');
$('#slider1').slider({
  min: 1,
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
  min: 1,
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
  min: 1,
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
  $submitBtn.modal('show');
  const q1 = $('input[name=question1]:checked').val();
  const q2 = $('input[name=question2]:checked').val();
  const q3 = $('input[name=question3]:checked').val();
  const q4 = $('input[name=question4]:checked').val();
  const q5 = $('input[name=question5]:checked').val();
  const newMood = {
    alert: parseInt($(handle1).text()),
    happy: parseInt($(handle2).text()),
    relaxed: parseInt($(handle3).text()),
    questions: [
      q1, q2, q3, q4, q5
    ]
  };
  API.saveMood(newMood);
};

$submitBtn.on('click');

$chartBtn.on('click', submitMood);
