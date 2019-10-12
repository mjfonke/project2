$(document).ready(function () {
  $('#mySlider1').slider({
    range: 'max',
    min: 1,
    max: 100,
    value: 0,
    slide: function (event, ui) {
      $('#q1').val(ui.value);
    }
  });
  $('#q1').val($('#mySlider1').slider('value'));

  $('#mySlider2').slider({
    range: 'max',
    min: 1,
    max: 100,
    value: 0,
    slide: function (event, ui) {
      $('#q2').val(ui.value);
    }
  });
  $('#q2').val($('#mySlider2').slider('value'));

  $('#mySlider3').slider({
    range: 'max',
    min: 1,
    max: 100,
    value: 0,
    slide: function (event, ui) {
      $('#q3').val(ui.value);
    }
  });
  $('#q3').val($('#mySlider3').slider('value'));

  $('#mySlider4').slider({
    range: 'max',
    min: 1,
    max: 100,
    value: 0,
    slide: function (event, ui) {
      $('#q4').val(ui.value);
    }
  });
  $('#q4').val($('#mySlider4').slider('value'));
});
