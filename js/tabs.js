// Tabs for publications.html and projects.html.
// Builds one tab per <section class="tab-panel" id="..."> using its <h2> as label,
// so adding a tab only requires adding its section. Without JS, all sections are shown.
(function () {
  var nav = document.getElementById('tab-nav');
  var list = document.getElementById('tab-panels');
  if (!nav || !list) return;

  var years = list.querySelectorAll('.tab-panel');
  if (!years.length) return;
  var tabs = [];

  function show(id, updateHash) {
    var found = false;
    years.forEach(function (s) {
      var on = s.id === id;
      s.classList.toggle('active', on);
      found = found || on;
    });
    if (!found) return show(years[0].id, false);
    tabs.forEach(function (a) {
      var on = a.getAttribute('href') === '#' + id;
      a.classList.toggle('active', on);
      a.setAttribute('aria-selected', on);
    });
    if (updateHash) history.replaceState(null, '', '#' + id);
  }

  years.forEach(function (s) {
    var a = document.createElement('a');
    a.href = '#' + s.id;
    a.textContent = s.querySelector('h2').textContent;
    a.setAttribute('role', 'tab');
    a.addEventListener('click', function (ev) {
      ev.preventDefault();
      show(s.id, true);
    });
    nav.appendChild(a);
    tabs.push(a);
  });

  nav.setAttribute('role', 'tablist');
  list.classList.add('js-tabs');
  show(location.hash.slice(1), false);
})();
