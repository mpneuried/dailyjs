function fix_ie_overflow() {
  if (!/*@cc_on!@*/0) return;

  $('div.highlight').each(function() {
    var element = $(this);
    if (element.scrollWidth > element.offsetWidth) {
      element.css({ height: '2em', overflowY: 'hidden' });
    }
  });
}

$(function() {
  var page = window.location.pathname;
  $('#navigation li a').first().addClass('active');
  if (page != '/') {
    $('#navigation li a').each(function() {
      var element = $(this);
      if (element.attr('href').match(page)) {
        $('#navigation li a').removeClass('active');
        element.addClass('active');
      }
    });
  }

  fix_ie_overflow();

  $('input[name="q"]').focus(function() {
    var element = $(this);
    if (element.val() === 'Search')
      element.val('');
  });

  $('input[name="q"]').blur(function() {
    var element = $(this);
    if (element.val().length === 0)
      element.val('Search');
  });

  $('.showPrevious').click(function(e) {
    $(this).parent().next('div.previous').toggle();
    e.preventDefault();
  });
});
