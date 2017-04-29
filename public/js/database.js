(function($) {
  console.log("~ render database.js");
  // $(".alert").alert('close')
  addUser = function() {
    globalAlert("ทดสอบ ++", function(alert) {
      alert.S();
    });
  };

  deleteUser = function() {
    globalAlert("ทดสอบ --", function(alert) {
      alert.I();
    });
  };

})(jQuery);
