;(function () {
  window.serviceCallbacks.push(function() {
    window.services.trayService = new services.TrayService();
    window.services.SearchService = new services.SearchService();
    new window.services.AppBarService();
  })
})();

;(function () {
  window.serviceCallbacks.push(function() {
    const BreakingNewsService = new services.BreakingNewsService();
  })
})();

