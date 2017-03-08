/* globals $ */

'use strict';

var Text = function (lang) {
  this.en, this.de;
  this.changeLanguage(lang);
};

Text.prototype.changeLanguage = function (lang) {
  this.lang = lang;
  this.retrieveText();
};

Text.prototype.retrieveText = function () {
  var self = this;
  $.ajax({
    type: 'GET',
    url: 'assets/lang/en.json',
    dataType: 'json',
    cache: false,
    success: function (data) {
      self.en = data;
      self.setText();
    },
    error: function (xhr, errorType, error) {
      console.log('error: ' + error + ', errorType: ' + errorType);
    }
  });

  $.ajax({
    type: 'GET',
    url: 'assets/lang/de.json',
    dataType: 'json',
    cache: false,
    success: function (data) {
      self.de = data;
      self.setText();
    },
    error: function (xhr, errorType, error) {
      console.log('error: ' + error + ', errorType: ' + errorType);
    }
  });
};

Text.prototype.setText = function (lang) {
  var self = this;
  if (lang) {
    this.lang = lang;
  }
  this.targets = $('[data-text]');
  this.targets.each(function () {
    var textID = $(this).data('text');
    $(this).html(self[self.lang][textID]);
  });
};

