var bc_isManagedRelease = true;var bcShimDestripeTime;!function() {    var t = [  { s: [], w: 0.9 },  { s: [], w: 1 },  ]; var ci, c;

var qs = decodeURIComponent(location.search.split("+").join(" ")),
  p,
  re = /[?&]?([^=]+)=([^&]*)/g;

while (p = re.exec(qs)) {
  if (decodeURIComponent(p[1]) === 'bc-mr') {
    ci = Number(p[2]);
    if (p[2] == null || p[2] === '' || isNaN(p[2]) || ci < 0 || ci > t.length - 1) {
      throw new Error('The optional "bc-mr" querystring parameter must be a natural number ' +
      'between 0 and ' + (t.length - 1));
    }
    break;
  }
}


try {
  if (ci === undefined) {
    c = localStorage.getItem('bc-managed-release-choice-6.37.1_6.37.2');

    if (c === null) {
      c = Math.random();
      localStorage.setItem('bc-managed-release-choice-6.37.1_6.37.2', c);
    } else {
      c = Number(c);
    }

      for (var i = 0; i < t.length; i++) {
    if (t[i].w > c) {
      ci = i;
      break;
    }
  }

  }
} catch (err) {
  ci = 0;
  bc_isManagedRelease = false;
  (window.console && console.log('Unable to use local storage.'));
}


(window.console && console.log('Using player ' + ci));