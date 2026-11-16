/* Brikfolio home: the file's opening sequence, live demo sheets, the stress slider and feature tabs.
   Every element is visible and correct without this script; it only adds motion and interaction. */
(function () {
  'use strict';

  var doc = document.documentElement;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var EASE = 'cubic-bezier(0.16, 1, 0.3, 1)';

  doc.classList.add('b-live');

  /* --- Number formats used by the sheets -------------------------------- */
  var fmt = {
    money: function (n) { return '$' + Math.round(n).toLocaleString('en-AU'); },
    pct1: function (n) { return n.toFixed(1) + '%'; },
    pct0: function (n) { return Math.round(n) + '%'; }
  };

  function tween(el, from, to, f, dur, done) {
    var t0 = null;
    function step(t) {
      if (t0 === null) t0 = t;
      var p = Math.min(1, (t - t0) / dur);
      var e = 1 - Math.pow(1 - p, 4);
      el.textContent = f(from + (to - from) * e);
      if (p < 1) requestAnimationFrame(step);
      else if (done) done();
    }
    requestAnimationFrame(step);
  }

  /* Count every [data-count] inside root up from zero; the final text is restored exactly */
  function countUp(root, delay) {
    if (reduce) return;
    var els = root.querySelectorAll('[data-count]');
    Array.prototype.forEach.call(els, function (el) {
      var to = parseFloat(el.getAttribute('data-count'));
      var f = fmt[el.getAttribute('data-fmt')];
      if (!f || isNaN(to)) return;
      if (!el.hasAttribute('data-final')) el.setAttribute('data-final', el.textContent);
      var finalText = el.getAttribute('data-final');
      el.textContent = f(0);
      setTimeout(function () {
        tween(el, 0, to, f, 1400, function () { el.textContent = finalText; });
      }, delay || 0);
    });
  }

  function play(el, delay) {
    el.classList.add('is-in');
    countUp(el, delay);
  }

  function replay(el) {
    el.classList.remove('is-in');
    void el.offsetWidth; // restart the transitions from their start state
    play(el, 150);
  }

  /* --- Hero: three loose papers land, then the top sheet rises out of the file --- */
  function heroSequence() {
    var file = document.querySelector('[data-file]');
    if (!file) return;
    var dash = file.querySelector('.b-dash');
    file.classList.add('is-played');
    if (reduce || !file.animate) {
      if (dash) dash.classList.add('is-in');
      return;
    }
    var slips = file.querySelectorAll('.b-slip');
    var from = [
      'translate(-180px, 140px) rotate(-24deg)',
      'translate(60px, -160px) rotate(16deg)',
      'translate(220px, 90px) rotate(26deg)'
    ];
    var back = file.querySelector('.b-file__back');
    if (back) back.animate([{ opacity: 0, transform: 'translateY(20px)' }, { opacity: 1, transform: 'none' }],
      { duration: 600, easing: EASE, fill: 'backwards' });
    Array.prototype.forEach.call(slips, function (s, i) {
      var end = getComputedStyle(s).transform;
      s.animate([
        { opacity: 0, transform: from[i] },
        { opacity: 1, offset: 0.35 },
        { opacity: 1, transform: end }
      ], { duration: 820, delay: 120 + i * 170, easing: EASE, fill: 'backwards' });
    });
    if (dash) {
      dash.animate([
        { opacity: 0, transform: 'translateY(90px)', clipPath: 'inset(0 0 100% 0 round 14px)' },
        { opacity: 1, transform: 'none', clipPath: 'inset(-40px -40px -80px -40px round 14px)' }
      ], { duration: 900, delay: 820, easing: EASE, fill: 'backwards' });
      setTimeout(function () { play(dash, 0); }, 1150);
    }
  }

  /* --- Sheets further down animate once, when they scroll into view ------- */
  function observeSheets() {
    var els = document.querySelectorAll('[data-anim]');
    var list = Array.prototype.filter.call(els, function (el) { return !el.closest('[data-file]'); });
    if (reduce || !('IntersectionObserver' in window)) {
      list.forEach(function (el) { el.classList.add('is-in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        io.unobserve(en.target);
        if (en.target.classList.contains('is-in')) return;
        play(en.target, 200);
        if (en.target.hasAttribute('data-stress')) hintSlider(en.target);
      });
    }, { threshold: 0.3 });
    list.forEach(function (el) { io.observe(el); });
  }

  /* --- Signature: the rate-rise slider (real Scenario Studio stress figures, demo data) --- */
  var STRESS = [59743, 54971, 48839, 42545, 36102];
  var RATE = ['−1%', '0%', '+1%', '+2%', '+3%'];
  var stressState = { touched: false, shown: 54971, setStep: null };

  function setupStress() {
    var card = document.querySelector('[data-stress]');
    if (!card) return;
    var input = card.querySelector('[data-stress-input]');
    var rateOut = card.querySelector('[data-stress-rate]');
    var cashOut = card.querySelector('[data-stress-cash]');
    var delta = card.querySelector('[data-stress-delta]');
    var cols = card.querySelectorAll('.b-chart__col');

    function setStep(i, animate) {
      var cash = STRESS[i];
      rateOut.textContent = RATE[i];
      var diff = cash - STRESS[1];
      delta.textContent = i === 1 ? 'Today’s rates'
        : (diff > 0 ? '+' : '−') + fmt.money(Math.abs(diff)) + ' a year vs today';
      Array.prototype.forEach.call(cols, function (c, n) { c.classList.toggle('is-on', n === i); });
      input.setAttribute('aria-valuetext', RATE[i] + ', worst-year cash flow ' + fmt.money(cash));
      if (animate && !reduce) tween(cashOut, stressState.shown, cash, fmt.money, 380);
      else cashOut.textContent = fmt.money(cash);
      stressState.shown = cash;
    }
    stressState.setStep = setStep;

    input.addEventListener('input', function () {
      stressState.touched = true;
      setStep(parseInt(input.value, 10) + 1, true);
    });
    Array.prototype.forEach.call(cols, function (c, n) {
      c.addEventListener('click', function () {
        stressState.touched = true;
        input.value = String(n - 1);
        setStep(n, true);
      });
    });
    setStep(parseInt(input.value, 10) + 1, false);
  }

  /* Once, on first view: sweep the slider up to +3% and back, to show it moves. Stops if touched. */
  function hintSlider(card) {
    if (reduce || !stressState.setStep) return;
    var input = card.querySelector('[data-stress-input]');
    var path = [2, 3, 4, 3, 2, 1];
    var k = 0;
    setTimeout(function next() {
      if (stressState.touched || k >= path.length) return;
      input.value = String(path[k] - 1);
      stressState.setStep(path[k], true);
      k++;
      setTimeout(next, k === 3 ? 900 : 520);
    }, 1900);
  }

  /* --- Feature tabs: WAI-ARIA tabs pattern; each sheet replays when shown --- */
  function setupTabs() {
    var root = document.querySelector('[data-ftabs]');
    if (!root) return;
    var list = root.querySelector('[role="tablist"]');
    var tabs = Array.prototype.slice.call(root.querySelectorAll('[role="tab"]'));
    var panels = tabs.map(function (t) { return document.getElementById(t.getAttribute('aria-controls')); });
    function select(i, focus) {
      tabs.forEach(function (t, n) {
        var on = n === i;
        t.setAttribute('aria-selected', on ? 'true' : 'false');
        t.tabIndex = on ? 0 : -1;
        panels[n].hidden = !on;
      });
      if (focus) tabs[i].focus();
      var sheet = panels[i].querySelector('[data-anim]');
      if (sheet && ready) replay(sheet);
    }
    tabs.forEach(function (t, n) {
      t.addEventListener('click', function () { select(n, false); });
      t.addEventListener('keydown', function (e) {
        var k = e.key, i = n;
        if (k === 'ArrowRight') i = (n + 1) % tabs.length;
        else if (k === 'ArrowLeft') i = (n - 1 + tabs.length) % tabs.length;
        else if (k === 'Home') i = 0;
        else if (k === 'End') i = tabs.length - 1;
        else return;
        e.preventDefault();
        select(i, true);
      });
    });
    var ready = false;
    list.hidden = false;
    root.classList.add('ftabs--ready');
    select(0, false);
    ready = true;
  }

  setupStress();
  setupTabs();
  heroSequence();
  observeSheets();
})();
