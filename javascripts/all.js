function fix_ie_overflow() {
  if (!/*@cc_on!@*/0) return;

  $$('div.highlight').each(function(element) {
    if (element.scrollWidth > element.offsetWidth) {
      element.setStyle({ height: '2em', overflowY: 'hidden' });
    }
  });
}

document.observe('dom:loaded', function() {
  var page = window.location.pathname;
  $$('#navigation li a').first().addClassName('active');
  if (page != '/') {
    $$('#navigation li a').each(function(element) {
      if (element.href.match(page)) {
        $$('#navigation li a').invoke('removeClassName', 'active');
        element.addClassName('active');
      }
    });
  }

  fix_ie_overflow();
});
