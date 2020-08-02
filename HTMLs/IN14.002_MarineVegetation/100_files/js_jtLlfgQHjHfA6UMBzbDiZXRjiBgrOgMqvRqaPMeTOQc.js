function email_hide_popup(url) {
  newwindow=window.open(url,'name','height=200,width=150');
  if (window.focus) {newwindow.focus()}
  return false;
}

(function ($) {
  $(document).ready(function(){
    $('[rel="email-hide-show-form"]').click(function () {
        $(this).addClass('hidden');
        $('#email-hide-show-email-form').removeClass('hidden');
        return false;
    });

    $('[rel="email-hide-hide-form"]').click(function () {
      $('[rel="email-hide-show-form"]').removeClass('hidden');
      $('#email-hide-show-email-form').addClass('hidden');
      return false;
    });
  });
})(jQuery);;
