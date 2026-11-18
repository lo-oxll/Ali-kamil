/* تبديل الوضع الليلي / النهاري */
(function () {
  var root = document.documentElement;
  var mq = window.matchMedia('(prefers-color-scheme: dark)');

  function current() {
    return root.getAttribute('data-theme') || (mq.matches ? 'dark' : 'light');
  }

  function setMeta(mode) {
    var metas = document.querySelectorAll('meta[name="theme-color"]');
    for (var i = 0; i < metas.length; i++) {
      metas[i].removeAttribute('media');
      metas[i].setAttribute('content', mode === 'dark' ? '#0a0a0b' : '#f6f5f1');
    }
  }

  document.getElementById('themeBtn').addEventListener('click', function () {
    var next = current() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    setMeta(next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });
})();
