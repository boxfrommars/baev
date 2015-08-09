'use strict';

$(document).ready(function () {
  $('.pseudo').click(function () {
    var href = '#' + $(this).attr('id').substr(2);
    $(href).slideToggle();
    return false;
  });
});
