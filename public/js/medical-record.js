(function($) {
  $.datetimepicker.setLocale('th');
  $('#brindDate').datetimepicker(
    {
      isRTL: false,
      autoclose:true,
      format: 'd/m/Y H:i',
      closeOnDateSelect:true,
      locale: 'th'
  }
  );
   $(".nav-tabs").on("click", "a", function(e) {
    e.preventDefault();
    if (!$(this).hasClass('add-contact')) {
      $(this).tab('show');
    }
  });
})(jQuery);
