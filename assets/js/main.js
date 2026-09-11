(function () {
  var root = document.documentElement;
  var mq = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

  function current() {
    var t = root.getAttribute('data-theme');
    if (t === 'dark' || t === 'light') return t;
    return mq && mq.matches ? 'dark' : 'light';
  }

  document.querySelectorAll('[data-theme-toggle]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var next = current() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('bn-theme', next); } catch (e) {}
    });
  });

  var masthead = document.querySelector('.masthead');
  var navToggle = document.querySelector('[data-nav-toggle]');
  function setNav(open) {
    if (!masthead || !navToggle) return;
    masthead.classList.toggle('is-open', open);
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  if (navToggle) {
    navToggle.addEventListener('click', function () {
      setNav(navToggle.getAttribute('aria-expanded') !== 'true');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && masthead.classList.contains('is-open')) { setNav(false); navToggle.focus(); }
    });
  }

  document.querySelectorAll('[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var src = document.getElementById(btn.getAttribute('data-copy'));
      if (!src || !navigator.clipboard) return;
      var label = btn.textContent;
      navigator.clipboard.writeText(src.textContent).then(function () {
        btn.textContent = btn.getAttribute('data-copied') || 'Copied!';
        setTimeout(function () { btn.textContent = label; }, 2000);
      });
    });
  });
})();
