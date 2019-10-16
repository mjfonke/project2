$(document).ready(function () {
  $(function () {
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
  });

  $(function () {
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
  });
  
  $(function () {
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
  });

  $('#submit-btn').on('click', function (event) {
    event.preventDefault();

    const newMood = {
      excited: $('#q1').val(),
      tired: $('#q2').val(),
      happy: $('#q3').val(),
      upset: $('#q4').val()
    };

    $.ajax('/api/moods', {
      type: 'POST',
      data: newMood
    }).then(
      function () {
        console.log('New Mood is added');
        location.reload();
        console.log(newMood);
      }
    );
  });
});
