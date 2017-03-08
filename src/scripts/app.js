/* globals $ */

'use strict';

var App = function() {
  var lang = $('.languageSelector').data('lang');
  this.text = new Text(lang);
  this.setClickListeners();
  $('#age').html(this.calculateAge());
};

App.prototype.setClickListeners = function () {
  var self = this;

  $('.tab').on('click', function () {
    var id = this.id;

    $('.tab').removeClass('active');
    $(this).addClass('active');

    $('section.welcome .active').removeClass('active');

    $('section.welcome #' + id).addClass('active');
  });

  $('.languageSelector').on('click', function () {
    if ($(this).data('lang') === ('de')) {
      $(this).data('lang', 'en');
      $(this).data('text', 'languageEN');

      self.text.setText($(this).data('lang'));
    } else {
      $(this).data('lang', 'de');
      $(this).data('text', 'languageDE');

      self.text.setText($(this).data('lang'));
    }
  });
};

App.prototype.calculateAge = function () {
  var birthday = new Date('May 26, 1995');
  var ageDif = Date.now() - birthday.getTime();
  var ageDate = new Date(ageDif);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};