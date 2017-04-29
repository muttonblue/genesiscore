/**   S , I, W , D */
globalAlert = function(t, cb) {
  var conAlter = $('<div class="global-alert alert" role="alert">');
  var bColse = '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
               '<span aria-hidden="true">&times;</span>' +
               '</button>';
  var contextAlert = $('<div class="global-alert-msg">');
      conAlter.append(bColse);
      conAlter.append(contextAlert);
  $('#page-content-wrapper').prepend(conAlter);

  var globalAlertMsg = $('.global-alert-msg');
  globalAlertMsg.html(t);

  var s = {
    S: function() {
      conAlter.addClass("alert-success");
      conAlter.alert();
    },
    I: function() {
      conAlter.addClass("alert-info");
      conAlter.alert();
    },
    W: function() {
      conAlter.addClass("alert-warning");
      conAlter.alert();
    },
    D: function() {
      conAlter.addClass("alert-danger");
      conAlter.alert();
    }
  };
  cb(s);
  window.setTimeout(function() {
    conAlter.alert('close');
  }, 5000);
};
