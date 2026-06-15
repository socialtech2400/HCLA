/*
Source snippet only. Copy into each production page file.
Do not import this file from GHL pages.
*/

(function () {
  var root = document.querySelector('[data-hcla-page]');
  if (!root) return;

  var toggle = root.querySelector('.hcla-nav-toggle');
  var links = root.querySelector('.hcla-nav-links');

  if (!toggle || !links) return;

  toggle.addEventListener('click', function () {
    var expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    links.classList.toggle('is-open', !expanded);
  });
})();
