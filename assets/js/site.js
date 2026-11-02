// Small enhancements only: the page works fully without this script.
(function () {
  var menu = document.querySelector('.menu');
  if (menu) {
    menu.querySelectorAll('.menu-panel a').forEach(function (a) {
      a.addEventListener('click', function () { menu.removeAttribute('open'); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') menu.removeAttribute('open');
    });
  }
})();
